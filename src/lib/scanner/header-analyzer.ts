import { SecurityHeader, SeverityLevel } from '@/types/scan';

export function analyzeSecurityHeaders(headers: Headers): SecurityHeader[] {
  const results: SecurityHeader[] = [];

  const headerChecks = [
    {
      name: 'Content-Security-Policy',
      getSeverity: (value?: string) => {
        if (!value) return 'HIGH' as SeverityLevel;
        if (value.includes('unsafe-inline') || value.includes('unsafe-eval')) {
          return 'MEDIUM' as SeverityLevel;
        }
        return 'LOW' as SeverityLevel;
      },
      recommendation: (value?: string) => {
        if (!value) {
          return 'Implemente uma política CSP restritiva para proteger contra XSS e injeção de código';
        }
        if (value.includes('unsafe-inline') || value.includes('unsafe-eval')) {
          return 'Remova diretivas unsafe-inline e unsafe-eval da sua CSP';
        }
        return 'CSP configurado corretamente';
      },
    },
    {
      name: 'Strict-Transport-Security',
      getSeverity: (value?: string) => {
        if (!value) return 'HIGH' as SeverityLevel;
        const maxAge = value.match(/max-age=(\d+)/)?.[1];
        if (maxAge && parseInt(maxAge) < 31536000) {
          return 'MEDIUM' as SeverityLevel;
        }
        return 'LOW' as SeverityLevel;
      },
      recommendation: (value?: string) => {
        if (!value) {
          return 'Configure HSTS com max-age de pelo menos 1 ano (31536000 segundos)';
        }
        const maxAge = value.match(/max-age=(\d+)/)?.[1];
        if (maxAge && parseInt(maxAge) < 31536000) {
          return 'Aumente o max-age do HSTS para pelo menos 1 ano';
        }
        return 'HSTS configurado corretamente';
      },
    },
    {
      name: 'X-Frame-Options',
      getSeverity: (value?: string) => {
        if (!value) return 'MEDIUM' as SeverityLevel;
        if (value.toUpperCase() === 'ALLOW-FROM') {
          return 'MEDIUM' as SeverityLevel;
        }
        return 'LOW' as SeverityLevel;
      },
      recommendation: (value?: string) => {
        if (!value) {
          return 'Configure X-Frame-Options como DENY ou SAMEORIGIN para proteger contra clickjacking';
        }
        if (value.toUpperCase() === 'ALLOW-FROM') {
          return 'ALLOW-FROM está obsoleto, use CSP frame-ancestors ao invés';
        }
        return 'X-Frame-Options configurado corretamente';
      },
    },
    {
      name: 'X-Content-Type-Options',
      getSeverity: (value?: string) => (!value ? 'MEDIUM' : 'LOW') as SeverityLevel,
      recommendation: (value?: string) =>
        !value
          ? 'Configure X-Content-Type-Options como nosniff para prevenir MIME type sniffing'
          : 'X-Content-Type-Options configurado corretamente',
    },
    {
      name: 'Referrer-Policy',
      getSeverity: (value?: string) => {
        if (!value) return 'LOW' as SeverityLevel;
        if (value === 'unsafe-url' || value === 'no-referrer-when-downgrade') {
          return 'MEDIUM' as SeverityLevel;
        }
        return 'LOW' as SeverityLevel;
      },
      recommendation: (value?: string) => {
        if (!value) {
          return 'Configure Referrer-Policy como no-referrer ou strict-origin-when-cross-origin';
        }
        if (value === 'unsafe-url' || value === 'no-referrer-when-downgrade') {
          return 'Use uma política mais restritiva como strict-origin-when-cross-origin';
        }
        return 'Referrer-Policy configurado adequadamente';
      },
    },
    {
      name: 'Permissions-Policy',
      getSeverity: (value?: string) => (!value ? 'LOW' : 'LOW') as SeverityLevel,
      recommendation: (value?: string) =>
        !value
          ? 'Configure Permissions-Policy para controlar features do navegador'
          : 'Permissions-Policy configurado',
    },
  ];

  for (const check of headerChecks) {
    const value = headers.get(check.name) || undefined;
    const present = !!value;
    const severity = check.getSeverity(value);
    const recommendation = check.recommendation(value);

    results.push({
      name: check.name,
      present,
      value,
      severity,
      recommendation,
    });
  }

  return results;
}

export function calculateHeaderScore(headers: SecurityHeader[]): number {
  let score = 100;
  
  for (const header of headers) {
    if (!header.present) {
      switch (header.severity) {
        case 'CRITICAL':
          score -= 20;
          break;
        case 'HIGH':
          score -= 15;
          break;
        case 'MEDIUM':
          score -= 10;
          break;
        case 'LOW':
          score -= 5;
          break;
      }
    } else if (header.severity === 'MEDIUM') {
      score -= 5;
    }
  }

  return Math.max(0, score);
}
