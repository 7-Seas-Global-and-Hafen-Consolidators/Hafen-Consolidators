import globe from '../assets/globe.png'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import '../styles/Hero.css'

export default function Hero() {
  const { t } = useLanguage()

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
        <h1 className="hero__title gold-text">{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <a href="#estrutura" className="hero__cta" onClick={(e) => go(e, 'estrutura')}>
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}
