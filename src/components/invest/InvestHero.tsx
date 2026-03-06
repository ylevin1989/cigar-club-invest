import { motion } from 'framer-motion';

export default function InvestHero() {
  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-32 pb-24 bg-brand-bg border-b border-brand-gold/10">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,168,124,0.06)_0%,rgba(15,12,11,1)_60%)] z-0 pointer-events-none"></div>
        
        {/* Grid lines background for "terminal" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8C857B10_1px,transparent_1px),linear-gradient(to_bottom,#8C857B10_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none opacity-20 hidden md:block"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-widest mb-6 bg-brand-gold/5">
              Концепция закрытого клуба
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-8xl font-serif leading-[1.1] text-brand-light mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Эстетика сигарной <br />
            <span className="italic font-light text-gradient-gold">культуры и отдыха</span>
          </motion.h1>

          <motion.div 
            className="text-lg md:text-xl text-brand-muted max-w-3xl font-light tracking-wide leading-relaxed mb-4 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Современная интерпретация классического британского клуба, где каждая деталь подчинена одной цели — созданию безупречной атмосферы для ценителей.
            </p>
            <p className="text-base text-brand-muted/80">
              Мы создаем пространство, где время замедляется, а качество сервиса и приватность становятся фундаментом вашего досуга. Место, где встречаются традиции и современный комфорт, формируя сообщество единомышленников.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <a href="#concept-details" className="group relative inline-flex items-center justify-center px-10 py-5 text-sm uppercase tracking-[0.2em] transition-all text-brand-gold bg-transparent border border-brand-gold hover:bg-brand-gold hover:text-brand-bg">
              <span className="relative z-10 font-medium">Узнать детали</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
