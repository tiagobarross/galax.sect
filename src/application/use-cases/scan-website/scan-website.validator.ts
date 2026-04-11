import { z } from 'zod';
import { ScanWebsiteInputDto } from './scan-website.dto';
import { Result } from '@/shared/utils/result.util';

const scanOptionsSchema = z.object({
  depth: z.number().min(1).max(5).optional(),
  followRedirects: z.boolean().optional(),
  checkSSL: z.boolean().optional(),
  activeScan: z.boolean().optional(),
  timeout: z.number().min(5000).max(60000).optional(),
});

const scanWebsiteSchema = z.object({
  url: z
    .string()
    .url({ message: 'URL inválida' })
    .refine(
      (url) => {
        try {
          const parsed = new URL(url);
          return ['http:', 'https:'].includes(parsed.protocol);
        } catch {
          return false;
        }
      },
      { message: 'URL deve usar protocolo HTTP ou HTTPS' }
    ),
  options: scanOptionsSchema.optional(),
});

export class ScanWebsiteValidator {
  static validate(input: ScanWebsiteInputDto): Result<ScanWebsiteInputDto, Error> {
    const validation = scanWebsiteSchema.safeParse(input);

    if (!validation.success) {
      const firstError = validation.error.issues[0];
      return Result.fail(new Error(firstError.message));
    }

    return Result.ok(validation.data);
  }
}
