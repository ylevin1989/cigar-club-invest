import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-brand-bg">
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-brand-bg"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-16 md:mt-24">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif leading-[1.1] text-brand-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Ваш костюм сохранит <br className="hidden md:block"/>аромат парфюма, <br/>
          <span className="italic font-light text-gradient-gold">а не табачного дыма</span>
        </motion.h1>

        <motion.p 
          className="mt-8 md:mt-12 text-lg md:text-xl text-brand-muted max-w-2xl font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          12-кратный обмен воздуха в час и коллекция из 250 аутентичных витол с гарантией идеальной тяги.
        </motion.p>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#booking" className="group relative inline-flex items-center justify-center px-8 py-5 text-sm uppercase tracking-[0.2em] overflow-hidden transition-all text-brand-gold hover:text-brand-bg hover:bg-brand-gold">
            <span className="absolute inset-0 border border-brand-gold/30"></span>
            <span className="relative z-10 font-medium">Забронировать стол у хьюмидора</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
