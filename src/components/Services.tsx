import { motion } from 'framer-motion';

const services = [
  {
    title: "Личные хьюмидорные ячейки",
    pain: "Сигары сохнут дома или теряют вкус в обычном шкафу.",
    result: "Ваша коллекция хранится в именной ячейке под надзором витолье. Вы получаете сигару идеальной кондиции в любой момент, просто назвав номер.",
    colSpan: "md:col-span-2 md:row-span-1 border-t-0 md:border-t md:border-l-0",
  },
  {
    title: "Авторский подбор пар",
    pain: "Ошибка в выборе напитка перебивает вкус дорогой витолы.",
    result: "Витолье подбирает сопровождение за 2 минуты. Вы чувствуете каждую ноту — от кедра до темного шоколада — без спиртуозного послевкусия.",
    colSpan: "md:col-span-1 md:row-span-2 md:border-t-0 md:border-r-0 md:border-b-0",
  },
  {
    title: "Закрытые кабинеты для переговоров",
    pain: "Лишние уши в общем зале мешают обсуждать детали сделки.",
    result: "Полная звукоизоляция и бронирование по кодовому слову. Ваши договоренности остаются внутри комнаты, пока вы наслаждаетесь курением.",
    colSpan: "md:col-span-2 md:row-span-1 md:border-l-0 md:border-b-0",
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-40 bg-brand-bg px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-light mb-6 tracking-wide">
            Ритуал <span className="italic text-brand-gold font-light">в деталях</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-6 auto-rows-fr border border-brand-gold/10 p-6 md:p-0">
          {services.map((svc, i) => (
             <motion.div
               key={i}
               className={`p-6 md:p-12 border border-brand-gold/10 hover:border-brand-gold/40 transition-colors duration-700 bg-black/10 flex flex-col justify-center group ${svc.colSpan}`}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
             >
                <h3 className="text-2xl md:text-3xl font-serif text-brand-light mb-8 group-hover:text-brand-gold transition-colors duration-500">
                  {svc.title}
                </h3>
                
                <div className="space-y-6 md:space-y-8 flex-1">
                  <div className="relative pl-6 border-l w-full border-brand-muted/30 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="block text-xs uppercase tracking-[0.2em] text-brand-muted mb-2 font-medium">Проблема</span>
                    <p className="text-sm md:text-base font-light text-brand-muted leading-relaxed">
                      {svc.pain}
                    </p>
                  </div>
                  
                  <div className="relative pl-6 border-l border-brand-gold/50 group-hover:border-brand-gold transition-colors">
                    <span className="block text-xs uppercase tracking-[0.2em] text-brand-gold mb-2 font-medium">Решение</span>
                    <p className="text-base md:text-lg font-light text-brand-light leading-relaxed">
                      {svc.result}
                    </p>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
