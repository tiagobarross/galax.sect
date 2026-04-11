import { ScanId } from '../value-objects/scan-id.vo';
import { Url } from '../value-objects/url.vo';
import { Score } from '../value-objects/score.vo';
import { Grade } from '../value-objects/grade.vo';
import { Vulnerability } from './vulnerability.entity';
import { SecurityHeader } from './security-header.entity';
import { SslInfo } from './ssl-info.entity';
import { Guard } from '@/shared/utils/guard.util';

export type ScanStatus = 'pending' | 'running' | 'completed' | 'failed';

interface ScanResultProps {
  id: ScanId;
  url: Url;
  status: ScanStatus;
  score: Score;
  grade: Grade;
  vulnerabilities: Vulnerability[];
  securityHeaders: SecurityHeader[];
  sslInfo?: SslInfo;
  startedAt: Date;
  completedAt?: Date;
  duration?: number;
  error?: string;
}

export class ScanResult {
  private constructor(private readonly props: ScanResultProps) {
    this.validate();
  }

  static create(props: ScanResultProps): ScanResult {
    return new ScanResult(props);
  }

  private validate(): void {
    Guard.againstNullOrUndefined(this.props.id, 'scanResult.id');
    Guard.againstNullOrUndefined(this.props.url, 'scanResult.url');
    Guard.againstNullOrUndefined(this.props.status, 'scanResult.status');
    Guard.againstNullOrUndefined(this.props.score, 'scanResult.score');
    Guard.againstNullOrUndefined(this.props.grade, 'scanResult.grade');
    Guard.againstNullOrUndefined(this.props.vulnerabilities, 'scanResult.vulnerabilities');
    Guard.againstNullOrUndefined(this.props.securityHeaders, 'scanResult.securityHeaders');
    Guard.againstNullOrUndefined(this.props.startedAt, 'scanResult.startedAt');
  }

  getId(): ScanId {
    return this.props.id;
  }

  getUrl(): Url {
    return this.props.url;
  }

  getStatus(): ScanStatus {
    return this.props.status;
  }

  getScore(): Score {
    return this.props.score;
  }

  getGrade(): Grade {
    return this.props.grade;
  }

  getVulnerabilities(): Vulnerability[] {
    return this.props.vulnerabilities;
  }

  getSecurityHeaders(): SecurityHeader[] {
    return this.props.securityHeaders;
  }

  getSslInfo(): SslInfo | undefined {
    return this.props.sslInfo;
  }

  getStartedAt(): Date {
    return this.props.startedAt;
  }

  getCompletedAt(): Date | undefined {
    return this.props.completedAt;
  }

  getDuration(): number | undefined {
    return this.props.duration;
  }

  getError(): string | undefined {
    return this.props.error;
  }

  isCompleted(): boolean {
    return this.props.status === 'completed';
  }

  isFailed(): boolean {
    return this.props.status === 'failed';
  }

  hasCriticalVulnerabilities(): boolean {
    return this.props.vulnerabilities.some((v) => v.isCritical());
  }

  getVulnerabilityCount(): number {
    return this.props.vulnerabilities.length;
  }

  getCriticalVulnerabilityCount(): number {
    return this.props.vulnerabilities.filter((v) => v.isCritical()).length;
  }

  getHighVulnerabilityCount(): number {
    return this.props.vulnerabilities.filter((v) => v.isHigh()).length;
  }

  toPlainObject() {
    return {
      id: this.props.id.getValue(),
      url: this.props.url.getValue(),
      status: this.props.status,
      score: this.props.score.getValue(),
      grade: this.props.grade.getValue(),
      vulnerabilities: this.props.vulnerabilities.map((v) => v.toPlainObject()),
      securityHeaders: this.props.securityHeaders.map((h) => h.toPlainObject()),
      sslInfo: this.props.sslInfo?.toPlainObject(),
      startedAt: this.props.startedAt.toISOString(),
      completedAt: this.props.completedAt?.toISOString(),
      duration: this.props.duration,
      error: this.props.error,
    };
  }
}
