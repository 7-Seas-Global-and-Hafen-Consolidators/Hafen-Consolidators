import globe from '../assets/globe.png'
import '../styles/Hero.css'

export default function Hero() {
  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="sobre">
      <div className="hero__bg" aria-hidden="true">
        <img src={globe} alt="" />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <h1 className="hero__title gold-text">Liderança Global, conexões fortes</h1>
        <p className="hero__subtitle">
          O grupo Hafen impulsiona o comércio mundial através de suas subsidiárias
          especialistas. São 22 anos de história, conexão, conversão e segurança com
          logística portuária.
        </p>
        <a href="#estrutura" className="hero__cta" onClick={(e) => go(e, 'estrutura')}>
          Nossa História
        </a>
      </div>
    </section>
  )
}
