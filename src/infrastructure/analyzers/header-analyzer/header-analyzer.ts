import { SecurityHeader } from '@/domain/entities/security-header.entity';
import { HeaderRule } from './rules/header-rule.interface';
import { CspRule } from './rules/csp-rule';
import { HstsRule } from './rules/hsts-rule';
import { XFrameOptionsRule } from './rules/x-frame-options-rule';

export class HeaderAnalyzer {
  private readonly rules: HeaderRule[];

  constructor() {
    this.rules = [
      new CspRule(),
      new HstsRule(),
      new XFrameOptionsRule(),
    ];
  }

  analyze(headers: Headers): SecurityHeader[] {
    return this.rules.map((rule) => rule.analyze(headers));
  }

  addRule(rule: HeaderRule): void {
    this.rules.push(rule);
  }
}
