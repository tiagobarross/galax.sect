import { Severity } from '../value-objects/severity.vo';
import { Guard } from '@/shared/utils/guard.util';

interface SecurityHeaderProps {
  name: string;
  present: boolean;
  value?: string;
  severity: Severity;
  recommendation: string;
}

export class SecurityHeader {
  private constructor(private readonly props: SecurityHeaderProps) {
    this.validate();
  }

  static create(props: SecurityHeaderProps): SecurityHeader {
    return new SecurityHeader(props);
  }

  private validate(): void {
    Guard.againstNullOrUndefined(this.props.name, 'securityHeader.name');
    Guard.againstEmptyString(this.props.name, 'securityHeader.name');
    Guard.againstNullOrUndefined(this.props.present, 'securityHeader.present');
    Guard.againstNullOrUndefined(this.props.severity, 'securityHeader.severity');
    Guard.againstEmptyString(this.props.recommendation, 'securityHeader.recommendation');
  }

  getName(): string {
    return this.props.name;
  }

  isPresent(): boolean {
    return this.props.present;
  }

  getValue(): string | undefined {
    return this.props.value;
  }

  getSeverity(): Severity {
    return this.props.severity;
  }

  getRecommendation(): string {
    return this.props.recommendation;
  }

  isMissing(): boolean {
    return !this.props.present;
  }

  hasValue(): boolean {
    return this.props.value !== undefined;
  }

  toPlainObject() {
    return {
      name: this.props.name,
      present: this.props.present,
      value: this.props.value,
      severity: this.props.severity.getValue(),
      recommendation: this.props.recommendation,
    };
  }
}
