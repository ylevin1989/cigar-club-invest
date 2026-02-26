import { motion } from 'framer-motion';

const team = [
  {
    name: "Алексей В.",
    role: "Шеф-витолье",
    result: "Провел более 5 000 дегустаций и отобрал 250 позиций для нашей карты. Результат: 0 жалоб на «забитую» тягу или лопнувший покровный лист за последние 3 года работы.",
    image: "/images/aleksey.png"
  },
  {
    name: "Дмитрий С.",
    role: "Сомелье",
    result: "Разработал матрицу из 120 гастрономических пар. Результат: клиенты находят «свой» вкус с первой попытки, не тратя деньги на неподходящие сочетания.",
    image: "/images/dmitry.png"
  },
  {
    name: "Елена М.",
    role: "Управляющая сервисом",
    result: "Настроила систему вентиляции и стандарты обслуживания. Результат: время подачи сигары и напитка не превышает 5 минут, а в зале всегда свежий воздух без запаха вчерашнего дыма.",
    image: "/images/elena.png"
  }
];

export default function Team() {
  return (
    <section className="py-24 md:py-40 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] bg-brand-bg px-6 border-t border-brand-gold/5 relative w-full">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col text-center md:text-left mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-light">Выверенный <br className="hidden md:block"/><span className="italic font-light text-brand-gold">человеческий фактор</span></h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* portrait image */}
              <div className="w-full aspect-[3/4] mb-8 bg-brand-light/5 border border-brand-light/10 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                 <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
              </div>
              
              <h3 className="text-3xl font-serif italic text-brand-light mb-2">{member.name}</h3>
              <p className="text-xs uppercase tracking-[0.3em] font-medium text-brand-gold mb-6 border-b border-brand-gold/30 pb-4 inline-block">{member.role}</p>
              
              <p className="text-brand-muted font-light leading-relaxed text-sm">
                {member.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
