import { ScanWebsiteOutputDto } from '@/application/use-cases/scan-website/scan-website.dto';
import { ScanResultViewModel, VulnerabilityViewModel } from '../view-models/scan-result.view-model';

export class ScanResultPresenter {
  static toViewModel(dto: ScanWebsiteOutputDto): ScanResultViewModel {
    return {
      id: dto.id,
      url: dto.url,
      score: dto.score,
      grade: dto.grade,
      startedAt: dto.startedAt,
      formattedDate: this.formatDate(dto.startedAt),
      vulnerabilities: dto.vulnerabilities.map(this.mapVulnerability),
      securityHeaders: dto.securityHeaders,
      stats: this.calculateStats(dto.vulnerabilities),
      sslInfo: dto.sslInfo ? {
        valid: dto.sslInfo.valid,
        hasIssue: !dto.sslInfo.valid,
      } : undefined,
    };
  }

  private static formatDate(isoString: string): string {
    return new Date(isoString).toLocaleString('pt-BR');
  }

  private static mapVulnerability(vuln: { id?: string; title?: string; description: string; recommendation: string; severity: string; evidence?: string; owasp?: string }): VulnerabilityViewModel {
    const severityConfig = this.getSeverityConfig(vuln.severity);
    
    return {
      id: vuln.id || '',
      title: vuln.title || 'Vulnerabilidade detectada',
      description: vuln.description,
      recommendation: vuln.recommendation,
      severity: vuln.severity as 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL',
      evidence: vuln.evidence,
      owasp: vuln.owasp,
      ...severityConfig,
    };
  }

  private static getSeverityConfig(severity: string) {
    const configs = {
      CRITICAL: {
        icon: 'XCircle',
        iconBgColor: 'bg-red-500/20',
        iconColor: 'text-red-500',
      },
      HIGH: {
        icon: 'AlertTriangle',
        iconBgColor: 'bg-orange-500/20',
        iconColor: 'text-orange-500',
      },
      MEDIUM: {
        icon: 'Info',
        iconBgColor: 'bg-yellow-500/20',
        iconColor: 'text-yellow-500',
      },
      LOW: {
        icon: 'CheckCircle2',
        iconBgColor: 'bg-blue-500/20',
        iconColor: 'text-blue-500',
      },
    };

    return configs[severity as keyof typeof configs] || configs.LOW;
  }

  private static calculateStats(vulnerabilities: { severity: string }[]) {
    return {
      criticalCount: vulnerabilities.filter(v => v.severity === 'CRITICAL').length,
      highCount: vulnerabilities.filter(v => v.severity === 'HIGH').length,
      mediumCount: vulnerabilities.filter(v => v.severity === 'MEDIUM').length,
      lowCount: vulnerabilities.filter(v => v.severity === 'LOW').length,
      totalCount: vulnerabilities.length,
    };
  }
}
