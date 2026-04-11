import { DateProviderPort } from '@/application/ports/date-provider.port';

export class NativeDateProviderAdapter implements DateProviderPort {
  now(): Date {
    return new Date();
  }

  toISOString(date: Date): string {
    return date.toISOString();
  }

  getDuration(start: Date, end: Date): number {
    return end.getTime() - start.getTime();
  }
}
