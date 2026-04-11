import { Guard } from '@/shared/utils/guard.util';
import { InvalidScanIdError } from '@/shared/errors/domain.error';

export class ScanId {
  private static readonly ID_PREFIX = 'scan_';
  private static readonly MIN_LENGTH = 10;

  private constructor(private readonly value: string) {
    Guard.againstNullOrUndefined(value, 'scanId');
    Guard.againstEmptyString(value, 'scanId');
    this.validate(value);
  }

  static create(value: string): ScanId {
    return new ScanId(value);
  }

  static generate(): ScanId {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 11);
    const id = `${ScanId.ID_PREFIX}${timestamp}_${random}`;
    return new ScanId(id);
  }

  private validate(value: string): void {
    if (value.length < ScanId.MIN_LENGTH) {
      throw new InvalidScanIdError(value);
    }

    if (!value.startsWith(ScanId.ID_PREFIX)) {
      throw new InvalidScanIdError(value);
    }
  }

  getValue(): string {
    return this.value;
  }

  equals(other: ScanId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
