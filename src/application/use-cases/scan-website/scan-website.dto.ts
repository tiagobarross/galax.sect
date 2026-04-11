export interface ScanWebsiteInputDto {
  url: string;
  options?: ScanOptionsDto;
}

export interface ScanOptionsDto {
  depth?: number;
  followRedirects?: boolean;
  checkSSL?: boolean;
  activeScan?: boolean;
  timeout?: number;
}

export interface ScanWebsiteOutputDto {
  id: string;
  url: string;
  status: string;
  score: number;
  grade: string;
  vulnerabilities: VulnerabilityDto[];
  securityHeaders: SecurityHeaderDto[];
  sslInfo?: SslInfoDto;
  startedAt: string;
  completedAt?: string;
  duration?: number;
  error?: string;
}

export interface VulnerabilityDto {
  id: string;
  type: string;
  severity: string;
  title: string;
  description: string;
  recommendation: string;
  evidence?: string;
  cwe?: string;
  owasp?: string;
  cvss?: number;
}

export interface SecurityHeaderDto {
  name: string;
  present: boolean;
  value?: string;
  severity: string;
  recommendation: string;
}

export interface SslInfoDto {
  valid: boolean;
  issuer?: string;
  validFrom?: string;
  validTo?: string;
  protocol?: string;
  cipher?: string;
}
