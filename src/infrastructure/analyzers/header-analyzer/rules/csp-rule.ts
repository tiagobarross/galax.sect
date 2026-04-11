import { HeaderRule } from './header-rule.interface';
import { SecurityHeader } from '@/domain/entities/security-header.entity';
import { Severity } from '@/domain/value-objects/severity.vo';

export class CspRule implements HeaderRule {
  private readonly headerName = 'Content-Security-Policy';

  getHeaderName(): string {
    return this.headerName;
  }

  analyze(headers: Headers): SecurityHeader {
    const value = headers.get(this.headerName);
    const present = value !== null;

    if (!present) {
      return SecurityHeader.create({
        name: this.headerName,
        present: false,
        severity: Severity.high(),
        recommendation:
          'Implemente uma política CSP restritiva para proteger contra XSS e injeção de código',
      });
    }

    const hasUnsafeDirectives = this.hasUnsafeDirectives(value);

    if (hasUnsafeDirectives) {
      return SecurityHeader.create({
        name: this.headerName,
        present: true,
        value,
        severity: Severity.medium(),
        recommendation:
          'Remova diretivas unsafe-inline e unsafe-eval da sua CSP',
      });
    }

    return SecurityHeader.create({
      name: this.headerName,
      present: true,
      value,
      severity: Severity.low(),
      recommendation: 'CSP configurado corretamente',
    });
  }

  private hasUnsafeDirectives(value: string): boolean {
    return value.includes('unsafe-inline') || value.includes('unsafe-eval');
  }
}
