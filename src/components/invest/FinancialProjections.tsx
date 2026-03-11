import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, TrendingUp, Users, Wine, Cigarette, Calculator } from 'lucide-react';
import Modal from '../ui/Modal';

type ModalData = {
  title: string;
  content: React.ReactNode;
};

/* ─── Revenue Lines ─── */
const revenueLines = [
  {
    icon: Users,
    label: "Членские взносы",
    formula: "10 резидентов × 50 000 ₽",
    amount: 500_000,
    color: "from-amber-500/80 to-amber-600/60",
    modal: {
      title: "Членские взносы (MRR)",
      content: (
        <>
          <p>Ежемесячные членские взносы — фундамент стабильного дохода клуба. Это рекуррентная выручка, которая поступает независимо от посещаемости в конкретный вечер.</p>
          <p>Целевой показатель первого года: <strong>10 активных резидентов</strong> с месячным взносом <strong>50 000 ₽</strong>. Взнос включает приоритетное бронирование, персональную ячейку в хьюмидоре, скидки на алкоголь и участие в закрытых дегустациях.</p>
          <p>При выходе на плановую загрузку (25-30 резидентов) этот канал обеспечит базовое покрытие всех фиксированных затрат (аренда, ФОТ, коммунальные).</p>
        </>
      ),
    },
  },
  {
    icon: Wine,
    label: "Разовые посещения",
    formula: "30 гостей × 3 000 ₽",
    amount: 90_000,
    color: "from-rose-500/70 to-rose-600/50",
    modal: {
      title: "Разовые посещения (гостевые визиты)",
      content: (
        <>
          <p>Помимо постоянных резидентов, клуб принимает гостей по рекомендации членов клуба или по предварительному бронированию.</p>
          <p>Средний чек гостевого визита — <strong>3 000 ₽</strong> (входной взнос за вечер). Это минимальный порог, не включающий покупку сигар и алкоголя.</p>
          <p>Гостевые визиты выполняют двойную функцию: генерация дополнительной выручки и конвертация гостей в постоянных резидентов (целевая конверсия — 15-20%).</p>
        </>
      ),
    },
  },
  {
    icon: Cigarette,
    label: "Продажа сигар и напитков",
    formula: "Retail + Bar",
    amount: 750_000,
    color: "from-brand-gold/70 to-brand-gold/40",
    modal: {
      title: "Продажа сигар и напитков",
      content: (
        <>
          <p>Основной генератор прибыли клуба. Комбинация розничных продаж премиальных сигар (наценка 100-300%) и высокомаржинального бара (наценка 250-400%).</p>
          <p><strong>Сигары:</strong> средняя розничная цена 3 000 — 15 000 ₽ за штуку. Лимитированные серии и винтажные позиции — до 50 000 ₽.</p>
          <p><strong>Бар:</strong> односолодовый виски, выдержанный ром, коньяк. Гости потребляют 2-4 порции за сигарную сессию (1.5 — 2.5 часа).</p>
          <p>Валовая маржинальность этого канала: <strong>70-80%</strong>.</p>
        </>
      ),
    },
  },
];

const totalMonthly = revenueLines.reduce((s, l) => s + l.amount, 0);
const totalAnnual = totalMonthly * 12;

const fmt = (n: number) =>
  new Intl.NumberFormat("ru-RU").format(n);

/* ─── Component ─── */
export default function FinancialProjections() {
  const [selectedModal, setSelectedModal] = useState<ModalData | null>(null);

  return (
    <>
      <section className="py-24 md:py-32 bg-brand-bg px-6 w-full relative overflow-hidden">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brand-gold text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-gold/50" />
              Прогноз выручки
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-light">
              Финансовая{" "}
              <span className="italic font-light text-brand-gold">
                проекция
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* ── Revenue Breakdown ── */}
            <div className="lg:col-span-7 space-y-6">
              {revenueLines.map((line, i) => {
                const pct = Math.round((line.amount / totalMonthly) * 100);
                return (
                  <motion.div
                    key={i}
                    className="group bg-black/40 border border-brand-gold/10 hover:border-brand-gold/25 transition-all duration-500 p-6 md:p-8"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {/* Top row: icon + label + amount */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-brand-gold/5 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-colors duration-500 shrink-0">
                          <line.icon strokeWidth={1.5} size={22} />
                        </div>
                        <div>
                          <button
                            onClick={() => setSelectedModal(line.modal)}
                            className="text-sm font-mono uppercase tracking-wider text-brand-muted hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                          >
                            {line.label}
                            <Info size={13} className="opacity-40 group-hover:opacity-80" />
                          </button>
                          <p className="text-xs text-brand-muted/60 mt-1 font-mono">
                            {line.formula}
                          </p>
                        </div>
                      </div>

                      <span className="text-2xl md:text-3xl font-serif text-brand-gold whitespace-nowrap">
                        {fmt(line.amount)}&nbsp;₽
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-white/5 overflow-hidden rounded-full">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${line.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + i * 0.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>

                    {/* Share label */}
                    <p className="text-right text-xs text-brand-muted/50 mt-2 font-mono">
                      {pct}% выручки
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Totals Card ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Monthly total */}
              <motion.div
                className="bg-black/60 border border-brand-gold/15 p-8 md:p-10 backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/10 to-transparent pointer-events-none" />

                <div className="flex items-center gap-3 mb-8">
                  <Calculator strokeWidth={1.5} size={20} className="text-brand-gold" />
                  <h3 className="text-xl font-serif text-brand-light italic">
                    Итого
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* Monthly */}
                  <div className="pb-8 border-b border-brand-light/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-muted mb-2 font-mono">
                      Ежемесячная выручка
                    </p>
                    <motion.p
                      className="text-4xl md:text-5xl font-serif text-brand-gold"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {fmt(totalMonthly)}&nbsp;₽
                    </motion.p>
                    <p className="text-sm text-brand-muted/70 mt-2">
                      в месяц
                    </p>
                  </div>

                  {/* Annual */}
                  <div className="pb-8 border-b border-brand-light/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-muted mb-2 font-mono">
                      Годовая выручка (прогноз)
                    </p>
                    <motion.p
                      className="text-3xl md:text-4xl font-serif text-brand-light"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.65 }}
                    >
                      {fmt(totalAnnual)}&nbsp;₽
                    </motion.p>
                    <p className="text-sm text-brand-muted/70 mt-2">
                      ≈ {fmt(Math.round(totalAnnual / 1_000_000))} млн ₽ / год
                    </p>
                  </div>

                  {/* Margin highlight */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-muted mb-2 font-mono">
                      Целевая EBITDA (35%)
                    </p>
                    <div className="flex items-baseline gap-3">
                      <TrendingUp strokeWidth={1.5} size={18} className="text-emerald-500" />
                      <motion.p
                        className="text-3xl md:text-4xl font-serif text-emerald-400"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        {fmt(Math.round(totalAnnual * 0.35))}&nbsp;₽
                      </motion.p>
                    </div>
                    <p className="text-sm text-brand-muted/70 mt-2">
                      чистая прибыль / год (прогноз)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Disclaimer */}
              <motion.p
                className="text-xs text-brand-muted/40 font-mono leading-relaxed px-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                * Прогнозные значения на основе анализа рынка. Фактическая доходность может отличаться от плановых показателей.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedModal}
        onClose={() => setSelectedModal(null)}
        title={selectedModal?.title || ""}
      >
        {selectedModal?.content}
      </Modal>
    </>
  );
}
