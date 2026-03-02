const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Manrope:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #0f0c0b;
        color: #e5e3db;
        font-family: 'Manrope', sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      .page {
        width: 794px; /* A4 width */
        height: 1122px; /* A4 height */
        padding: 60px 80px;
        box-sizing: border-box;
        position: relative;
      }
      .accent-line {
        position: absolute;
        top: 60px;
        bottom: 60px;
        left: 50px;
        width: 1px;
        background-color: #bca474;
      }
      .header {
        text-align: right;
        font-size: 10px;
        color: #bca474;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 60px;
      }
      h1 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 42px;
        font-weight: 400;
        line-height: 1.1;
        margin: 0 0 10px 0;
        color: #e5e3db;
      }
      h1 span {
        color: #bca474;
      }
      .subtitle {
        font-size: 10px;
        color: #8c857b;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 40px;
      }
      .divider {
        height: 1px;
        background-color: rgba(188, 164, 116, 0.5);
        width: 100%;
        margin: 30px 0;
      }
      h2 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 20px;
        font-weight: 600;
        color: #bca474;
        margin: 0 0 20px 0;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 12px;
        font-size: 12px;
        font-weight: 300;
      }
      .row .label {
        background-color: #0f0c0b;
        padding-right: 10px;
        z-index: 1;
      }
      .row .value {
        background-color: #0f0c0b;
        padding-left: 10px;
        z-index: 1;
        font-weight: 400;
      }
      .row-dots {
        flex-grow: 1;
        border-bottom: 1px dotted rgba(140, 133, 123, 0.5);
        margin: 0 5px;
        position: relative;
        top: -4px;
      }
      .total-row {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        font-family: 'Cormorant Garamond', serif;
        font-size: 18px;
        color: #bca474;
        font-weight: 600;
      }
      .footer {
        position: absolute;
        bottom: 60px;
        left: 80px;
        right: 80px;
        font-size: 10px;
        color: #8c857b;
        font-weight: 300;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="accent-line"></div>
      
      <div class="header">ДСП / STRICTLY CONFIDENTIAL</div>
      
      <h1>ФИНАНСОВАЯ<br>АРХИТЕКТУРА<br><span>ПРОЕКТА</span></h1>
      <div class="subtitle">ВЕКТОР: ПРЕМИУМ-ДОСУГ / ЭЛИТНЫЙ СИГАРНЫЙ КЛУБ</div>
      
      <div class="divider" style="width: 70%; margin-bottom: 50px;"></div>
      
      <h2>I. Капитальные инвестиции (CAPEX)</h2>
      
      <div class="row">
        <div class="label">Инженерные коммуникации (климат/вентиляция)</div>
        <div class="row-dots"></div>
        <div class="value">15.00M ₽</div>
      </div>
      <div class="row">
        <div class="label">Оборудование Walk-in хьюмидора</div>
        <div class="row-dots"></div>
        <div class="value">5.00M ₽</div>
      </div>
      <div class="row">
        <div class="label">Дизайн, премиальная отделка, мебель</div>
        <div class="row-dots"></div>
        <div class="value">48.00M ₽</div>
      </div>
      <div class="row">
        <div class="label">Лицензирование и фонд развития</div>
        <div class="row-dots"></div>
        <div class="value">2.00M ₽</div>
      </div>
      <div class="row">
        <div class="label">Операционный резерв</div>
        <div class="row-dots"></div>
        <div class="value">5.00M ₽</div>
      </div>
      
      <div class="total-row">
        <div>ИТОГОВЫЙ БЮДЖЕТ ЗАПУСКА</div>
        <div>75.00M ₽</div>
      </div>
      
      <div class="divider" style="margin: 40px 0;"></div>
      
      <h2>II. Прогноз оборота (MRR)</h2>
      
      <div class="row">
        <div class="label">Членские взносы (10 резидентов х 50k)</div>
        <div class="row-dots"></div>
        <div class="value">0.50M ₽</div>
      </div>
      <div class="row">
        <div class="label">Разовые посещения (30 гостей x 3k)</div>
        <div class="row-dots"></div>
        <div class="value">0.09M ₽</div>
      </div>
      <div class="row">
        <div class="label">Реализация сигар и премиум-алкоголя</div>
        <div class="row-dots"></div>
        <div class="value">0.75M ₽</div>
      </div>
      
      <div class="total-row">
        <div>ЦЕЛЕВОЙ ЕЖЕМЕСЯЧНЫЙ ОБОРОТ</div>
        <div>1.34M ₽</div>
      </div>
      
      <div class="footer">
        Аналитика основана на консервативном прогнозе загруженности.<br>
        Ожидаемая рентабельность — ~15% годовых. Период возврата инвестиций: 80-90 месяцев.
      </div>
    </div>
  </body>
  </html>
  `;
  
  const browser = await puppeteer.launch({ 
    headless: 'new', // Use new headless mode
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  
  // Wait for web fonts to load
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: path.join(__dirname, 'public/financial_model.pdf'),
    printBackground: true,
    width: '794px',
    height: '1122px',
    pageRanges: '1'
  });
  
  await browser.close();
  console.log('PDF generated successfully with full Cyrillic support!');
})();
