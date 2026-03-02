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
            className="md:col-span-2 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-light mb-6">
              Инвестиции в <span className="italic font-light text-brand-gold">статус и стиль</span>
            </h2>
            <div className="space-y-6 text-brand-muted font-light leading-relaxed mb-12">
              <p className="text-xl text-brand-light/90 font-medium">
                Мы создаем безупречное приватное пространство для отдыха и деловых встреч. Эксклюзивный формат, премиальный сервис и бескомпромиссное качество.
              </p>
              <p>
                Высокий барьер входа, прямые контракты на поставку редких сигар и статусное окружение гарантируют стабильный интерес целевой аудитории. Основной фокус направлен на создание идеальной атмосферы: от капитального строительства прецизионной вентиляции до возведения профессиональной комнаты-хьюмидора.
              </p>
              <p className="text-brand-gold font-serif">
                Изучите нашу финансовую модель, чтобы оценить перспективы инвестиций в проект с прогнозируемым оборотом 1.34М руб/мес.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a 
                href="/financial_model.pdf" 
                download
                className="inline-flex items-center justify-center py-5 px-10 bg-brand-gold text-brand-bg border border-brand-gold uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-brand-gold transition-colors font-medium shadow-[0_0_20px_rgba(198,168,124,0.3)] hover:shadow-[0_0_30px_rgba(198,168,124,0.5)]"
              >
                Скачать Фин. Модель и NDA
              </a>
              <p className="mt-4 text-xs text-brand-muted/50 uppercase tracking-widest font-mono">
                PDF, ~150 KB
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
