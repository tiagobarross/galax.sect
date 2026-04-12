import type { ExploitComplexity, ImpactLevel, SeverityLevel } from '@/types/scan';

const SEVERITY_LABELS: Record<SeverityLevel, string> = {
  CRITICAL: 'Crítico',
  HIGH: 'Alto',
  MEDIUM: 'Médio',
  LOW: 'Baixo',
};

const IMPACT_LABELS: Record<ImpactLevel, string> = {
  NONE: 'Nenhum',
  LOW: 'Baixo',
  MEDIUM: 'Médio',
  HIGH: 'Alto',
};

const EXPLOIT_COMPLEXITY_LABELS: Record<ExploitComplexity, string> = {
  LOW: 'Baixa',
  MEDIUM: 'Média',
  HIGH: 'Alta',
};

export function getSeverityLabel(severity: SeverityLevel | string): string {
  return SEVERITY_LABELS[severity as SeverityLevel] ?? severity;
}

export function getImpactLevelLabel(level: ImpactLevel | string): string {
  return IMPACT_LABELS[level as ImpactLevel] ?? level;
}

export function getExploitComplexityLabel(complexity: ExploitComplexity | string): string {
  return EXPLOIT_COMPLEXITY_LABELS[complexity as ExploitComplexity] ?? complexity;
}
