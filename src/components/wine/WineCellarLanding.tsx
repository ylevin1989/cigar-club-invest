import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Shield,
  Thermometer,
  Wine,
} from 'lucide-react'

const trustCards = [
  {
    icon: Thermometer,
    title: 'Константные 12°C и 70% влажности',
    body: 'Автономная климатическая система с дублированием питания и историей показателей по каждой бутылке за весь период хранения.',
    stat: '12°C / 70%',
  },
  {
    icon: BadgeCheck,
    title: '100% прозрачный прованс',
    body: 'Прямое подтверждение от шато и негоциантов. Никаких серых цепочек, перекупщиков и сомнительного происхождения.',
    stat: 'Direct Provenance',
  },
  {
    icon: Shield,
    title: 'Нулевая толерантность к ТХА',
    body: 'Если вино оказалось с дефектом пробки, мы меняем бутылку или возвращаем средства без экспертиз и унизительных процедур.',
    stat: '0 ₽ риска',
  },
]

const visitItems = [
  'Закрытый двор и предварительно подготовленный слот визита без случайных встреч.',
  'Эдвайзер работает на вашей стороне, а не на стороне месячного плана продаж.',
  'Весь сценарий визита строится вокруг конфиденциальности, времени клиента и точности запроса.',
]

const serviceItems = [
  {
    title: 'Формирование инвестиционных портфелей',
    pain: 'Страх вложить капитал в неликвид или вино без реального потенциала роста.',
    result:
      'Отбор лотов с потенциалом роста стоимости от 15% годовых по данным Liv-ex и сопровождение сделок на этапе En Primeur.',
  },
  {
    title: 'Консьерж-экспедирование',
    pain: 'Невозможность деликатно и быстро получить вино нужной температуры к ужину или частному событию.',
    result:
      'Доставка в термокофре, декантация в вашей резиденции и аудит домашнего шкафа в течение 90 минут.',
  },
  {
    title: 'Страховой депозитарий в особняке',
    pain: 'Риск порчи коллекции дома, нехватка места и отсутствие режима хранения банковского уровня.',
    result:
      'Персональная ячейка с NDA-протоколом, контролируемым климатом и защитой информации о составе коллекции.',
  },
]

const experts = [
  'Андрей С. — 15 лет верификации редких винтажей Бордо и Бургундии, 14 выявленных подделок за 2025 год, защищенный капитал клиентов на ₽42 млн.',
  'Елена В. — магистр энологии (Бордо), 20+ частных коллекций в РФ, капитализация более $5 млн и средний прирост активов 18% за 3 года.',
  'Марк Д. — инженер климатических систем, спроектировал хранилище с погрешностью температуры не более 0,2°C в год.',
]

const quotes = [
  'Искал Petrus 2010 с подтвержденным трекингом перевозки. Здесь впервые увидел реальные отчеты с термодатчиков от Бордо до Москвы.',
  'Приватность решает все: закрытый въезд, никого лишнего внутри и только конкретика по моему запросу, без показного снобизма.',
  'Бутылку с дефектом за 180 тысяч заменили по одному сообщению. Без экспертиз, ожиданий и попыток переложить риск на клиента.',
]

const revenueLines = [
  { label: 'Продажа вина в бутылках', range: '500 000–600 000 ₽', share: '30–40%' },
  { label: 'Бокальное вино', range: '300 000–400 000 ₽', share: '25–30%' },
  { label: 'Дегустационные сессии', range: '150 000–200 000 ₽', share: '15–20%' },
  { label: 'Закуски к вину', range: '50 000–100 000 ₽', share: '10–15%' },
]

const yearlyForecast = [
  '1–3 месяц: настройка клиентского потока и первичный оборот 800–950 тыс. ₽/мес.',
  '4–6 месяц: стабилизация посещаемости и выход к средней выручке 1,0–1,1 млн ₽/мес.',
  '7–9 месяц: усиление клубного ядра, рост доли бокального вина и дегустаций до 1,1–1,2 млн ₽/мес.',
  '10–12 месяц: закрепление private-advisory модели и годовой run-rate свыше 13 млн ₽.',
]

function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-90px' },
    transition: { duration: 0.85, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }
}

export default function WineCellarLanding() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-gold/10 bg-[linear-gradient(180deg,rgba(10,10,11,0.18),rgba(10,10,11,0.82)_40%,#09090b_100%)] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/mansion/exterior.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,23,37,0.26),transparent_28%),radial-gradient(circle_at_left,rgba(197,160,89,0.12),transparent_24%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...reveal()} className="relative z-10 max-w-4xl">
            <span className="mb-8 inline-flex items-center gap-3 border border-brand-gold/25 bg-black/30 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-brand-gold backdrop-blur-sm">
              <span className="h-px w-8 bg-brand-gold/70" />
              Quiet Luxury Cellar
            </span>
            <h1 className="text-5xl leading-[1.02] text-brand-light md:text-7xl lg:text-[5.8rem]">
              Приватный винный особняк:
              <span className="mt-3 block italic text-gradient-gold">абсолютная защита подлинности и вашего капитала</span>
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-brand-light/74 md:text-xl">
              Управляем энологическими рисками HNWI-клиентов: от онлайн-мониторинга термодатчиков в погребе до
              мгновенного выкупа бутылок с дефектом пробки.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#private-visit"
                className="inline-flex items-center justify-center gap-3 bg-brand-gold px-7 py-4 text-sm uppercase tracking-[0.24em] text-brand-bg transition-transform duration-300 hover:-translate-y-0.5"
              >
                Забронировать приватный визит
                <ArrowRight size={16} />
              </a>
              <a
                href="#trust"
                className="inline-flex items-center justify-center border border-brand-gold/30 px-7 py-4 text-sm uppercase tracking-[0.24em] text-brand-light transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold"
              >
                Архитектура гарантий
              </a>
            </div>
          </motion.div>

          <motion.div
            {...reveal(1)}
            className="relative z-10 self-end border border-brand-gold/15 bg-[linear-gradient(180deg,rgba(22,18,18,0.8),rgba(9,9,11,0.92))] p-6 backdrop-blur-md md:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Sensor Live</p>
              <span className="text-xs uppercase tracking-[0.22em] text-emerald-400">Online</span>
            </div>
            <div className="grid gap-4 text-sm text-brand-light/84">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <span>Температура погреба</span>
                <span className="text-2xl text-brand-gold">12.0°C</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <span>Влажность</span>
                <span className="text-2xl text-brand-gold">70%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <span>Резерв питания</span>
                <span className="text-brand-light">Dual backup</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span>Последнее отклонение</span>
                <span className="text-brand-light">0.2°C / 0%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="trust" className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Архитектура гарантий
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Инженерная прозрачность
              <span className="block italic font-light text-brand-gold">вместо красивых обещаний</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {trustCards.map((card, index) => (
              <motion.article
                key={card.title}
                {...reveal(index)}
                className="border border-brand-gold/12 bg-[linear-gradient(180deg,rgba(34,24,24,0.7),rgba(10,10,11,0.86))] p-7"
              >
                <card.icon className="mb-6 text-brand-gold" size={22} strokeWidth={1.5} />
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brand-gold">{card.stat}</p>
                <h3 className="mb-4 text-2xl text-brand-light">{card.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted md:text-base">{card.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="private-visit" className="border-y border-white/8 bg-brand-onyx px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div {...reveal()} className="max-w-2xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Приватный визит
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Ваши границы
              <span className="block italic font-light text-brand-gold">неприкосновенны</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-muted md:text-lg">
              Это не посещение бутика. Это закрытый визит в особняк, где время, маршрут и формат общения подчинены
              только вашему запросу.
            </p>
          </motion.div>
          <div className="grid gap-5">
            {visitItems.map((item, index) => (
              <motion.article
                key={item}
                {...reveal(index)}
                className="flex items-start gap-4 border border-white/10 bg-white/[0.03] p-6"
              >
                <Clock3 className="mt-1 shrink-0 text-brand-gold" size={18} strokeWidth={1.5} />
                <p className="text-base leading-relaxed text-brand-light/86">{item}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...reveal()} className="max-w-2xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Философия эдвайзинга
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Консьерж,
              <span className="block italic font-light text-brand-gold">а не лектор</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-muted md:text-lg">
              Мы не учим вас пить вино и не толкаем залежалые позиции. Мы защищаем ваши интересы и экономим время,
              выступая как family office в мире энологии.
            </p>
          </motion.div>

          <motion.div
            {...reveal(1)}
            className="border border-brand-gold/12 bg-[linear-gradient(180deg,rgba(51,16,20,0.18),rgba(10,10,11,0.94))] p-8"
          >
            <div className="flex items-start gap-4">
              <BriefcaseBusiness className="mt-1 shrink-0 text-brand-gold" size={20} strokeWidth={1.5} />
              <p className="text-base leading-relaxed text-brand-light/86 md:text-lg">
                Ваш запрос анализируется как актив: мы учитываем ликвидность, зрелость, provenance, сценарий хранения
                и момент входа, а не только бренд на этикетке.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-gold/10 bg-[linear-gradient(180deg,#0b0b0d_0%,#111113_100%)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Решения, а не товары
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Селекция,
              <span className="block italic font-light text-brand-gold">хранение и экспедирование</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceItems.map((item, index) => (
              <motion.article
                key={item.title}
                {...reveal(index)}
                className="flex h-full flex-col gap-6 border border-white/10 bg-black/20 p-7"
              >
                <Wine className="text-brand-gold" size={20} strokeWidth={1.5} />
                <div>
                  <h3 className="mb-4 text-2xl text-brand-light">{item.title}</h3>
                  <p className="mb-5 border-l border-white/10 pl-4 text-sm leading-relaxed text-brand-muted">
                    {item.pain}
                  </p>
                  <p className="border-l border-brand-gold/40 pl-4 text-sm leading-relaxed text-brand-light/86">
                    {item.result}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Личный кабинет коллекционера
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Ваш погреб
              <span className="block italic font-light text-brand-gold">в вашем смартфоне</span>
            </h2>
          </motion.div>
          <motion.div
            {...reveal(1)}
            className="grid gap-8 border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[1fr_0.8fr]"
          >
            <div className="space-y-5 text-base leading-relaxed text-brand-light/86">
              <p>Интеграция с Liv-ex, уведомления о пике зрелости винтажей и аудит коллекции 24/7.</p>
              <p>Это не каталог и не CRM. Это private dashboard, где капитал, хранение и зрелость отображаются как единая система управления активом.</p>
            </div>
            <div className="grid gap-4 text-sm">
              <div className="border border-brand-gold/15 bg-black/25 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-gold">Liv-ex sync</p>
                <p className="mt-3 text-brand-light">Market signal: Burgundy +14.8%</p>
              </div>
              <div className="border border-brand-gold/15 bg-black/25 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-gold">Maturity window</p>
                <p className="mt-3 text-brand-light">Peak window opens in 11 months</p>
              </div>
              <div className="border border-brand-gold/15 bg-black/25 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-gold">Cellar audit</p>
                <p className="mt-3 text-brand-light">42 bottles stored under monitored provenance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-brand-onyx px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Экспертиза и доверие
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Система,
              <span className="block italic font-light text-brand-gold">а не витрина</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {experts.map((expert, index) => (
              <motion.article
                key={expert}
                {...reveal(index)}
                className="border border-white/10 bg-white/[0.03] p-6"
              >
                <Activity className="mb-5 text-brand-gold" size={18} strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-brand-light/86">{expert}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {quotes.map((quote, index) => (
              <motion.blockquote
                key={quote}
                {...reveal(index)}
                className="border border-brand-gold/12 bg-black/20 p-6 text-sm leading-relaxed text-brand-muted"
              >
                “{quote}”
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...reveal()} className="max-w-xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Финансовая модель
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Экономика
              <span className="block italic font-light text-brand-gold">премиального винного погреба</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-brand-muted md:text-lg">
              Страница работает как investor-facing presentation, поэтому вместо формы здесь собрана
              операционная и финансовая логика проекта на горизонте первых 12 месяцев.
            </p>
          </motion.div>

          <motion.div
            {...reveal(1)}
            className="grid gap-6 border border-white/10 bg-black/20 p-7 md:grid-cols-2 md:p-10"
          >
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Ежемесячные расходы</p>
              <p className="mt-4 text-4xl text-brand-light">420 000 ₽</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Операционные расходы проекта на уровне mature mode: команда, сервис, аренда, хранение,
                логистика, климатический контур и сопровождение частных визитов.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Средняя выручка</p>
              <p className="mt-4 text-4xl text-brand-gold">1 100 000 ₽</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Прогнозируемый диапазон выручки: 1 000 000–1 200 000 ₽/мес. при стабилизации частного спроса.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Валовая прибыль</p>
              <p className="mt-4 text-4xl text-brand-light">700 000 ₽</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                При себестоимости товара около 400 000 ₽, что составляет примерно 36% от средней выручки.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Чистая прибыль</p>
              <p className="mt-4 text-4xl text-brand-gold">280 000 ₽/мес.</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Структура модели рассчитана как private-advisory venue с controlled assortment и высокой маржой доверия.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Структура доходов</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {revenueLines.map((line) => (
                  <div key={line.label} className="border border-white/8 bg-black/20 p-4">
                    <p className="text-sm text-brand-light">{line.label}</p>
                    <p className="mt-2 text-xl text-brand-gold">{line.range}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-muted">{line.share} от выручки</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Финансовый прогноз на 12 месяцев</p>
              <div className="mt-5 grid gap-4">
                {yearlyForecast.map((item) => (
                  <div key={item} className="border-l border-brand-gold/40 pl-4 text-sm leading-relaxed text-brand-light/86">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
