import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BookingForm() {
  return (
    <section id="booking" className="py-24 md:py-40 bg-brand-bg px-6 border-t border-brand-gold/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(198,168,124,0.05)_0%,rgba(15,12,11,1)_70%)] z-0 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-light mb-8 max-w-3xl mx-auto">
            Забронируйте визит и проверьте состояние <br className="hidden md:block"/><span className="italic font-light text-brand-gold">хьюмидора лично</span>
          </h2>
          <p className="text-brand-muted font-light leading-relaxed max-w-2xl mx-auto md:text-lg">
            Мы подготовим стол к вашему приезду и обеспечим приватность. Никакого ожидания — только ритуал, вкус и правильное окружение.
          </p>
        </motion.div>
        
        <motion.form 
          className="max-w-xl mx-auto flex flex-col gap-12 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="w-full bg-transparent border-b border-brand-light/30 pb-4 text-brand-light placeholder:text-brand-muted/70 focus:outline-none focus:border-brand-gold transition-colors text-lg md:text-xl font-light py-2 peer"
              required
            />
          </div>
          
          <div className="relative">
            <input 
              type="tel" 
              placeholder="WhatsApp / Телефон" 
              className="w-full bg-transparent border-b border-brand-light/30 pb-4 text-brand-light placeholder:text-brand-muted/70 focus:outline-none focus:border-brand-gold transition-colors text-lg md:text-xl font-light py-2 peer"
              required
            />
          </div>
          
          <div className="mt-8 text-center">
            <button type="submit" className="group relative inline-flex items-center justify-center px-12 py-5 border border-brand-gold text-sm uppercase tracking-[0.2em] overflow-hidden transition-all text-brand-bg bg-brand-gold hover:bg-transparent hover:text-brand-gold w-full md:w-auto">
              <span className="relative z-10 font-medium">Подтвердить визит</span>
            </button>
          </div>
        </motion.form>
      </div>

      <footer className="mt-32 border-t border-brand-light/5 pt-12 pb-12 flex flex-col md:flex-row items-center justify-between text-xs text-brand-muted/50 uppercase tracking-[0.1em]">
        <p>&copy; 2026 Cigar Club Lounge. Употребление табака вредит вашему здоровью.</p>
        <Link to="/invest" className="mt-4 md:mt-0 hover:text-brand-gold transition-colors underline underline-offset-4 tracking-[0.2em] font-medium">Для партнёров и инвесторов</Link>
      </footer>
    </section>
  );
}
