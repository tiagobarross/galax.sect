import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
}

export function StatCard({ label, value, icon, iconBgColor, iconColor }: StatCardProps) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader className="pb-3">
        <CardDescription className="text-gray-400">{label}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}>
            <span className={iconColor}>{icon}</span>
          </div>
          <span className="text-3xl font-bold">{value}</span>
        </div>
      </CardContent>
    </Card>
  );
}
