import { HeaderRule } from './header-rule.interface';
import { SecurityHeader } from '@/domain/entities/security-header.entity';
import { Severity } from '@/domain/value-objects/severity.vo';

export class XFrameOptionsRule implements HeaderRule {
  private readonly headerName = 'X-Frame-Options';

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
        severity: Severity.medium(),
        recommendation:
          'Configure X-Frame-Options como DENY ou SAMEORIGIN para proteger contra clickjacking',
      });
    }

    const isObsolete = this.isObsolete(value);

    if (isObsolete) {
      return SecurityHeader.create({
        name: this.headerName,
        present: true,
        value,
        severity: Severity.medium(),
        recommendation:
          'ALLOW-FROM está obsoleto, use CSP frame-ancestors ao invés',
      });
    }

    return SecurityHeader.create({
      name: this.headerName,
      present: true,
      value,
      severity: Severity.low(),
      recommendation: 'X-Frame-Options configurado corretamente',
    });
  }

  private isObsolete(value: string): boolean {
    return value.toUpperCase().includes('ALLOW-FROM');
  }
}
