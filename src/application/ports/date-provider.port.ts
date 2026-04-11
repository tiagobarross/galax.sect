export interface DateProviderPort {
  now(): Date;
  toISOString(date: Date): string;
  getDuration(start: Date, end: Date): number;
}
