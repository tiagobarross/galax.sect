import { Vulnerability, ScanResult } from '@/types/scan';

export function calculateScore(vulnerabilities: Vulnerability[]): number {
  let score = 100;

  for (const vuln of vulnerabilities) {
    switch (vuln.severity) {
      case 'CRITICAL':
        score -= 25;
        break;
      case 'HIGH':
        score -= 15;
        break;
      case 'MEDIUM':
        score -= 8;
        break;
      case 'LOW':
        score -= 3;
        break;
    }
  }

  return Math.max(0, Math.min(100, score));
}

export function calculateGrade(score: number): ScanResult['grade'] {
  if (score >= 95) return 'A+';
  if (score >= 85) return 'A';
  if (score >= 70) return 'B';
  if (score >= 50) return 'C';
  if (score >= 30) return 'D';
  return 'F';
}

export function getVulnerabilityStats(vulnerabilities: Vulnerability[]) {
  return {
    critical: vulnerabilities.filter(v => v.severity === 'CRITICAL').length,
    high: vulnerabilities.filter(v => v.severity === 'HIGH').length,
    medium: vulnerabilities.filter(v => v.severity === 'MEDIUM').length,
    low: vulnerabilities.filter(v => v.severity === 'LOW').length,
    total: vulnerabilities.length,
  };
}
