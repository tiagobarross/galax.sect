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

export type ImpactLevel = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
export type ExploitComplexity = 'LOW' | 'MEDIUM' | 'HIGH';

export interface CodeExample {
  language: string;
  label: string;
  before?: string;
  after: string;
}

export interface RealWorldCase {
  company: string;
  year: number;
  summary: string;
  link?: string;
}

export interface ExploitDetails {
  howHackersExploit: string;
  attackScenario: string;
  exploitComplexity: ExploitComplexity;
  requiredSkills: string[];
  commonTools: string[];
  exploitExample?: string;
}

export interface VulnerabilityImpact {
  confidentiality: ImpactLevel;
  integrity: ImpactLevel;
  availability: ImpactLevel;
  businessImpact: string;
  dataAtRisk: string[];
  potentialDamage: string;
}

export interface Remediation {
  quickFix: string;
  completeFixSteps: string[];
  codeExamples: CodeExample[];
  testingSteps: string[];
  preventionTips: string[];
}

export interface VulnerabilityReferences {
  cveIds?: string[];
  owaspLinks: string[];
  articles: string[];
  videos?: string[];
  realWorldCases?: RealWorldCase[];
}

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
  exploitDetails?: ExploitDetails;
  impact?: VulnerabilityImpact;
  remediation?: Remediation;
  references?: VulnerabilityReferences;
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
