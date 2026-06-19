import { useLanguage } from '../i18n/LanguageContext.jsx'
import '../styles/LanguageSwitcher.css'

const OPTIONS = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label="Selecionar idioma">
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          className={`lang-switch__btn ${lang === o.code ? 'is-active' : ''}`}
          aria-pressed={lang === o.code}
          onClick={() => setLang(o.code)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
