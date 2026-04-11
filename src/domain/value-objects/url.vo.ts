import { Guard } from '@/shared/utils/guard.util';
import { InvalidUrlError } from '@/shared/errors/domain.error';

export class Url {
  private static readonly ALLOWED_PROTOCOLS = ['http:', 'https:'];

  private constructor(
    private readonly value: string,
    private readonly parsed: URL
  ) {
    Guard.againstNullOrUndefined(value, 'url');
    Guard.againstEmptyString(value, 'url');
  }

  static create(value: string): Url {
    try {
      const parsed = new URL(value);
      
      if (!Url.ALLOWED_PROTOCOLS.includes(parsed.protocol)) {
        throw new InvalidUrlError(value);
      }

      return new Url(value, parsed);
    } catch {
      throw new InvalidUrlError(value);
    }
  }

  getValue(): string {
    return this.value;
  }

  getProtocol(): string {
    return this.parsed.protocol;
  }

  getHost(): string {
    return this.parsed.host;
  }

  getHostname(): string {
    return this.parsed.hostname;
  }

  getPathname(): string {
    return this.parsed.pathname;
  }

  isHttps(): boolean {
    return this.parsed.protocol === 'https:';
  }

  isHttp(): boolean {
    return this.parsed.protocol === 'http:';
  }

  getNormalized(): string {
    return `${this.parsed.protocol}//${this.parsed.host}${this.parsed.pathname}`;
  }

  equals(other: Url): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
