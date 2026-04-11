import { SeverityLevel } from '@/types/scan';

export const SEVERITY_COLORS: Record<SeverityLevel, string> = {
  LOW: 'bg-blue-500',
  MEDIUM: 'bg-yellow-500',
  HIGH: 'bg-orange-500',
  CRITICAL: 'bg-red-500',
};

export const SEVERITY_TEXT_COLORS: Record<SeverityLevel, string> = {
  LOW: 'text-blue-500',
  MEDIUM: 'text-yellow-500',
  HIGH: 'text-orange-500',
  CRITICAL: 'text-red-500',
};

export const SEVERITY_BG_COLORS: Record<SeverityLevel, string> = {
  LOW: 'bg-blue-500/10',
  MEDIUM: 'bg-yellow-500/10',
  HIGH: 'bg-orange-500/10',
  CRITICAL: 'bg-red-500/10',
};

export const SECURITY_HEADERS = [
  {
    name: 'Content-Security-Policy',
    description: 'Protege contra XSS e injeção de código',
    recommendation: 'Implemente uma política CSP restritiva',
  },
  {
    name: 'Strict-Transport-Security',
    description: 'Força conexões HTTPS',
    recommendation: 'Configure HSTS com max-age de pelo menos 1 ano',
  },
  {
    name: 'X-Frame-Options',
    description: 'Protege contra clickjacking',
    recommendation: 'Configure como DENY ou SAMEORIGIN',
  },
  {
    name: 'X-Content-Type-Options',
    description: 'Previne MIME type sniffing',
    recommendation: 'Configure como nosniff',
  },
  {
    name: 'Referrer-Policy',
    description: 'Controla informações de referência',
    recommendation: 'Configure como no-referrer ou strict-origin-when-cross-origin',
  },
  {
    name: 'Permissions-Policy',
    description: 'Controla features do navegador',
    recommendation: 'Configure políticas restritivas para features não utilizadas',
  },
];

export const GRADE_THRESHOLDS = {
  'A+': 95,
  A: 85,
  B: 70,
  C: 50,
  D: 30,
  F: 0,
};

export const SCAN_TIMEOUT = 30000; // 30 seconds
export const MAX_REDIRECTS = 5;
export const DEFAULT_USER_AGENT = 'Galax.sect-Scanner/1.0';
