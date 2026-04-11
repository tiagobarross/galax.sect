export interface HttpClientPort {
  fetch(url: string, options?: HttpClientOptions): Promise<HttpResponse>;
}

export interface HttpClientOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
  signal?: AbortSignal;
  redirect?: 'follow' | 'manual';
}

export interface HttpResponse {
  ok: boolean;
  status: number;
  headers: Headers;
  body?: string;
}
