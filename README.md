# 🛡️ Galax.sect - Web Vulnerability Scanner

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.2.2-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Sistema inteligente de análise de vulnerabilidades web com dashboard interativo**

[Demo](#) · [Documentação](#) · [Roadmap](./ROADMAP.md) · [Report Bug](#)

</div>

---

## 🎯 Sobre o Projeto

**Galax.sect** é um Web Vulnerability Scanner moderno que analisa sites (com permissão) e identifica vulnerabilidades, más configurações e riscos de segurança. Pense em um "mini Burp Suite / OWASP ZAP simplificado" com interface moderna, motor de análise automatizado e relatórios claros e acionáveis.

### 💡 Conceito Central

Dado um domínio (ex: `https://example.com`), o sistema:

1. 🔍 **Faz varredura** completa do site
2. 🎯 **Detecta problemas** de segurança
3. 📊 **Classifica riscos** (LOW, MEDIUM, HIGH, CRITICAL)
4. 📄 **Gera relatórios** técnicos e executivos

---

## ✨ Features

### 🚀 Fase Atual (MVP)

- ✅ **Interface Mobile-First** - Design responsivo e otimizado para todos os dispositivos
- ✅ **Scanner de Headers HTTP** - Análise de cabeçalhos de segurança
- ✅ **Verificação HTTPS** - Validação de certificados SSL/TLS
- ✅ **Dashboard Interativo** - Visualização clara dos resultados
- ✅ **Sistema de Scoring** - Pontuação geral de segurança
- ✅ **Tema Claro/Escuro** - Alternância suave entre temas
- ✅ **Painel de Acessibilidade** - Controles de fonte, contraste e espaçamento
- ✅ **Alto Contraste** - Modo de alto contraste para melhor legibilidade
- ✅ **WCAG 2.1 AA Compliant** - Acessibilidade garantida

### 🔮 Próximas Features

- 🕷️ **Web Crawler** - Mapeamento automático de páginas e endpoints
- 🧪 **Testes Ativos** - SQL Injection, XSS, CORS, Open Redirect
- 🧠 **Fingerprinting** - Detecção de tecnologias e frameworks
- 📊 **Análise de Risco** - Classificação baseada em OWASP Top 10
- 📄 **Relatórios PDF** - Exportação profissional de resultados
- 🚨 **Sistema de Alertas** - Notificações via email, Slack, webhooks
- 🔄 **CI/CD Integration** - Plugin para pipelines DevSecOps

Veja o [Roadmap completo](./ROADMAP.md) para mais detalhes.

---

## 🏗️ Arquitetura

### Módulos do Sistema

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Landing    │  │  Dashboard   │  │   Results    │  │
│  │     Page     │  │     Page     │  │     Page     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│              Backend (Next.js API Routes)                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Scanner    │  │   Crawler    │  │     Risk     │  │
│  │    Engine    │  │    Engine    │  │   Analyzer   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Fingerprint  │  │    Report    │  │    Alert     │  │
│  │    Engine    │  │  Generator   │  │    System    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 🔍 Scanner Engine

Responsável pela análise técnica:

- **Segurança HTTP:** Headers (CSP, HSTS, X-Frame-Options, etc.)
- **HTTPS:** Certificado SSL, versão TLS
- **Testes Ativos:** SQL Injection, XSS, CORS, Open Redirect
- **Análise de Superfície:** Endpoints, formulários, parâmetros

### 🕷️ Crawler (Spider)

Mapeamento automático:

- Descoberta de links internos
- Respeito ao robots.txt
- Parsing de sitemap.xml
- Identificação de formulários

### 📊 Risk Analyzer

Classificação inteligente:

- Baseado em **OWASP Top 10**
- Severidade: LOW → MEDIUM → HIGH → CRITICAL
- Cálculo de impacto e exploitabilidade

### 📄 Report Generator

Relatórios profissionais:

- **Técnico:** Detalhes de vulnerabilidades, payloads, POC
- **Executivo:** Resumo visual, score, recomendações
- **Formatos:** PDF, JSON, HTML, Markdown

---

## 🛠️ Stack Tecnológica

### Frontend

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Componentes:** shadcn/ui
- **Icons:** Lucide React
- **Animações:** tw-animate-css

### Backend

- **Runtime:** Node.js (Next.js API Routes)
- **Validação:** Zod
- **HTTP Client:** Native Fetch API

### DevOps

- **Deploy:** Vercel
- **CI/CD:** GitHub Actions
- **Monitoring:** Vercel Analytics

---

## 🚀 Getting Started

### Pré-requisitos

- Node.js 20+ 
- npm / yarn / pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cyber-web-next.git

# Entre na pasta
cd cyber-web-next

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Executar em produção
npm start
```

---

## 📱 Design Mobile-First

O projeto foi desenvolvido com **Mobile-First** em mente:

- ✅ Breakpoints responsivos (320px → 1536px)
- ✅ Touch-friendly (mínimo 44x44px)
- ✅ Gestures nativos
- ✅ Bottom navigation em mobile
- ✅ Sidebar → Drawer em telas pequenas
- ✅ Tables → Cards em mobile

### Lighthouse Score Target

- 🎯 Performance: > 90
- 🎯 Accessibility: > 95
- 🎯 Best Practices: > 95
- 🎯 SEO: > 90

---

## 🎨 Componentes UI

Todos os componentes seguem o padrão **shadcn/ui** + **Tailwind CSS**:

```tsx
// Exemplo de uso
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

<Button variant="default" size="lg">
  Iniciar Scan
</Button>
```

### Componentes Disponíveis

- `Button` - Botões com variantes
- `Card` - Cards responsivos
- `Badge` - Tags de status/severidade
- `Input` - Campos de formulário
- `Alert` - Alertas e notificações
- `Dialog` - Modais
- `Tabs` - Navegação em abas
- `Table` - Tabelas responsivas
- E mais...

---

## 📊 Exemplo de Uso

### 1. Iniciar um Scan

```typescript
const response = await fetch('/api/scan', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://example.com' })
})

const result = await response.json()
```

### 2. Resultado do Scan

```json
{
  "id": "scan_123",
  "url": "https://example.com",
  "status": "completed",
  "score": 75,
  "vulnerabilities": [
    {
      "type": "missing_header",
      "severity": "MEDIUM",
      "header": "Content-Security-Policy",
      "recommendation": "Adicione CSP header..."
    }
  ],
  "timestamp": "2026-04-11T10:30:00Z"
}
```

---

## 🧪 Testes

```bash
# Executar testes unitários
npm test

# Executar testes E2E
npm run test:e2e

# Coverage
npm run test:coverage
```

---

## 📈 Roadmap

Veja o [ROADMAP.md](./ROADMAP.md) completo para:

- ✅ Features implementadas
- 🚧 Features em desenvolvimento
- 📦 Próximas features
- 🎯 Metas de longo prazo

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

### Padrões de Código

- ✅ TypeScript strict mode
- ✅ ESLint + Prettier
- ✅ Conventional Commits
- ✅ Testes obrigatórios para features críticas

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](./LICENSE) para mais detalhes.

---

## 👥 Autor

**Tiago Barros** - *Desenvolvedor Full-Stack*

- 🐙 GitHub: [@tiagobarross](https://github.com/tiagobarross)
- 💼 LinkedIn: [Tiago Oliveira Barros](https://www.linkedin.com/in/tiago-oliveira-barros/)
- 📸 Instagram: [@tiagoo_barross](https://www.instagram.com/tiagoo_barross/)
- 📧 Email: tiagobarros519@gmail.com
- 📱 WhatsApp: +55 (85) 99739-5870

---

## 🙏 Agradecimentos

- [OWASP](https://owasp.org/) - Referências de segurança
- [Mozilla Observatory](https://observatory.mozilla.org/) - Inspiração
- [shadcn/ui](https://ui.shadcn.com/) - Sistema de componentes
- [Vercel](https://vercel.com/) - Plataforma de deploy
- [Framer Motion](https://www.framer.com/motion/) - Animações fluidas

---

## 📞 Contato

- 📧 Email: tiagobarros519@gmail.com
- 💼 LinkedIn: [Tiago Oliveira Barros](https://www.linkedin.com/in/tiago-oliveira-barros/)
- 📱 WhatsApp: [+55 (85) 99739-5870](https://wa.me/5585997395870)
- 🐙 GitHub: [@tiagobarross](https://github.com/tiagobarross)

---

<div align="center">

**Feito com ❤️ e ☕ por Galax.sect Team**

[⬆ Voltar ao topo](#-galaxsect---web-vulnerability-scanner)

</div>
