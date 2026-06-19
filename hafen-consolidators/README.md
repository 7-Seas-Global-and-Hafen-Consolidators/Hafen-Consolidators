# Hafen Consolidators — Site Institucional

Reprodução do site do grupo **Hafen Consolidators** construída com **React + Vite**.
Layout responsivo (desktop, tablet e celular), navegação suave entre seções e
formulário de contato com validação, pronto para integração com API ou serviço de e-mail.

## Tecnologias
- React 18
- Vite 5
- CSS moderno (variáveis, Grid, Flexbox, media queries)

## Estrutura do projeto
```
hafen-consolidators/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── assets/        # imagens e logos
    ├── components/    # Navbar, Hero, Structure, Services, Contact, Footer
    ├── hooks/         # useReveal (animação ao rolar)
    ├── pages/         # Home
    └── styles/        # CSS por componente + tokens globais
```

## Seções
- **Sobre Nós** (Hero) — apresentação do grupo com globo de fundo
- **Nossa Estrutura** — empresa mãe (Hafen) + subsidiárias (7 Seas e Guiropa)
- **Serviços** — consolidação, armazenagem, fretes e transporte
- **Contato** — informações + formulário validado

## Como rodar localmente

Pré-requisito: **Node.js 18+** instalado.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento (abre em http://localhost:5173)
npm run dev

# 3. Gerar build de produção
npm run build

# 4. Pré-visualizar o build
npm run preview
```

## Integração do formulário
No arquivo `src/components/Contact.jsx`, o envio é simulado.
Para conectar a uma API real ou serviço de e-mail (EmailJS, Formspree, etc.),
substitua o bloco comentado dentro de `handleSubmit` por uma chamada `fetch`.
