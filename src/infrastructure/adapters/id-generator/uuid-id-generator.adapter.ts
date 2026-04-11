import { IdGeneratorPort } from '@/application/ports/id-generator.port';

export class UuidIdGeneratorAdapter implements IdGeneratorPort {
  generate(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 11);
    return `scan_${timestamp}_${random}`;
  }
}
