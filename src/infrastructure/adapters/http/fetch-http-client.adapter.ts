import {
  HttpClientPort,
  HttpClientOptions,
  HttpResponse,
} from '@/application/ports/http-client.port';

export class FetchHttpClientAdapter implements HttpClientPort {
  async fetch(url: string, options?: HttpClientOptions): Promise<HttpResponse> {
    const response = await fetch(url, {
      method: options?.method || 'GET',
      headers: options?.headers,
      body: options?.body,
      signal: options?.signal,
      redirect: options?.redirect || 'follow',
    });

    return {
      ok: response.ok,
      status: response.status,
      headers: response.headers,
      body: await this.extractBody(response),
    };
  }

  private async extractBody(response: Response): Promise<string | undefined> {
    try {
      return await response.text();
    } catch {
      return undefined;
    }
  }
}
