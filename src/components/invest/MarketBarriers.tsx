import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Wind, TrendingUp, KeyRound, ArrowRight } from 'lucide-react';
import Modal from '../ui/Modal';

type Barrier = {
  icon: any;
  title: string;
  desc: string;
  fullDesc: React.ReactNode;
};

const barriers: Barrier[] = [
  {
    icon: ShieldAlert,
    title: "Сложность лицензирования",
    desc: "Получить одновременно лицензии на алкоголь высшей категории, табак и ресторанное обслуживание в премиум-локации — барьер, отсекающий 90% обычных рестораторов.",
    fullDesc: (
      <>
        <p>Современное законодательство жестко регулирует оборот табака и алкоголя. Полноценный сигарный лаунж требует получения нескольких сложных лицензий на одно помещение.</p>
        <p>Открытие обычного ресторана или бара — понятный процесс. Добавление возможности легального курения внутри помещения с подачей крепкого элитного алкоголя переводит бизнес в разряд премиальных закрытых клубов.</p>
        <p>Это создает высокий барьер входа для малого бизнеса и случайных инвесторов, защищая проект от прямого копирования и демпинга в выбранной локации.</p>
      </>
    )
  },
  {
    icon: Wind,
    title: "Инженерно-сложный климат",
    desc: "Порядка 25% капитальных инвестиций уходит на прецизионную вентиляцию (12-кратный обмен) и хьюмидорные комнаты. Это невозможно сымитировать «дешево».",
    fullDesc: (
      <>
        <p>Ключевая проблема большинства заведений, где разрешено курить — запах дыма, въедающийся в одежду.</p>
        <p>Наш проект подразумевает установку <strong>прецизионной системы приточно-вытяжной вентиляции</strong>. Она обеспечивает 10-12 кратный воздухообмен в час и создает «воздушный купол» над каждым столом, полностью удаляя дым.</p>
        <p>Отдельная капиталоемкая статья — профессиональный <em>Walk-in Humidor</em> (комната-хьюмидор для хранения сигар) с увлажнителями ультразвукового типа, автоматическим температурным режимом и стенками из испанского кедра.</p>
        <p>Такая инженерия требует узкой экспертизы и существенного бюджета, что делает инфраструктуру бизнеса фундаментальной и неповторимой "на коленке".</p>
      </>
    )
  },
  {
    icon: TrendingUp,
    title: "Исключительный LTV клиентов",
    desc: "Членские взносы и аренда личных ячеек «привязывают» резидента к клубу. Целевой показатель удержания в нашем сегменте превышает 70% в год.",
    fullDesc: (
      <>
        <p>В ресторанном бизнесе гости постоянно меняют заведения в поисках новизны. Сигарный клуб — это экосистема, комьюнити и статус.</p>
        <p>Гость, арендующий личный локкер (ячейку) для хранения своей коллекции сигар и алкоголя, посещает заведение регулярно (в среднем 3-6 раз в месяц) на протяжении многих лет.</p>
        <h4 className="text-brand-gold font-serif mt-4 mb-2">Метрики удержания:</h4>
        <ul className="list-disc pl-5">
          <li>Конверсия во второе посещение среди ЦА: &gt; 65%</li>
          <li>Удержание (Retention) владельцев ячеек: &gt; 85% ежегодно</li>
        </ul>
        <p className="mt-4">Это позволяет кардинально снизить маркетинговые затраты на привлечение (CAC) и максимизировать Lifetime Value (LTV) каждого резидента.</p>
      </>
    )
  },
  {
    icon: KeyRound,
    title: "Дефицит легальных пространств",
    desc: "Деловой элите критически не хватает мест, где можно легально курить сигары, пить редкий алкоголь и проводить конфиденциальные переговоры в тишине.",
    fullDesc: (
      <>
        <p>Аудитория клуба — UHNWI (Ultra High-Net-Worth Individuals): бизнесмены, инвесторы, топ-менеджеры. Этим людям нужны конфиденциальность, статусное окружение и безупречный сервис.</p>
        <p>В мегаполисах наблюдается острая нехватка легальных, инженерно-подготовленных пространств для такого специфического досуга. Обычные бары и кальяно-ориентированные заведения им не подходят по статусу и уровню сервиса.</p>
        <p>Открывая сигарный премиум-клуб, мы удовлетворяем скрытый, высокомаржинальный спрос платежеспособной аудитории, которая готова платить премию за эксклюзивность и право "быть среди своих".</p>
      </>
    )
  }
];

export default function MarketBarriers() {
  const [selectedBarrier, setSelectedBarrier] = useState<Barrier | null>(null);

  return (
    <>
      <section className="py-24 md:py-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0b0908] px-6 w-full border-b border-brand-gold/5 relative">
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
              Анализ рынка
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-light">
              Почему эта ниша <span className="italic font-light text-brand-gold">защищена от конкуренции?</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barriers.map((item, i) => (
              <motion.div
                key={i}
                className="p-8 md:p-10 bg-black/40 border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 group flex flex-col sm:flex-row gap-6 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                  <div className="p-4 bg-brand-gold/5 border border-brand-gold/20 rounded-sm text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-colors duration-500 shrink-0">
                    <item.icon strokeWidth={1.5} size={28} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif text-brand-light mb-3 tracking-wide">{item.title}</h3>
                    <p className="text-brand-muted font-light text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <button 
                      onClick={() => setSelectedBarrier(item)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-light transition-colors group/btn"
                    >
                      <span>Подробнее</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedBarrier}
        onClose={() => setSelectedBarrier(null)}
        title={selectedBarrier?.title || ""}
      >
        {selectedBarrier?.fullDesc}
      </Modal>
    </>
  );
}
