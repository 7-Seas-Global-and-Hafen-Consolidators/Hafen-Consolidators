import useReveal from '../hooks/useReveal.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import '../styles/Services.css'

export default function Services() {
  const { t } = useLanguage()
  const [ref, visible] = useReveal()

  return (
    <section className="services section" id="servicos">
      <div className="container">
        <h2 className="section-title services__title">{t.services.title}</h2>

        <div ref={ref} className={`services__grid reveal ${visible ? 'is-visible' : ''}`}>
          {t.services.items.map((service, i) => (
            <button type="button" className="services__item" key={`${service}-${i}`}>
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
