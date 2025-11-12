 "use client"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let current = ''
      sections.forEach((sec) => {
        const top = sec.offsetTop
        if (window.scrollY >= top - 200) current = sec.id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { href: '/#inicio', label: 'Início', id: 'inicio' },
    { href: '/sobre', label: 'Sobre', id: 'sobre' },
    { href: '/certificacoes#especialidades', label: 'Especialidades', id: 'especialidades' },
    { href: '/#transformacoes', label: 'Transformações', id: 'transformacoes' },
    { href: '/#servicos', label: 'Serviços', id: 'servicos' },
    { href: '/#planos', label: 'Planos', id: 'planos' },
    { href: '/#contato', label: 'Contato', id: 'contato' },
  ]

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
    >
      <div className="navbar-container max-w-[1400px] mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        <Link href="/" className="navbar-logo flex items-center gap-2 no-underline" aria-label="Rosana Medeiros">
          <span className="navbar-logo-text text-[22px] md:text-[28px] font-extrabold tracking-[-0.5px] text-white">
            <span className="navbar-logo-name text-white">Rosana</span>{' '}
            <span className="navbar-logo-surname bg-white text-primary px-2 py-0.5 rounded-md">Medeiros</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="navbar-menu flex items-center gap-8 m-0 p-0 list-none">
            {nav.map((n) => (
              <li key={n.href} className="navbar-menu-item relative">
                <Link
                  href={n.href}
                  className={`navbar-menu-link relative inline-block text-[16px] font-medium text-white py-2 transition-all ${
                    active === n.id ? 'text-[#00D7FF]' : ''
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-white/60 transition-all duration-300 ${
                      active === n.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-social flex items-center gap-3">
            <Link href="https://instagram.com/rosanamdr21personal" target="_blank" aria-label="Instagram" className="social-icon w-10 h-10 rounded-full grid place-items-center bg-black/5 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <img src="/icons/iconsinstagram.svg.png" alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link href="https://wa.me/558386200546" target="_blank" aria-label="WhatsApp" className="social-icon w-10 h-10 rounded-full grid place-items-center bg-black/5 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <img src="/icons/iconswhatsapp.svg.gif" alt="WhatsApp" className="w-6 h-6" />
            </Link>
            <a href="mailto:rosanamdr21@hotmail.com" aria-label="E-mail" className="social-icon w-10 h-10 rounded-full grid place-items-center bg-black/5 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <img src="/icons/iconsmail.svg.png" alt="E-mail" className="w-6 h-6" />
            </a>
            <Link href="https://wa.me/558386200546" target="_blank" className="navbar-cta ml-1 inline-flex items-center px-5 py-2.5 rounded-full bg-white text-primary font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
              Começar Agora
            </Link>
          </div>
        </nav>

        <button className="navbar-toggle md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`md:hidden fixed top-0 right-0 h-screen w-80 bg-white shadow-[-5px_0_30px_rgba(0,0,0,0.1)] pt-24 px-8 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="navbar-menu-link text-lg text-[#2D3436]" onClick={() => { setOpen(false) }}>
              {n.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <Link href="https://instagram.com/rosanamdr21personal" target="_blank" aria-label="Instagram" className="w-10 h-10 rounded-full grid place-items-center bg-black/5"><img src="/icons/iconsinstagram.svg.png" alt="Instagram" className="w-6 h-6" /></Link>
            <Link href="https://wa.me/558386200546" target="_blank" aria-label="WhatsApp" className="w-10 h-10 rounded-full grid place-items-center bg-black/5"><img src="/icons/iconswhatsapp.svg.gif" alt="WhatsApp" className="w-6 h-6" /></Link>
            <a href="mailto:rosanamdr21@hotmail.com" aria-label="E-mail" className="w-10 h-10 rounded-full grid place-items-center bg-black/5"><img src="/icons/iconsmail.svg.png" alt="E-mail" className="w-6 h-6" /></a>
          </div>
          <Link href="https://wa.me/558386200546" target="_blank" className="mt-2 inline-flex w-max items-center px-5 py-2.5 rounded-full bg-white text-primary font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]" onClick={() => setOpen(false)}>
            Começar Agora
          </Link>
        </nav>
      </div>
    </header>
  )
}
