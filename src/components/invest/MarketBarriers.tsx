import { motion } from 'framer-motion';
import { ShieldAlert, Wind, TrendingUp, KeyRound } from 'lucide-react';

type Barrier = {
  icon: any;
  title: string;
  desc: string;
};

const barriers: Barrier[] = [
  {
    icon: ShieldAlert,
    title: "Сложность лицензирования",
    desc: "Получить одновременно лицензии на алкоголь высшей категории, табак и ресторанное обслуживание в премиум-локации — барьер, отсекающий 90% обычных рестораторов."
  },
  {
    icon: Wind,
    title: "Инженерно-сложный климат",
    desc: "Порядка 25% капитальных инвестиций уходит на прецизионную вентиляцию (12-кратный обмен) и хьюмидорные комнаты. Это невозможно сымитировать «дешево»."
  },
  {
    icon: TrendingUp,
    title: "Исключительный LTV клиентов",
    desc: "Членские взносы и аренда личных ячеек «привязывают» резидента к клубу. Целевой показатель удержания в нашем сегменте превышает 70% в год."
  },
  {
    icon: KeyRound,
    title: "Дефицит легальных пространств",
    desc: "Деловой элите критически не хватает мест, где можно легально курить сигары, пить редкий алкоголь и проводить конфиденциальные переговоры в тишине."
  }
];

export default function MarketBarriers() {
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
              Эксклюзивность
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-light">
              Преимущества <span className="italic font-light text-brand-gold">закрытого формата</span>
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
                    <p className="text-brand-muted font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
