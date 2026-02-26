import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import Modal from '../ui/Modal';

const counters = [
  { label: 'Ниша', value: 'Премиум-досуг' },
  { label: 'Целевая окупаемость', value: '14–18 мес.' },
  { label: 'Аудитория', value: 'Деловая элита' },
];

export default function InvestHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-32 pb-24 bg-brand-bg border-b border-brand-gold/10">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,168,124,0.06)_0%,rgba(15,12,11,1)_60%)] z-0 pointer-events-none"></div>
        
        {/* Grid lines background for "terminal" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8C857B10_1px,transparent_1px),linear-gradient(to_bottom,#8C857B10_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none opacity-20 hidden md:block"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12 md:mt-0">
          
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block py-1 px-3 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-widest mb-6 bg-brand-gold/5">
                Инвестиционный меморандум
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-brand-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Сигарный клуб закрытого типа. <br />
              <span className="italic font-light text-gradient-gold">Доходность от 45%</span>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center ml-4 align-middle text-brand-gold/70 hover:text-brand-gold transition-colors bg-brand-gold/10 rounded-full p-2"
                aria-label="Подробнее о доходности"
              >
                <Info size={24} />
              </button>
            </motion.h1>

            <motion.div 
              className="text-lg md:text-xl text-brand-muted max-w-3xl font-light tracking-wide leading-relaxed mb-4 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                Современная интерпретация классического британского клуба, где маржинальность строится не просто на продаже сигар, а на высоком проценте возвратности и дополнительных сервисах.
              </p>
              <p className="text-base text-brand-muted/80">
                Традиционный бизнес с прозрачной юнит-экономикой. Высокий барьер входа обеспечивает защиту от массовой конкуренции и стабильный приток элитной аудитории (Ultra High-Net-Worth Individuals). Мы открываем предварительный прием заявок на стратегическое партнерство для запуска нового объекта.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <a href="#invest-contact" className="group relative inline-flex items-center justify-center px-10 py-5 text-sm uppercase tracking-[0.2em] transition-all text-brand-gold bg-transparent border border-brand-gold hover:bg-brand-gold hover:text-brand-bg">
                <span className="relative z-10 font-medium">Запросить фин. модель</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: "Terminal" Metrics */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {counters.map((item, i) => (
              <motion.div 
                key={i}
                className="p-6 border border-brand-gold/20 bg-black/40 backdrop-blur-md relative overflow-hidden group"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Animated scanning line effect */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold/60 group-hover:bg-brand-gold group-hover:shadow-[0_0_15px_rgba(198,168,124,0.5)] transition-all duration-300"></div>
                
                <div className="pl-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-muted/70 mb-2 font-mono">[{item.label}]</p>
                  <p className="text-2xl md:text-3xl font-serif text-brand-gold">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Структура Доходности и ROI"
      >
        <p>
          Заявленная доходность от 45% (целевая EBITDA) — это консервативный прогноз, основанный на анализе действующих премиальных сигарных клубов Москвы. 
        </p>
        <p>
          В отличие от классического ресторанного бизнеса, где норма прибыли редко превышает 15-20%, сигарный лаунж генерирует сверхприбыль за счет мультиканальной модели:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Элитный алкоголь:</strong> Маржинальность достигает 70-80%. В закрытых клубах алкоголь заказывают порциями (дриньками) и бутылками к сигаре с высокой наценкой.</li>
          <li><strong>Розничная продажа сигар:</strong> Средняя наценка варьируется от 100% до 300% на эксклюзивные и лимитированные коллекции.</li>
          <li><strong>Рекуррентные платежи (MRR):</strong> Членские взносы и аренда персональных ячеек (локкеров) в хьюмидорной комнате. Это создает стабильный денежный поток, закрывающий большую часть постоянных расходов (аренда, ФОТ).</li>
          <li><strong>Средний чек:</strong> Из-за специфики продукта и аудитории, средний чек (ARPC) составляет от 15 000 до 25 000 рублей, что обеспечивает высокую выручку даже при умеренной или низкой посадке.</li>
        </ul>
        <p className="mt-6">
          Такая структура доходов гарантирует высокую устойчивость бизнеса и позволяет прогнозировать окупаемость начальных инвестиций в срок <strong>от 14 до 18 месяцев</strong> при консервативном сценарии развития.
        </p>
      </Modal>
    </>
  );
}
