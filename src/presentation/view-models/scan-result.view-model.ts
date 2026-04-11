export interface ScanResultViewModel {
  id: string;
  url: string;
  score: number;
  grade: string;
  startedAt: string;
  formattedDate: string;
  vulnerabilities: VulnerabilityViewModel[];
  securityHeaders: SecurityHeaderViewModel[];
  stats: ScanStatsViewModel;
  sslInfo?: SslInfoViewModel;
}

export interface VulnerabilityViewModel {
  id: string;
  title: string;
  description: string;
  recommendation: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  evidence?: string;
  owasp?: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
}

export interface SecurityHeaderViewModel {
  name: string;
  present: boolean;
  value?: string;
  recommendation: string;
}

export interface ScanStatsViewModel {
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  totalCount: number;
}

export interface SslInfoViewModel {
  valid: boolean;
  hasIssue: boolean;
}
