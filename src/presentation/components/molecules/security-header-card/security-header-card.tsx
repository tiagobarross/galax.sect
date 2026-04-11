import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

interface SecurityHeaderCardProps {
  name: string;
  present: boolean;
  value?: string;
  recommendation: string;
}

export function SecurityHeaderCard({
  name,
  present,
  value,
  recommendation,
}: SecurityHeaderCardProps) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base text-white">{name}</CardTitle>
          {present ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <XCircle className="h-5 w-5 text-red-500" />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-gray-400">{recommendation}</p>
        {value && (
          <code className="block rounded bg-black/50 p-2 text-xs text-gray-300">
            {value}
          </code>
        )}
      </CardContent>
    </Card>
  );
}
