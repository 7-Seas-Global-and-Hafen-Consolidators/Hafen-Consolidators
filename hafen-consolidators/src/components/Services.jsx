import useReveal from '../hooks/useReveal.js'
import '../styles/Services.css'

const SERVICES = [
  'Consolidação de Carga',
  'Armazenagem',
  'Consolidação de Carga',
  'Frete Marítimo',
  'Frete Aéreo',
  'Transporte Rodoviário'
]

export default function Services() {
  const [ref, visible] = useReveal()

  return (
    <section className="services section" id="servicos">
      <div className="container">
        <h2 className="section-title services__title">Serviços</h2>

        <div ref={ref} className={`services__grid reveal ${visible ? 'is-visible' : ''}`}>
          {SERVICES.map((service, i) => (
            <button type="button" className="services__item" key={`${service}-${i}`}>
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
