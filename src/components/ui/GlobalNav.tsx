import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/wine-cellar', label: 'Винный погреб' },
  { to: '/bathhouse', label: 'Банный комплекс' },
  { to: '/invest', label: 'Сигарный клуб' },
]

function linkClass(isActive: boolean) {
  return [
    'transition-colors duration-300',
    'hover:text-brand-light',
    isActive ? 'text-brand-light' : 'text-brand-muted',
  ].join(' ')
}

export default function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-6xl border border-brand-gold/20 bg-[rgba(10,10,11,0.72)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-4 md:px-7">
          <Link
            to="/"
            className="text-sm uppercase tracking-[0.28em] text-brand-light transition-colors hover:text-brand-gold"
            onClick={() => setIsOpen(false)}
          >
            UNO Премиальный Отдых
          </Link>

          <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.18em] md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => linkClass(isActive)}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center text-brand-light md:hidden"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <nav className="grid gap-4 border-t border-white/10 px-5 py-5 text-sm uppercase tracking-[0.18em] md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => linkClass(isActive)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
