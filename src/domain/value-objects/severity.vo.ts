import { Guard } from '@/shared/utils/guard.util';
import { InvalidSeverityError } from '@/shared/errors/domain.error';

export type SeverityType = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export class Severity {
  private static readonly VALID_SEVERITIES: SeverityType[] = [
    'LOW',
    'MEDIUM',
    'HIGH',
    'CRITICAL',
  ];

  private constructor(private readonly value: SeverityType) {
    Guard.againstNullOrUndefined(value, 'severity');
    this.validate(value);
  }

  static create(value: SeverityType): Severity {
    return new Severity(value);
  }

  static low(): Severity {
    return new Severity('LOW');
  }

  static medium(): Severity {
    return new Severity('MEDIUM');
  }

  static high(): Severity {
    return new Severity('HIGH');
  }

  static critical(): Severity {
    return new Severity('CRITICAL');
  }

  private validate(value: SeverityType): void {
    if (!Severity.VALID_SEVERITIES.includes(value)) {
      throw new InvalidSeverityError(value);
    }
  }

  getValue(): SeverityType {
    return this.value;
  }

  isCritical(): boolean {
    return this.value === 'CRITICAL';
  }

  isHigh(): boolean {
    return this.value === 'HIGH';
  }

  isMedium(): boolean {
    return this.value === 'MEDIUM';
  }

  isLow(): boolean {
    return this.value === 'LOW';
  }

  getWeight(): number {
    const weights: Record<SeverityType, number> = {
      CRITICAL: 25,
      HIGH: 15,
      MEDIUM: 8,
      LOW: 3,
    };
    return weights[this.value];
  }

  equals(other: Severity): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
