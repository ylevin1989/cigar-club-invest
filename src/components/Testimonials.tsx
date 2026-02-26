import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Михаил Р.",
    text: "Приезжал на встречу в светлом костюме. Боялся, что пропахну насквозь — вечером был семейный ужин. В итоге: выкурили по две сигары, а от одежды ни намека на дым. Вентиляция — зверь. Сигары подали правильной влажности, не хрустели."
  },
  {
    name: "Игорь Т.",
    text: "Взял здесь ячейку полгода назад. Раньше дома постоянно следил за увлажнителем, теперь голова не болит. Прихожу, моя пачка уже подготовлена, обрезана как надо. Сервис четкий, без лишних разговоров и суеты."
  },
  {
    name: "Артем К.",
    text: "Лучшее место для серьезных разговоров. Кабинеты реально глухие, соседей не слышно. Витолье — профи, посоветовал редкую лимитку под порто, попадание 10 из 10. Дорого, но оправдано каждой минутой."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-brand-bg px-6 border-t border-brand-gold/10 relative overflow-hidden">
      {/* Decorative large quote */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 text-[15rem] md:text-[25rem] font-serif text-brand-gold/5 leading-none select-none z-0">
        &rdquo;
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-light">
            Статус, <span className="italic font-light text-brand-gold">подтвержденный временем</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {testimonials.map((review, i) => (
            <motion.div 
              key={i}
              className="p-8 md:p-10 border border-brand-gold/10 hover:border-brand-gold/30 transition-colors duration-500 bg-black/30 backdrop-blur-md relative group mt-8 md:mt-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute -top-6 left-8 text-5xl font-serif text-brand-gold group-hover:-translate-y-2 transition-transform duration-500">&ldquo;</div>
              
              <div className="h-full flex flex-col justify-between pt-4">
                <p className="text-brand-light font-light leading-relaxed mb-8 italic">
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-brand-gold/50"></div>
                  <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gold">{review.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
