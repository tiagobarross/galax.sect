import { SecurityHeader } from '@/domain/entities/security-header.entity';

export interface HeaderRule {
  getHeaderName(): string;
  analyze(headers: Headers): SecurityHeader;
}
