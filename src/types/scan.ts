export type SeverityLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type VulnerabilityType =
  | 'missing_header'
  | 'weak_ssl'
  | 'sql_injection'
  | 'xss'
  | 'cors_misconfiguration'
  | 'open_redirect'
  | 'path_traversal'
  | 'information_disclosure'
  | 'insecure_cookie'
  | 'clickjacking';

export type ScanStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface Vulnerability {
  id: string;
  type: VulnerabilityType;
  severity: SeverityLevel;
  title: string;
  description: string;
  recommendation: string;
  evidence?: string;
  cwe?: string;
  owasp?: string;
  cvss?: number;
}

export interface SecurityHeader {
  name: string;
  present: boolean;
  value?: string;
  severity: SeverityLevel;
  recommendation: string;
}

export interface SSLInfo {
  valid: boolean;
  issuer?: string;
  validFrom?: string;
  validTo?: string;
  protocol?: string;
  cipher?: string;
}

export interface TechnologyInfo {
  name: string;
  version?: string;
  category: 'framework' | 'server' | 'cms' | 'library' | 'cdn' | 'analytics';
  confidence: number;
}

export interface ScanResult {
  id: string;
  url: string;
  status: ScanStatus;
  score: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  vulnerabilities: Vulnerability[];
  securityHeaders: SecurityHeader[];
  sslInfo?: SSLInfo;
  technologies?: TechnologyInfo[];
  startedAt: string;
  completedAt?: string;
  duration?: number;
  error?: string;
}

export interface ScanRequest {
  url: string;
  options?: {
    depth?: number;
    followRedirects?: boolean;
    checkSSL?: boolean;
    activeScan?: boolean;
    timeout?: number;
  };
}

export interface ScanStatistics {
  totalScans: number;
  completedScans: number;
  failedScans: number;
  averageScore: number;
  criticalVulnerabilities: number;
  highVulnerabilities: number;
  mediumVulnerabilities: number;
  lowVulnerabilities: number;
}
