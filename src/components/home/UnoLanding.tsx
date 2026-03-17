import { motion } from 'framer-motion'
import {
  Crown,
  Landmark,
  MapPin,
  ScrollText,
  Sparkles,
} from 'lucide-react'

const interiorRooms = [
  {
    title: 'Золотая гостиная',
    subtitle: 'Rococo',
    image: '/images/mansion/interior-gold.jpg',
    description:
      'Пышная лепнина, позолота и зеркала создают пространство для приемов, где интерьер работает как часть сценария.',
  },
  {
    title: 'Мавританская гостиная',
    subtitle: 'Private salon',
    image: '/images/mansion/interior-moorish.jpg',
    description:
      'Тихий зал с восточным орнаментом для закрытых бесед, камерных встреч и вдумчивого отдыха.',
  },
  {
    title: 'Белый театральный зал',
    subtitle: 'Ceremonial hall',
    image: '/images/mansion/interior-theatre.jpg',
    description:
      'Просторный зал с историей частных представлений, рассчитанный на события, где важны акустика и впечатление.',
  },
]

const locationPoints = [
  {
    icon: MapPin,
    title: 'Первая линия Невы',
    body: 'Панорамный вид на парадную акваторию и Благовещенский мост с одного из самых знаковых адресов Петербурга.',
  },
  {
    icon: Landmark,
    title: 'Культурное окружение',
    body: 'Несколько минут до Новой Голландии и Исаакиевского собора, при этом сама набережная сохраняет редкую тишину.',
  },
  {
    icon: Crown,
    title: 'Статус и приватность',
    body: 'Исторический фасад, камерный ритм и деликатная атмосфера делают адрес естественным продолжением частного клуба.',
  },
]

const projectPillars = [
  'Приватные сценарии отдыха для резидентов и их круга',
  'Современный инженерный комфорт внутри исторических интерьеров',
  'Сервис, в котором эстетика пространства равна качеству впечатления',
]

const factCards = [
  'Особняк был одним из ранних петербургских зданий с передовыми инженерными системами своего времени.',
  'Внутри существовал роскошный частный театр, где проходили камерные представления высокого светского круга.',
  'Интерьеры особняка до сих пор считаются выдающимся образцом европейской эклектики конца XIX века.',
]

function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.85, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }
}

export default function UnoLanding() {
  return (
    <>
      <section className="grain-overlay relative min-h-screen overflow-hidden border-b border-brand-gold/10 bg-brand-bg">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/images/mansion/exterior.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.45),rgba(10,10,11,0.92)_65%,rgba(10,10,11,1))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_36%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-32">
          <motion.div {...reveal()} className="max-w-4xl">
            <span className="mb-8 inline-flex items-center gap-3 border border-brand-gold/25 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-brand-gold backdrop-blur-sm">
              <span className="h-px w-8 bg-brand-gold/70" />
              Luxury Heritage
            </span>
            <h1 className="max-w-5xl text-5xl leading-[1.02] text-brand-light md:text-7xl lg:text-[6.2rem]">
              Английская набережная, 70:
              <span className="mt-3 block italic text-gradient-gold">место, где пишется история</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-brand-light/74 md:text-xl">
              Ревитализация легендарного особняка фон Дервиза под
              {' '}
              <span className="text-brand-light">UNO Премиальный Отдых</span>
              {' '}
              — новую среду приватного досуга, эстетики и статуса в самом сердце Петербурга.
            </p>
          </motion.div>

          <motion.div
            {...reveal(1)}
            className="mt-12 grid gap-6 border-t border-white/10 pt-8 text-sm text-brand-muted md:mt-20 md:grid-cols-3"
          >
            <div>
              <p className="mb-2 uppercase tracking-[0.22em] text-brand-gold">Локация</p>
              <p>Санкт-Петербург, Английская наб., 70</p>
            </div>
            <div>
              <p className="mb-2 uppercase tracking-[0.22em] text-brand-gold">Контекст</p>
              <p>Историческое частное палаццо конца XIX века</p>
            </div>
            <div>
              <p className="mb-2 uppercase tracking-[0.22em] text-brand-gold">Новая глава</p>
              <p>UNO Премиальный Отдых</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="heritage" className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div {...reveal()} className="max-w-2xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Наследие
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Архитектурный триумф
              <span className="block italic font-light text-brand-gold">конца XIX века</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-muted md:text-lg">
              <p>
                Построенный в 1880–1890-х годах по проекту академика архитектуры Александра Красовского,
                особняк стал воплощением изысканного вкуса барона Сергея Павловича фон Дервиза.
              </p>
              <p>
                Здесь, на главной набережной империи, проходили блестящие приемы Петербурга. Особняк менял
                владельцев, включая великого князя Михаила Александровича, но сохранил частный масштаб и
                редкую атмосферу аристократического дома.
              </p>
              <p className="border-l border-brand-gold/40 pl-5 text-brand-light/82">
                Сегодня мы бережно раскрываем этот контекст заново, превращая историю адреса в основу нового
                сценария премиального отдыха.
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal(1)} className="grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden border border-white/10 bg-white/[0.03]">
              <img
                src="/images/mansion/archive-facade.jpg"
                alt="Архивный фасад особняка на Английской набережной"
                className="h-64 w-full object-cover grayscale"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Архив</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Историческая фотография фасада, подчёркивающая статус особняка как части парадной архитектуры Невы.
                </p>
              </div>
            </article>
            <article className="overflow-hidden border border-white/10 bg-white/[0.03] md:mt-14">
              <img
                src="/images/mansion/archive-drawing.jpg"
                alt="Исторический чертеж особняка"
                className="h-64 w-full object-cover grayscale"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Чертеж</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Визуальный след эпохи, где архитектура уже мыслилась как заявление о вкусе и общественном положении.
                </p>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-brand-onyx px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Интерьеры
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Пространство
              <span className="block italic font-light text-brand-gold">как искусство</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
              Мы сохраняем характер каждого зала и интегрируем современные инженерные системы так, чтобы комфорт
              не спорил с историей, а подчеркивал её.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {interiorRooms.map((room, index) => (
              <motion.article
                key={room.title}
                {...reveal(index)}
                className="group overflow-hidden border border-white/10 bg-black/20"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="space-y-4 p-6 md:p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-brand-gold">{room.subtitle}</p>
                  <h3 className="text-3xl text-brand-light">{room.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-muted md:text-base">{room.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Гений места
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              Первый адрес
              <span className="block italic font-light text-brand-gold">Российской империи</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {locationPoints.map((point, index) => (
              <motion.article
                key={point.title}
                {...reveal(index)}
                className="border border-brand-gold/12 bg-white/[0.03] p-7 backdrop-blur-sm"
              >
                <point.icon className="mb-5 text-brand-gold" size={22} strokeWidth={1.5} />
                <h3 className="mb-4 text-2xl text-brand-light">{point.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted md:text-base">{point.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-brand-gold/10 bg-[linear-gradient(180deg,#0b0b0d_0%,#111113_100%)] px-6 py-24 md:px-10 md:py-32">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.14),transparent_58%)] lg:block" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...reveal()} className="max-w-2xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Новый проект
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              UNO
              <span className="block italic font-light text-brand-gold">Премиальный Отдых</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-brand-muted md:text-lg">
              Мы создаем среду для лидеров и людей, ценящих редкое сочетание приватности, культурного контекста
              и современного сервиса. Это не просто использование исторического здания, а владение его атмосферой.
            </p>
            <div className="mt-8 flex items-start gap-4 border-l border-brand-gold/40 pl-5">
              <ScrollText className="mt-1 shrink-0 text-brand-gold" size={18} strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-brand-light/80 md:text-base">
                Современный функционал в интерьерах, которые помнят великих деятелей прошлого. Здесь отдых становится
                выверенным ритуалом, а статус — естественным продолжением пространства.
              </p>
            </div>
          </motion.div>

          <motion.div {...reveal(1)} className="grid gap-5">
            {projectPillars.map((pillar) => (
              <div
                key={pillar}
                className="flex items-start gap-4 border border-white/10 bg-black/20 p-6"
              >
                <Sparkles className="mt-1 shrink-0 text-brand-gold" size={18} strokeWidth={1.5} />
                <p className="text-base leading-relaxed text-brand-light/88">{pillar}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal()} className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Знаете ли вы?
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              История, которая
              <span className="block italic font-light text-brand-gold">усиливает впечатление</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {factCards.map((fact, index) => (
              <motion.article
                key={fact}
                {...reveal(index)}
                className="flex min-h-64 flex-col justify-between border border-white/10 bg-white/[0.02] p-7"
              >
                <p className="text-6xl text-brand-gold/18">{`0${index + 1}`}</p>
                <p className="text-sm leading-relaxed text-brand-light/84 md:text-base">{fact}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="presentation" className="border-t border-brand-gold/10 bg-brand-onyx px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...reveal()} className="max-w-xl">
            <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-10 bg-brand-gold/60" />
              Инвестиционная рамка
            </p>
            <h2 className="text-4xl leading-tight text-brand-light md:text-6xl">
              UNO как
              <span className="block italic font-light text-brand-gold">платформа премиальных сценариев</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-brand-muted md:text-lg">
              Проект объединяет исторический статус адреса, частный формат посещения и потенциал масштабирования
              нескольких premium-verticals внутри одной узнаваемой оболочки.
            </p>

            <div className="mt-10 space-y-5 text-sm text-brand-light/80 md:text-base">
              <div className="border-l border-white/10 pl-4">
                <p className="mb-1 uppercase tracking-[0.22em] text-brand-gold">Адрес</p>
                <p>Санкт-Петербург, Английская набережная, 70</p>
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="mb-1 uppercase tracking-[0.22em] text-brand-gold">Формат</p>
                <p>Закрытая презентационная экосистема для already-known investors.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...reveal(1)}
            className="grid gap-6 border border-white/10 bg-black/20 p-7 md:grid-cols-2 md:p-10"
          >
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Value Layer 01</p>
              <p className="mt-4 text-2xl text-brand-light">Исторический адрес</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Парадная архитектура, редкая точка входа в символический capital of place и высокий порог репутационного входа.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Value Layer 02</p>
              <p className="mt-4 text-2xl text-brand-light">Private-use model</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Каждый продукт внутри особняка работает не как mass service, а как curated private environment.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Investment Thesis</p>
              <p className="mt-4 text-base leading-relaxed text-brand-light/86 md:text-lg">
                UNO — это не одна функция, а оболочка для нескольких премиальных направлений: mansion experience,
                cigar club, bathhouse concept и wine cellar. Такая архитектура повышает гибкость monetization,
                усиливает редкость бренда и делает проект убедительным для долгого инвестиционного горизонта.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
