import { HeaderRule } from './header-rule.interface';
import { SecurityHeader } from '@/domain/entities/security-header.entity';
import { Severity } from '@/domain/value-objects/severity.vo';

export class HstsRule implements HeaderRule {
  private readonly headerName = 'Strict-Transport-Security';
  private readonly MIN_MAX_AGE = 31536000;

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
          'Configure HSTS com max-age de pelo menos 1 ano (31536000 segundos)',
      });
    }

    const maxAge = this.extractMaxAge(value);

    if (maxAge < this.MIN_MAX_AGE) {
      return SecurityHeader.create({
        name: this.headerName,
        present: true,
        value,
        severity: Severity.medium(),
        recommendation:
          'Aumente o max-age do HSTS para pelo menos 1 ano',
      });
    }

    return SecurityHeader.create({
      name: this.headerName,
      present: true,
      value,
      severity: Severity.low(),
      recommendation: 'HSTS configurado corretamente',
    });
  }

  private extractMaxAge(value: string): number {
    const match = value.match(/max-age=(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }
}
