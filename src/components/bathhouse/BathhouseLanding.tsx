import { motion } from 'framer-motion'
import {
  Activity,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Waves,
} from 'lucide-react'

const painPoints = [
  'Дефицит приватности: пересечение гостей на парковках и в лобби разрушает ощущение закрытого клуба.',
  'Информационная уязвимость: камеры, гаджеты персонала и лишняя цифровая инфраструктура создают риск утечки.',
  'Физиологический дискомфорт: тяжелый пар и слабая инженерия превращают восстановление в перегрузку организма.',
]

const technologies = [
  {
    title: 'Система «Легкое дыхание»',
    body: 'Автономная подача охлажденного кислорода непосредственно к лицу гостя позволяет находиться в парной без гипоксии и перегрузки.',
    icon: Waves,
  },
  {
    title: 'Печи из талькомагнезита',
    body: 'Аккумуляция мягкого тепла и генерация мелкодисперсного пара прогревают глубокие ткани, не обжигая слизистые.',
    icon: Activity,
  },
  {
    title: 'Медицинский протокол стерильности',
    body: 'Пятиэтапная фильтрация воды, активный кислород, УФ и обязательный цикл кварцевания после каждого гостя.',
    icon: ShieldCheck,
  },
]

const privacyStandards = [
  'Zero-Digital Policy: отсутствие камер в релакс-зонах, NDA для персонала, смартфоны сотрудников блокируются в сейфах.',
  'Логистический затвор: 60-минутный технологический интервал между визитами исключает встречи разных гостей.',
  'Автономный въезд: закрытая территория и прямой доступ в комплекс без общественных проходов.',
]

const packages = [
  {
    name: 'Express Recovery',
    duration: '90 мин',
    goal: 'Срочное восстановление когнитивного ресурса перед важной встречей или перелетом.',
  },
  {
    name: 'Strategic Session',
    duration: '3 часа',
    goal: 'Глубокое физическое восстановление и приватное пространство для переговоров без внешнего шума.',
  },
  {
    name: 'Absolute Recharge',
    duration: '5 часов',
    goal: 'Полная перезагрузка организма, сопоставимая по эффекту с недельным ретритом.',
  },
]

const services = [
  'Гостиные с защитой от прослушивания для финальных раундов переговоров.',
  'Собственный шеф-повар с меню сухого вызревания, дикой рыбы и органических деликатесов.',
  'Консьерж-департамент: трансфер, выездной барбер, химчистка и подготовка гардероба к выходу.',
]

const financeHighlights = [
  {
    label: 'Ежемесячные расходы',
    value: '1,08–1,3 млн ₽',
    body: 'Полный OPEX-конур: команда, материалы, маркетинг, амортизация, резерв и непредвиденные расходы.',
  },
  {
    label: 'Прогнозная выручка',
    value: '1,5–2,1 млн ₽',
    body: 'Модель строится на приватном high-ticket формате с управляемой загрузкой и премиальным средним чеком.',
  },
  {
    label: 'Операционный контур',
    value: '806 тыс. ₽ ФОТ',
    body: 'Базовая команда из 7 человек уже включает управляющего, банщика, массажиста, администраторов и клининг.',
  },
  {
    label: 'Чистая прибыль',
    value: '420–800 тыс. ₽',
    body: 'Диапазон зависит от скорости заполнения, повторяемости визитов и доли дополнительных продаж.',
  },
]

const expenseLines = [
  { label: 'ФОТ с отчислениями', range: '750–850 тыс. ₽', note: 'Основа модели: операционная команда и обязательные начисления.' },
  { label: 'Расходные материалы', range: '30–50 тыс. ₽', note: 'Парение, уходовые средства, текстиль и сервисный расходник.' },
  { label: 'Маркетинг', range: '150–200 тыс. ₽', note: 'Локальная премиальная дистрибуция, клубные касания и партнёрские каналы.' },
  { label: 'Амортизация и прочие расходы', range: '100–150 тыс. ₽', note: 'Амортизация, текущее обслуживание и административный контур.' },
  { label: 'Непредвиденные расходы', range: '50 тыс. ₽', note: 'Резерв на нестандартные сервисные и технические сценарии.' },
]

const revenueLines = [
  { label: 'Аренда банных зон без ритуалов', range: '600–800 тыс. ₽', note: '15–20 тыс. ₽ в час при прогнозной загрузке около 30%.' },
  { label: 'Аренда банных зон с ритуалами', range: '600–800 тыс. ₽', note: '20–25 тыс. ₽ на человека, premium add-on с высокой маржинальностью.' },
  { label: 'SPA-услуги', range: '200–300 тыс. ₽', note: 'Массажи, восстановительные протоколы и доп. wellness-пакеты.' },
  { label: 'Food & beverage', range: '100–200 тыс. ₽', note: 'Гастрономия, напитки и сервисные продажи внутри приватного визита.' },
]

const operatingNotes = [
  'Модель не требует массовой загрузки: экономика держится на high-ticket сценарии и управляемом расписании.',
  'Ключевая финансовая логика строится на комбинации аренды пространства, ритуалов и дополнительных сервисов внутри одного визита.',
  'Повторяемость визитов и клубная приватность создают устойчивый LTV без давления на объём трафика.',
]

function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-90px' },
    transition: { duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }
}

export default function BathhouseLanding() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-gold/10 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.16),transparent_28%),linear-gradient(180deg,#0a0a0b_0%,#0b0b0d_54%,#111214_100%)] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="max-w-4xl">
            <span className="mb-8 inline-flex items-center gap-3 border border-brand-gold/25 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-brand-gold backdrop-blur-sm">
              <span className="h-px w-8 bg-brand-gold/70" />
              Strategic Wellness Asset
            </span>
            <h1 className="text-5xl leading-[1.02] text-brand-light md:text-7xl lg:text-[6rem]">
              Премиальный банный комплекс
              <span className="mt-3 block italic text-gradient-gold">как инструмент восстановления и приватности</span>
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-brand-light/74 md:text-xl">
              Мы проектируем объект, где баня перестает быть услугой и становится высокотехнологичным
              инструментом защиты частной жизни, когнитивного восстановления и премиального сервиса.
            </p>
          </motion.div>

          <motion.div
            {...reveal(1)}
            className="mt-14 grid gap-6 border-t border-white/10 pt-8 text-sm text-brand-muted md:grid-cols-3"
          >
            <div>
              <p className="mb-2 uppercase tracking-[0.22em] text-brand-gold">Формат</p>
              <p>Private recovery hub для high-ticket аудитории</p>
            </div>
            <div>
              <p className="mb-2 uppercase tracking-[0.22em] text-brand-gold">Ключевая ценность</p>
              <p>Сочетание инженерного комфорта, приватности и сервисной экосистемы</p>
            </div>
            <div>
              <p className="mb-2 uppercase tracking-[0.22em] text-brand-gold">Город</p>
              <p>Санкт-Петербург, концепт-презентация 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Strategic Gap
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Рынок переполнен
              <span className="block italic font-light text-brand-gold">декоративным люксом</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
              Большинство игроков закрывают базовую потребность в бане, но проваливаются именно там,
              где для элитной аудитории начинается настоящий продукт.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.article
                key={point}
                {...reveal(index)}
                className="min-h-64 border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="mb-6 text-6xl text-brand-gold/18">{`0${index + 1}`}</p>
                <p className="text-sm leading-relaxed text-brand-light/84 md:text-base">{point}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-brand-onyx px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Proprietary Tech
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Технологическое ядро
              <span className="block italic font-light text-brand-gold">вместо интуиции</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {technologies.map((item, index) => (
              <motion.article
                key={item.title}
                {...reveal(index)}
                className="group border border-brand-gold/12 bg-black/20 p-7"
              >
                <item.icon className="mb-6 text-brand-gold" size={22} strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl text-brand-light">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted md:text-base">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div {...reveal()} className="max-w-2xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Absolute Privacy
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Безопасность как
              <span className="block italic font-light text-brand-gold">главный нематериальный актив</span>
            </h2>
          </motion.div>

          <div className="grid gap-5">
            {privacyStandards.map((item, index) => (
              <motion.article
                key={item}
                {...reveal(index)}
                className="flex items-start gap-4 border border-white/10 bg-white/[0.03] p-6"
              >
                <LockKeyhole className="mt-1 shrink-0 text-brand-gold" size={18} strokeWidth={1.5} />
                <p className="text-base leading-relaxed text-brand-light/86">{item}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-brand-gold/10 bg-[linear-gradient(180deg,#0b0b0d_0%,#121316_100%)] px-6 py-24 md:px-10 md:py-32">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-brand-gold/8 blur-[120px]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div {...reveal()} className="max-w-2xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Service Ecosystem
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Закрытый клуб,
              <span className="block italic font-light text-brand-gold">а не spa-объект</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-brand-muted md:text-lg">
              Комплекс работает как private business-wellness environment: переговоры, гастрономия,
              восстановление и консьерж-сопровождение складываются в единый сценарий.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {services.map((service, index) => (
              <motion.article
                key={service}
                {...reveal(index)}
                className="flex items-start gap-4 border border-white/10 bg-black/20 p-6"
              >
                <UtensilsCrossed className="mt-1 shrink-0 text-brand-gold" size={18} strokeWidth={1.5} />
                <p className="text-base leading-relaxed text-brand-light/86">{service}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              All-Inclusive Model
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Форматы посещения
              <span className="block italic font-light text-brand-gold">без раздражающих транзакций</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((item, index) => (
              <motion.article
                key={item.name}
                {...reveal(index)}
                className="flex h-full flex-col justify-between border border-brand-gold/12 bg-white/[0.03] p-7"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">{item.duration}</p>
                  <h3 className="mt-4 text-3xl text-brand-light">{item.name}</h3>
                  <p className="mt-6 text-sm leading-relaxed text-brand-muted md:text-base">{item.goal}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            {...reveal(1)}
            className="mt-10 border border-white/10 bg-black/20 p-7 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Financial Logic</p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-brand-light/86 md:text-lg">
              Благодаря закрытому клубному формату, снятию болей по безопасности и высокой повторяемости
              визитов, отток клиентов стремится к минимуму. Это превращает операционный продукт в устойчивый
              бренд-актив с сильным LTV и потенциалом капитализации.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="partners" className="border-t border-brand-gold/10 bg-brand-onyx px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...reveal()} className="max-w-xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Vision
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Эталонная модель
              <span className="block italic font-light text-brand-gold">нового поколения</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-brand-muted md:text-lg">
              Проект стандартизирован для масштабирования: регламенты сервиса, инженерные протоколы и
              операционная дисциплина позволяют переносить модель в другие премиальные локации.
            </p>
            <div className="mt-8 flex items-start gap-4 border-l border-brand-gold/40 pl-5">
              <Sparkles className="mt-1 shrink-0 text-brand-gold" size={18} strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-brand-light/80 md:text-base">
                Мы создаем актив, стоимость которого растет не только за счет недвижимости, но и за счет
                эксклюзивной базы резидентов, репутации и инженерных преимуществ.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...reveal(1)}
            className="grid gap-6 border border-white/10 bg-black/20 p-7 md:grid-cols-2 md:p-10"
          >
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Scaling Logic</p>
              <p className="mt-4 text-2xl text-brand-light">Стандартизируемый протокол</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Регламенты сервиса, стерильности и приватности описываются как repeatable operating model.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Premium Defensibility</p>
              <p className="mt-4 text-2xl text-brand-light">Высокий входной порог</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Инженерная сложность и privacy-first инфраструктура создают для конкурентов барьер копирования.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Investor Note</p>
              <p className="mt-4 text-base leading-relaxed text-brand-light/86 md:text-lg">
                Банный хаб рассматривается как high-ticket wellness asset: с низкой ценовой эластичностью,
                повторяемыми визитами, высоким LTV и возможностью тиражирования в других private-luxury locations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="max-w-4xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Executive Finance Section
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Экономика
              <span className="block italic font-light text-brand-gold">банного комплекса</span>
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
              Финансовая модель собрана как investor-facing presentation для приватного recovery asset:
              умеренная загрузка, высокий средний чек и сервисная глубина формируют устойчивую unit economics
              без зависимости от массового потока.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {financeHighlights.map((item, index) => (
              <motion.article
                key={item.label}
                {...reveal(index)}
                className="border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">{item.label}</p>
                <p className="mt-5 text-4xl leading-none text-brand-light md:text-[2.75rem]">{item.value}</p>
                <p className="mt-5 text-sm leading-relaxed text-brand-muted md:text-base">{item.body}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.article {...reveal()} className="bg-brand-onyx/80 p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Расходная модель</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-light/86 md:text-lg">
                Базовый операционный контур строится вокруг сильной команды и premium-grade сервиса.
                Наибольшая доля расходов приходится на людей, потому что именно персонал удерживает качество,
                приватность и повторяемость продукта.
              </p>
              <div className="mt-8 grid gap-4">
                {expenseLines.map((item) => (
                  <div key={item.label} className="border border-white/10 bg-black/20 p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <p className="text-base text-brand-light">{item.label}</p>
                      <p className="text-lg text-brand-gold">{item.range}</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.note}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article {...reveal(1)} className="bg-black/20 p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Структура доходов</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-light/86 md:text-lg">
                Выручка распределена между арендами, ритуалами и допродажами, поэтому объект не зависит от
                одного-единственного сценария монетизации.
              </p>
              <div className="mt-8 grid gap-4">
                {revenueLines.map((item) => (
                  <div key={item.label} className="border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <p className="text-base text-brand-light">{item.label}</p>
                      <p className="text-lg text-brand-gold">{item.range}</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.note}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.article {...reveal()} className="border border-white/10 bg-black/20 p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Операционная логика</p>
              <div className="mt-6 grid gap-4">
                {operatingNotes.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 border border-white/10 bg-white/[0.02] p-5">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-brand-gold/35 text-xs text-brand-gold">
                      {`0${index + 1}`}
                    </span>
                    <p className="text-sm leading-relaxed text-brand-light/82 md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article {...reveal(1)} className="border border-brand-gold/15 bg-white/[0.03] p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Команда и юнит-экономика</p>
              <p className="mt-4 text-3xl leading-tight text-brand-light">
                7 человек в базовом контуре
                <span className="mt-2 block text-lg italic font-light text-brand-gold">банщик, массажист, два администратора, клининг и управляющий</span>
              </p>
              <p className="mt-6 text-sm leading-relaxed text-brand-muted md:text-base">
                При ФОТ около 806 тыс. ₽ и общей расходной базе 1,08–1,3 млн ₽ проект сохраняет целевой
                диапазон чистой прибыли 420–800 тыс. ₽ в месяц. Это делает банный комплекс не просто
                сервисной точкой, а управляемым premium wellness asset с понятной операционной дисциплиной.
              </p>
            </motion.article>
          </div>
        </div>
      </section>
    </>
  )
}
