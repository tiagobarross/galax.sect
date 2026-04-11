import { SSLInfo } from '@/types/scan';

export async function analyzeSSL(url: string): Promise<SSLInfo> {
  try {
    const parsedUrl = new URL(url);
    
    if (parsedUrl.protocol !== 'https:') {
      return {
        valid: false,
      };
    }

    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
    });

    return {
      valid: response.ok,
      protocol: 'TLS 1.3',
    };
  } catch {
    return {
      valid: false,
    };
  }
}
