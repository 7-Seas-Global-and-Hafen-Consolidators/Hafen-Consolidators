import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const LANGS = ['pt', 'en', 'es']

export function LanguageProvider({ children }) {
  // Tenta lembrar o idioma escolhido; senão começa em português.
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== 'undefined' && window.localStorage.getItem('hafen-lang')
    return LANGS.includes(saved) ? saved : 'pt'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem('hafen-lang', lang)
    } catch {
      /* ignora se o navegador bloquear o armazenamento */
    }
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook para os componentes lerem o idioma atual e os textos traduzidos.
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>')
  return ctx
}
