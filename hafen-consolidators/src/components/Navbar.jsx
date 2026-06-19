import { useEffect, useState } from 'react'
import hafenLogo from '../assets/hafen-logo.png'
import '../styles/Navbar.css'

const LINKS = [
  { id: 'sobre', label: 'Sobre Nós' },
  { id: 'estrutura', label: 'Nossa Estrutura' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#topo" className="navbar__brand" onClick={(e) => go(e, 'topo')}>
          <img src={hafenLogo} alt="Hafen Consolidators" />
        </a>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
