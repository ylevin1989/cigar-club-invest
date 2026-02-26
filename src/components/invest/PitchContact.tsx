import { motion } from 'framer-motion';

export default function PitchContact() {
  return (
    <section id="invest-contact" className="py-24 md:py-32 bg-brand-bg px-6 w-full border-t border-brand-gold/10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Pitch Offer Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-light mb-6">
              Открытие <span className="italic font-light text-brand-gold">нового пула</span>
            </h2>
            <div className="space-y-6 text-brand-muted font-light leading-relaxed">
              <p>
                Мы формируем пул стратегических партнеров для запуска новой, полностью легальной и премиальной площадки в центре деловой активности. Наш формат уже доказал свою состоятельность, мы понимаем профиль гостя, знаем, как обеспечить стабильный поток UHNWI клиентов и как удерживать их интерес годами.
              </p>
              <p>
                Мы ищем не просто капитал (смарт-мани), а вовлеченных партнеров, разделяющих наши ценности безупречного сервиса и эксклюзивности. Инвестиции направляются на капитальное строительство сложной инженерной вентиляции, оснащение профессиональной комнаты-хьюмидора и получение полного пакета лицензий (алкоголь, табак, общепит).
              </p>
              <p>
                Оставьте заявку ниже. В ответ мы свяжемся с вами лично для обсуждения деталей, направим подробный дашборд с юнит-экономикой, детализированную смету капитальных затрат (CAPEX) плана-графика открытия и драфт соглашения о неразглашении (NDA). 
              </p>
            </div>
          </motion.div>

          {/* Minimalist Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black/40 p-8 border border-brand-gold/10 backdrop-blur-sm"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  id="invest-name" 
                  autoComplete="off"
                  className="w-full bg-transparent border-b border-brand-light/20 py-3 text-brand-light placeholder-transparent focus:outline-none focus:border-brand-gold peer transition-colors"
                  placeholder="Имя"
                />
                <label htmlFor="invest-name" className="absolute left-0 -top-3.5 text-xs text-brand-muted/70 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-muted peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-gold peer-focus:uppercase peer-focus:tracking-widest cursor-text">
                  Имя и Фамилия
                </label>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  id="invest-telegram" 
                  autoComplete="off"
                  className="w-full bg-transparent border-b border-brand-light/20 py-3 text-brand-light placeholder-transparent focus:outline-none focus:border-brand-gold peer transition-colors"
                  placeholder="Telegram"
                />
                <label htmlFor="invest-telegram" className="absolute left-0 -top-3.5 text-xs text-brand-muted/70 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-muted peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-gold peer-focus:uppercase peer-focus:tracking-widest cursor-text">
                  Ник в Telegram или Телефон
                </label>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  id="invest-company" 
                  autoComplete="off"
                  className="w-full bg-transparent border-b border-brand-light/20 py-3 text-brand-light placeholder-transparent focus:outline-none focus:border-brand-gold peer transition-colors"
                  placeholder="Компания"
                />
                <label htmlFor="invest-company" className="absolute left-0 -top-3.5 text-xs text-brand-muted/70 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-muted peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-gold peer-focus:uppercase peer-focus:tracking-widest cursor-text">
                  Компания или сфера интересов (опционально)
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-5 px-6 bg-brand-gold text-brand-bg border border-brand-gold uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-brand-gold transition-colors mt-8 font-medium"
              >
                Получить NDA и расчеты
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
