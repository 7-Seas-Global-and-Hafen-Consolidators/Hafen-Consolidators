import globeIcon from '../assets/globe-icon.png'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <a
            className="footer__card"
            href="https://7seasglobal.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>7 Seas</h3>
            <span className="gold-text">7seasglobal.eu</span>
          </a>

          <div className="footer__globe" aria-hidden="true">
            <img src={globeIcon} alt="" />
          </div>

          <a
            className="footer__card"
            href="https://guiropa.world"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Guiropa</h3>
            <span className="gold-text">guiropa.world</span>
          </a>
        </div>

        <p className="footer__copy">
          © 2026 Hafen Consolidators Group. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
