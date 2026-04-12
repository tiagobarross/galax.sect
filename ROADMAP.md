# 🗺️ Roadmap - Web Vulnerability Scanner

## 📊 Status Geral do Projeto

**Projeto:** Galax.sect - Web Vulnerability Scanner + Intelligence Dashboard  
**Versão Atual:** 0.1.0 (MVP em desenvolvimento)  
**Última Atualização:** 11 de Abril de 2026

---

## 🎯 Visão Geral

Sistema web que analisa sites (com permissão) e identifica vulnerabilidades, más configurações e riscos de segurança, com foco em automação e visualização inteligente.

---

## 📈 Fases de Desenvolvimento

### ✅ FASE 0: Setup Inicial (CONCLUÍDO)
- [x] Configuração Next.js 16 + TypeScript
- [x] Integração Tailwind CSS v4
- [x] Configuração shadcn/ui
- [x] Estrutura de pastas base
- [x] Sistema de cores e tema (dark mode ready)
- [x] Componentes UI básicos (Button, Navigation)

---

### ✅ FASE 1: MVP - Scanner Básico (CONCLUÍDO)

#### 1.1 Interface Base (Mobile-First) ✅
- [x] Landing page responsiva
  - [x] Hero section com formulário de scan
  - [x] Seção de features (6 cards)
  - [x] Seção "Como funciona"
  - [x] Footer com informações do desenvolvedor
- [x] Dashboard layout
  - [x] Menu mobile (drawer lateral)
  - [x] Header responsivo com theme toggle
  - [x] Grid system mobile-first
- [x] Página de scan
  - [x] Formulário de input (URL)
  - [x] Validação de URL com Zod
  - [x] Loading states
  - [x] Error handling UI
- [x] Páginas adicionais
  - [x] Sobre
  - [x] Contato

#### 1.2 Scanner Engine - Básico ✅
- [x] API Route: `/api/scan`
- [x] Validação de URL
- [x] HTTP Request com timeout
- [x] Análise de Headers HTTP
  - [x] Content-Security-Policy
  - [x] X-Frame-Options
  - [x] Strict-Transport-Security
  - [x] X-Content-Type-Options
  - [x] Referrer-Policy
  - [x] Permissions-Policy
- [x] Verificação HTTPS
  - [x] Certificado SSL válido
  - [x] Protocolo TLS
- [x] Response estruturado (JSON)

#### 1.3 Visualização de Resultados ✅
- [x] Página de resultado do scan
- [x] Cards de vulnerabilidades detalhados
- [x] Badge de severidade (LOW, MEDIUM, HIGH, CRITICAL)
- [x] Score geral de segurança (0-100)
- [x] Grade de classificação (A+ até F)
- [x] Lista de headers ausentes/incorretos
- [x] Recomendações práticas
- [x] Evidências de vulnerabilidades
- [x] Referências OWASP Top 10

#### 1.4 Persistência Básica ✅
- [x] Sistema de armazenamento local (localStorage)
- [x] Histórico de scans
- [x] Lista de scans na dashboard
- [x] Estatísticas agregadas

#### 1.5 Arquitetura Enterprise ✅
- [x] Clean Architecture (4 camadas)
- [x] SOLID Principles aplicados
- [x] Object Calisthenics seguidos
- [x] Value Objects (Severity, Score, Grade, Url, ScanId)
- [x] Entities (Vulnerability, SecurityHeader, SslInfo, ScanResult)
- [x] Strategy Pattern (HeaderRules)
- [x] Adapter Pattern (HttpClient, IdGenerator, DateProvider)
- [x] Result Pattern (tratamento de erros)
- [x] Atomic Design (Atoms, Molecules)

#### 1.6 Acessibilidade & Temas ✅
- [x] Sistema de temas (Claro/Escuro)
- [x] Theme toggle animado
- [x] Painel de acessibilidade flutuante
- [x] Controle de tamanho de fonte (75%-150%)
- [x] Modo de alto contraste
- [x] Espaçamento entre letras
- [x] Espaçamento entre linhas
- [x] WCAG 2.1 AA compliant
- [x] Focus indicators
- [x] Navegação por teclado
- [x] Aria labels

#### 1.7 Informações de Contato ✅
- [x] Email: tiagobarros519@gmail.com
- [x] WhatsApp: +55 (85) 99739-5870
- [x] LinkedIn: https://www.linkedin.com/in/tiago-oliveira-barros/
- [x] Instagram: https://www.instagram.com/tiagoo_barross/
- [x] GitHub: https://github.com/tiagobarross

#### 1.8 Sistema de Inteligência de Vulnerabilidades ✅
- [x] Knowledge Base detalhada para cada tipo de vulnerabilidade
- [x] Informações sobre como hackers exploram cada falha
- [x] Cenários reais de ataque com exemplos práticos
- [x] Matriz de impacto (CIA Triad: Confidencialidade, Integridade, Disponibilidade)
- [x] Impacto detalhado no negócio (financeiro, reputacional, legal)
- [x] Dados em risco identificados
- [x] Ferramentas utilizadas por hackers
- [x] Habilidades necessárias para exploração
- [x] Exemplos de código de exploits (educacional)
- [x] Passos completos de correção
- [x] Exemplos de código (antes/depois)
- [x] Múltiplas linguagens (Nginx, Apache, Node.js, React)
- [x] Passos de teste da correção
- [x] Dicas de prevenção
- [x] Casos reais de empresas que sofreram ataques
- [x] Referências OWASP, artigos técnicos, CVEs
- [x] UI com sistema de abas (Visão Geral, Como Explorar, Impacto, Corrigir, Referências)
- [x] Visualização de código com syntax highlighting
- [x] Gráficos de impacto (barras de progresso)
- [x] Badges de complexidade e CVSS score

---

### 📦 FASE 2: Crawler & Análise Avançada

#### 2.1 Web Crawler
- [ ] Spider básico
  - [ ] Descoberta de links internos
  - [ ] Respeito ao robots.txt
  - [ ] Rate limiting
  - [ ] Depth control
- [ ] Mapeamento de estrutura
  - [ ] Sitemap.xml parser
  - [ ] Descoberta de endpoints
  - [ ] Identificação de formulários
  - [ ] Parâmetros GET/POST

#### 2.2 Fingerprinting de Tecnologias
- [ ] Detecção de frameworks
  - [ ] React/Vue/Angular
  - [ ] WordPress/Drupal
  - [ ] Laravel/Django
- [ ] Detecção de servidor
  - [ ] Nginx/Apache
  - [ ] Cloudflare/AWS
- [ ] Detecção de bibliotecas JS
- [ ] Versões de software

#### 2.3 Testes Ativos (Light Pentest)
- [ ] SQL Injection (payloads básicos)
  - [ ] Error-based detection
  - [ ] Time-based detection
- [ ] XSS (Reflected)
  - [ ] Payloads básicos
  - [ ] Context detection
- [ ] Open Redirect
- [ ] CORS Misconfiguration
- [ ] Path Traversal (básico)

#### 2.4 Dashboard Avançado
- [ ] Gráficos de risco (Chart.js/Recharts)
- [ ] Timeline de scans
- [ ] Comparação entre scans
- [ ] Filtros e busca
- [ ] Exportação de dados

---

### 🧠 FASE 3: Inteligência & Automação

#### 3.1 Risk Analyzer
- [ ] Sistema de scoring
  - [ ] Baseado em OWASP Top 10
  - [ ] Peso por tipo de vulnerabilidade
  - [ ] Cálculo de impacto
- [ ] Classificação automática
  - [ ] LOW / MEDIUM / HIGH / CRITICAL
  - [ ] Baseado em exploitabilidade
  - [ ] Contexto do ambiente

#### 3.2 Smart Scan Mode
- [ ] Detecção de framework → adapta payloads
- [ ] Análise de respostas → ajusta estratégia
- [ ] Machine learning básico (opcional)
- [ ] Scan profiles (Quick, Standard, Deep)

#### 3.3 Report Generator
- [ ] Relatório técnico
  - [ ] Detalhes de cada vulnerabilidade
  - [ ] Payloads testados
  - [ ] Requests/Responses
  - [ ] Proof of Concept
- [ ] Relatório executivo
  - [ ] Resumo visual
  - [ ] Score geral
  - [ ] Top riscos
  - [ ] Recomendações priorizadas
- [ ] Formatos de exportação
  - [ ] PDF (react-pdf)
  - [ ] JSON
  - [ ] HTML standalone
  - [ ] Markdown

#### 3.4 Histórico & Evolução
- [ ] Tracking de vulnerabilidades ao longo do tempo
- [ ] Gráfico de evolução de segurança
- [ ] Comparação entre versões
- [ ] Alertas de regressão

---

### 🚨 FASE 4: Alertas & Integrações

#### 4.1 Sistema de Alertas
- [ ] Configuração de alertas
- [ ] Notificações em tempo real
- [ ] Webhooks
- [ ] Email notifications
- [ ] Slack integration
- [ ] Discord integration

#### 4.2 API Pública
- [ ] REST API documentada (OpenAPI/Swagger)
- [ ] Rate limiting
- [ ] API Keys
- [ ] Webhooks para resultados

#### 4.3 CI/CD Integration (DevSecOps)
- [ ] GitHub Actions plugin
- [ ] GitLab CI integration
- [ ] Jenkins plugin
- [ ] CLI tool
- [ ] Docker image

---

### 🏢 FASE 5: Multi-tenant & SaaS

#### 5.1 Autenticação & Autorização
- [ ] Sistema de usuários
- [ ] Login/Register
- [ ] OAuth (Google, GitHub)
- [ ] RBAC (Role-Based Access Control)
- [ ] Multi-tenant architecture

#### 5.2 Planos & Billing
- [ ] Free tier
- [ ] Pro tier
- [ ] Enterprise tier
- [ ] Stripe integration
- [ ] Usage tracking

#### 5.3 Features SaaS
- [ ] Workspace/Organizations
- [ ] Team management
- [ ] Permissões granulares
- [ ] Audit logs
- [ ] Compliance reports

---

## 🎨 Requisitos de Design (Todas as Fases)

### Mobile-First
- [ ] Breakpoints: 320px, 640px, 768px, 1024px, 1280px, 1536px
- [ ] Touch-friendly (min 44x44px tap targets)
- [ ] Gestures (swipe, pull-to-refresh)
- [ ] Bottom navigation em mobile

### Responsividade
- [ ] Grid system fluido
- [ ] Imagens responsivas
- [ ] Typography scaling
- [ ] Sidebar → Drawer em mobile
- [ ] Tables → Cards em mobile

### Acessibilidade
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators

### Performance
- [ ] Lazy loading
- [ ] Code splitting
- [ ] Image optimization
- [ ] Caching strategy
- [ ] Lighthouse score > 90

---

## 🛠️ Stack Tecnológica

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS v4
- **Componentes:** shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts / Chart.js
- **Forms:** React Hook Form + Zod
- **State:** Zustand / React Context

### Backend (Next.js API Routes)
- **Runtime:** Node.js
- **Validation:** Zod
- **HTTP Client:** Axios / Fetch
- **Crawler:** Cheerio / Puppeteer (futuro)
- **Queue:** Bull / BullMQ (futuro)

### Database (Futuro)
- **Opção 1:** PostgreSQL + Prisma
- **Opção 2:** MongoDB + Mongoose
- **Cache:** Redis

### DevOps
- **Deploy:** Vercel / Railway
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry
- **Analytics:** Vercel Analytics

---

## 📝 Próximos Passos Imediatos

1. **Criar estrutura de pastas completa**
2. **Implementar landing page mobile-first**
3. **Criar formulário de scan com validação**
4. **Implementar API `/api/scan` básica**
5. **Criar página de resultados**
6. **Implementar análise de headers HTTP**
7. **Adicionar sistema de scoring básico**

---

## 🎯 Métricas de Sucesso

### MVP (Fase 1)
- [ ] Scan de 1 URL funcional
- [ ] Análise de 5+ headers de segurança
- [ ] UI 100% responsiva (mobile + desktop)
- [ ] Tempo de scan < 10s
- [ ] Lighthouse Performance > 90

### Produto Completo (Fase 3)
- [ ] Scan completo < 2min
- [ ] Detecção de 20+ tipos de vulnerabilidades
- [ ] 95% de precisão (baixo false positive)
- [ ] Suporte a 1000+ scans/dia
- [ ] Relatórios em 3 formatos

### SaaS (Fase 5)
- [ ] 100+ usuários ativos
- [ ] 10.000+ scans/mês
- [ ] Uptime > 99.9%
- [ ] Tempo de resposta < 500ms (p95)

---

## 📚 Referências

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/)

---

**Última revisão:** 11/04/2026  
**Próxima revisão:** Ao final de cada fase
