import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import Modal from '../ui/Modal';

type ModalData = {
  title: string;
  content: React.ReactNode;
};

const financials = [
  { 
    label: "Маржинальность: Алкоголь & Коктейли (Bar)", 
    value: 75, 
    stringValue: "70-80%",
    modal: {
      title: "Экономика Бара",
      content: (
        <>
          <p>Алкоголь премиум-класса (односолодовый виски, выдержанный ром, коньяк) является главным генератором сверхприбыли сигарного клуба.</p>
          <p>В отличие от классического ресторана, гость сигарного лаунжа выпивает от 2 до 4 порций за сессию курения, длящуюся 1.5 - 2.5 часа. При этом наценка на элитные позиции составляет от 250% до 400%, что в пересчете на валовую маржу дает стабильные 70-80%.</p>
          <p>Грамотная работа сомелье позволяет дополнительно увеличить чек за счет предложения эксклюзивных пейрингов (сочетаний) сигары и алкоголя, что невозможно автоматизировать или заменить.</p>
        </>
      )
    }
  },
  { 
    label: "Маржинальность: Сигары (Retail)", 
    value: 100, 
    stringValue: "100-300%",
    modal: {
      title: "Розничная продажа сигар",
      content: (
        <>
          <p>Сигарный клуб получает доступ к дистрибьюторским ценам официальных импортеров. Средняя наценка на регулярные линейки составляет 100-150%.</p>
          <p>Однако основная прибыль генерируется на лимитированных релизах, винтажных сигарах и региональных сериях (Edición Regional), наценка на которые может достигать 300% и более из-за искусственно создаваемого дефицита на рынке.</p>
          <p>Дополнительно мы зарабатываем на продаже сигарных аксессуаров (гильотины, зажигалки Dupont, хьюмидоры).</p>
        </>
      )
    }
  },
  { 
    label: "Целевая Рентабельность (EBITDA)", 
    value: 35, 
    stringValue: "~35%",
    modal: {
      title: "Рентабельность бизнеса",
      content: (
        <>
          <p>Действующая бизнес-модель ориентирована на показатель EBITDA (прибыль до вычета налогов, процентов и амортизации) на уровне 35% со второго года операционной деятельности.</p>
          <p>Для сравнения, в высококонкурентом ресторанном бизнесе нормой считается 15-20%.</p>
          <p>Такой высокий показатель обеспечивается за счет мультиканальности: мы зарабатываем одновременно на retail-продажах сигар (с низкой долей ФОТ на эти продажи), высокомаржинальном баре и рекуррентных членских взносах, которые покрывают базовые косты.</p>
        </>
      )
    }
  },
];

const kpis = [
  { 
    label: "Средний чек (ARPC)", 
    value: "15 000 — 25 000 ₽",
    modal: {
      title: "Средний чек (ARPC)",
      content: (
        <>
          <p>ARPC (Average Revenue Per Customer) — средняя выручка с одного гостя за визит.</p>
          <p>Чек формируется комбинированно: 1-2 сигары (от 3 000 до 15 000 руб.), 2-3 порции элитного алкоголя, гастрономическое сопровождение.</p>
          <p>Благодаря высокому среднему чеку, клубу не нужна высокая оборачиваемость столов (1-2 посадки за вечер достаточно для выполнения плана по выручке). Это сохраняет приватность и эксклюзивность.</p>
        </>
      )
    }
  },
  { 
    label: "Рекуррентная выручка (MRR)", 
    value: "Аренда ячеек + Взносы",
    modal: {
      title: "Monthly Recurring Revenue (MRR)",
      content: (
        <>
          <p>MRR — это стабильный, прогнозируемый ежемесячный доход, независимый от проходимости в конкретный вечер.</p>
          <p>Он формируется за счет:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Клубных взносов резидентов (дает право приоритетного бронирования и скидок).</li>
            <li>Аренды депозитных ячеек (локкеров) в комнате-хьюмидоре для хранения личных запасов (оплачивается на год или полгода вперед).</li>
          </ul>
        </>
      )
    }
  },
  { 
    label: "Соотношение LTV / CAC", 
    value: "> 5:1",
    modal: {
      title: "Lifetime Value к Customer Acquisition Cost",
      content: (
        <>
          <p><strong>LTV (Lifetime Value)</strong> — сколько прибыли приносит клиент за все время дружбы с клубом.</p>
          <p><strong>CAC (Customer Acquisition Cost)</strong> — стоимость привлечения этого клиента.</p>
          <p>В закрытом клубе основным драйвером роста является сарафанное радио (Word-of-Mouth) среди целевой бизнес-аудитории. Стоимость привлечения низка, а жизненный цикл клиента исчисляется годами. Соотношение 5:1 классифицируется инвесторами как показатель сверхэффективной и масштабируемой бизнес-модели (норма — 3:1).</p>
        </>
      )
    }
  }
];

export default function UnitEconomics() {
  const [selectedModal, setSelectedModal] = useState<ModalData | null>(null);

  return (
    <>
      <section className="py-24 md:py-32 bg-brand-bg px-6 w-full relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brand-gold text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-4">
               <span className="w-8 h-px bg-brand-gold/50"></span>
               Юнит-экономика
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-light">
              Мультиканальная <span className="italic font-light text-brand-gold">финансовая модель</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Charts Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
              {financials.map((item, i) => (
                <div key={i} className="relative group/chart">
                  <div className="flex justify-between items-end mb-3">
                    <button 
                      onClick={() => setSelectedModal(item.modal)}
                      className="text-sm font-mono text-brand-muted uppercase tracking-wider hover:text-brand-gold transition-colors inline-flex items-center gap-2 group/btn"
                    >
                      {item.label}
                      <Info size={14} className="opacity-50 group-hover/btn:opacity-100" />
                    </button>
                    <span className="text-xl font-serif text-brand-gold">{item.stringValue}</span>
                  </div>
                  
                  {/* Bar Background */}
                  <div className="w-full h-2 bg-white/5 overflow-hidden rounded-full">
                    {/* Animated Bar Fill */}
                    <motion.div 
                      className="h-full bg-gradient-to-r from-brand-gold/60 to-brand-gold shadow-[0_0_10px_rgba(198,168,124,0.3)] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.5, delay: 0.2 + (i * 0.2), ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* KPI Data Column */}
            <div className="lg:col-span-5 bg-black/60 border border-brand-gold/15 p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-xl font-serif text-brand-light mb-8 italic">Ключевые показатели</h3>
              <div className="space-y-8">
                {kpis.map((kpi, i) => (
                  <motion.div 
                    key={i}
                    className="pb-6 border-b border-brand-light/10 last:border-0 last:pb-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 + (i * 0.15) }}
                  >
                    <button 
                      onClick={() => setSelectedModal(kpi.modal)}
                      className="text-xs uppercase tracking-[0.2em] text-brand-muted mb-2 font-mono flex items-center gap-2 hover:text-brand-gold transition-colors text-left"
                    >
                      {kpi.label}
                      <Info size={12} className="opacity-50" />
                    </button>
                    <p className="text-xl text-brand-light font-light">{kpi.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedModal}
        onClose={() => setSelectedModal(null)}
        title={selectedModal?.title || ""}
      >
        {selectedModal?.content}
      </Modal>
    </>
  );
}
