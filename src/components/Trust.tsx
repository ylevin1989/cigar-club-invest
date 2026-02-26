import { motion } from 'framer-motion';

const facts = [
  {
    num: "100%",
    title: "аутентичность",
    desc: "Прямые контракты с Habanos Lounge и Davidoff — исключаем подделки и серый импорт."
  },
  {
    num: "18°",
    title: "прецизионный климат",
    desc: "18°C и 72% влажности поддерживаются 24/7 программным обеспечением с точностью до 1%."
  },
  {
    num: "65с",
    title: "регенерация",
    desc: "Время полной очистки воздуха в зале после одновременного курения 15 сигар."
  }
];

export default function Trust() {
  return (
    <section className="relative py-24 md:py-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-brand-bg px-6 w-full mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12">
          {facts.map((fact, i) => (
            <motion.div 
              key={i}
              className={`flex flex-col items-center md:items-start text-center md:text-left relative group ${i === 1 ? 'md:mt-16' : i === 2 ? 'md:mt-32' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-serif text-brand-gold/5 font-light absolute -top-12 md:-top-16 left-1/2 md:-left-4 -translate-x-1/2 md:translate-x-0 z-0 select-none group-hover:text-brand-gold/15 transition-colors duration-700">
                {fact.num}
              </div>
              
              <div className="relative z-10 pt-8 md:pt-16">
                <h3 className="text-lg md:text-xl font-serif text-brand-gold mb-4 uppercase tracking-[0.2em]">{fact.title}</h3>
                <p className="text-brand-muted font-light leading-relaxed max-w-sm">{fact.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
