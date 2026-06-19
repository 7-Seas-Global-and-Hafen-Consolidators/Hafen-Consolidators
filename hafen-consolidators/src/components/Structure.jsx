import hafenLogo from '../assets/hafen-logo.png'
import sevenSeas from '../assets/sevenseas-logo.png'
import guiropa from '../assets/guiropa-logo.png'
import useReveal from '../hooks/useReveal.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import '../styles/Structure.css'

export default function Structure() {
  const { t } = useLanguage()
  const [ref, visible] = useReveal()

  return (
    <section className="structure section" id="estrutura">
      <div className="container">
        <h2 className="section-title">{t.structure.title}</h2>

        <div ref={ref} className={`structure__tree reveal ${visible ? 'is-visible' : ''}`}>
          {/* Empresa mãe */}
          <article className="structure__card structure__parent">
            <span className="structure__label">
              {t.structure.parent} <span className="gold-text">{t.structure.parentHighlight}</span>
            </span>
            <img
              src={hafenLogo}
              alt="Hafen Consolidators"
              className="structure__logo structure__logo--parent"
            />
          </article>

          {/* Parte inferior: subsidiária | conector | subsidiária */}
          <div className="structure__lower">
            <a
              className="structure__card structure__sub"
              href="https://7seasglobal.eu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="structure__label">{t.structure.subsidiary}</span>
              <img src={sevenSeas} alt="7 Seas Global" className="structure__logo" />
            </a>

            {/* Conector central com setas */}
            <div className="structure__connector" aria-hidden="true">
              <span className="structure__arrow structure__arrow--left"></span>
              <span className="structure__arrow structure__arrow--right"></span>
            </div>

            <a
              className="structure__card structure__sub"
              href="https://guiropa.world"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="structure__label">{t.structure.subsidiary}</span>
              <img src={guiropa} alt="Guiropa Systems" className="structure__logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
