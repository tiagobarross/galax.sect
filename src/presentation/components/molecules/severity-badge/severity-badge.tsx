import { Badge } from '@/components/ui/badge';

interface SeverityBadgeProps {
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  className?: string;
}

const severityVariants = {
  LOW: 'info' as const,
  MEDIUM: 'warning' as const,
  HIGH: 'warning' as const,
  CRITICAL: 'critical' as const,
};

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  return (
    <Badge variant={severityVariants[severity]} className={className}>
      {severity}
    </Badge>
  );
}
