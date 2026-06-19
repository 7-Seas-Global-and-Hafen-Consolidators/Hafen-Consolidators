import { useState } from 'react'
import emailIcon from '../assets/email.png'
import emailCircle from '../assets/email-circle.png'
import whatsappIcon from '../assets/whatsapp.png'
import telegramIcon from '../assets/telegram.png'
import useReveal from '../hooks/useReveal.js'
import '../styles/Contact.css'

const INITIAL = { nome: '', telefone: '', email: '', mensagem: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [ref, visible] = useReveal()

  const validate = (values) => {
    const e = {}
    if (!values.nome.trim()) e.nome = 'Informe seu nome.'
    if (!values.telefone.trim()) {
      e.telefone = 'Informe seu telefone.'
    } else if (!/^[+\d().\s-]{8,20}$/.test(values.telefone.trim())) {
      e.telefone = 'Telefone inválido.'
    }
    if (!values.email.trim()) {
      e.email = 'Informe seu e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      e.email = 'E-mail inválido.'
    }
    if (!values.mensagem.trim()) {
      e.mensagem = 'Escreva uma mensagem.'
    } else if (values.mensagem.trim().length < 10) {
      e.mensagem = 'A mensagem deve ter ao menos 10 caracteres.'
    }
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    try {
      // -----------------------------------------------------------------
      // INTEGRAÇÃO FUTURA: substitua o bloco abaixo por uma chamada real,
      // por exemplo:
      //
      // const res = await fetch('https://sua-api.com/contato', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form)
      // })
      // if (!res.ok) throw new Error('Falha no envio')
      //
      // Ou um serviço de e-mail como EmailJS / Formspree.
      // -----------------------------------------------------------------
      await new Promise((resolve) => setTimeout(resolve, 900)) // simulação

      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact section" id="contato">
      <div ref={ref} className={`container contact__grid reveal ${visible ? 'is-visible' : ''}`}>
        {/* Informações */}
        <div className="contact__info">
          <h2 className="contact__heading">Contato</h2>

          <div className="contact__icon-circle">
            <img src={emailCircle} alt="" />
          </div>

          <p className="contact__company">
            <strong>Hafen</strong>
            <span>Hafen Consolidators</span>
          </p>

          <ul className="contact__list">
            <li>
              <img src={whatsappIcon} alt="WhatsApp" />
              <a href="tel:+447594716370">+44 75 9471 6370</a>
            </li>
            <li>
              <img src={telegramIcon} alt="Telegram" />
              <a href="tel:+48732099369">+48 732 099 369</a>
            </li>
            <li>
              <img src={emailIcon} alt="E-mail" />
              <a href="mailto:contact@hafenconsolidators.com">
                contact@hafenconsolidators.com
              </a>
            </li>
          </ul>
        </div>

        {/* Formulário */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <div className="contact__field">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                aria-invalid={!!errors.nome}
              />
              {errors.nome && <span className="contact__error">{errors.nome}</span>}
            </div>

            <div className="contact__field">
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={form.telefone}
                onChange={handleChange}
                aria-invalid={!!errors.telefone}
              />
              {errors.telefone && <span className="contact__error">{errors.telefone}</span>}
            </div>
          </div>

          <div className="contact__field">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
          </div>

          <div className="contact__field">
            <textarea
              name="mensagem"
              placeholder="Mensagem"
              rows="5"
              value={form.mensagem}
              onChange={handleChange}
              aria-invalid={!!errors.mensagem}
            ></textarea>
            {errors.mensagem && <span className="contact__error">{errors.mensagem}</span>}
          </div>

          <button type="submit" className="contact__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>

          {status === 'success' && (
            <p className="contact__feedback contact__feedback--ok">
              Mensagem enviada com sucesso. Em breve entraremos em contato.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__feedback contact__feedback--err">
              Não foi possível enviar. Tente novamente em instantes.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
