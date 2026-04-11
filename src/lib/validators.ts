import { z } from 'zod';

export const urlSchema = z
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
  );

export const scanRequestSchema = z.object({
  url: urlSchema,
  options: z
    .object({
      depth: z.number().min(1).max(5).optional(),
      followRedirects: z.boolean().optional(),
      checkSSL: z.boolean().optional(),
      activeScan: z.boolean().optional(),
      timeout: z.number().min(5000).max(60000).optional(),
    })
    .optional(),
});

export type ScanRequestInput = z.infer<typeof scanRequestSchema>;

export function validateUrl(url: string): { valid: boolean; error?: string } {
  try {
    urlSchema.parse(url);
    return { valid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { valid: false, error: error.issues[0].message };
    }
    return { valid: false, error: 'URL inválida' };
  }
}

export function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.host}${parsed.pathname}`;
  } catch {
    return url;
  }
}
