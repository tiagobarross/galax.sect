import { Guard } from '@/shared/utils/guard.util';

interface SslInfoProps {
  valid: boolean;
  issuer?: string;
  validFrom?: string;
  validTo?: string;
  protocol?: string;
  cipher?: string;
}

export class SslInfo {
  private constructor(private readonly props: SslInfoProps) {
    this.validate();
  }

  static create(props: SslInfoProps): SslInfo {
    return new SslInfo(props);
  }

  static invalid(): SslInfo {
    return new SslInfo({ valid: false });
  }

  private validate(): void {
    Guard.againstNullOrUndefined(this.props.valid, 'sslInfo.valid');
  }

  isValid(): boolean {
    return this.props.valid;
  }

  getIssuer(): string | undefined {
    return this.props.issuer;
  }

  getValidFrom(): string | undefined {
    return this.props.validFrom;
  }

  getValidTo(): string | undefined {
    return this.props.validTo;
  }

  getProtocol(): string | undefined {
    return this.props.protocol;
  }

  getCipher(): string | undefined {
    return this.props.cipher;
  }

  hasDetails(): boolean {
    return (
      this.props.issuer !== undefined ||
      this.props.protocol !== undefined
    );
  }

  toPlainObject() {
    return {
      valid: this.props.valid,
      issuer: this.props.issuer,
      validFrom: this.props.validFrom,
      validTo: this.props.validTo,
      protocol: this.props.protocol,
      cipher: this.props.cipher,
    };
  }
}
