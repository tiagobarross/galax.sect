'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScanResult } from '@/types/scan';
import { 
  Shield, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  Search,
  ExternalLink
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [scans, setScans] = useState<ScanResult[]>([]);

  useEffect(() => {
    const loadScans = () => {
      const allScans: ScanResult[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('scan_')) {
          try {
            const scan = JSON.parse(localStorage.getItem(key) || '');
            allScans.push(scan);
          } catch (e) {
            console.error('Erro ao interpretar análise:', e);
          }
        }
      }
      allScans.sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());
      setScans(allScans);
    };

    loadScans();
  }, []);

  const stats = {
    totalScans: scans.length,
    averageScore: scans.length > 0 
      ? Math.round(scans.reduce((acc, scan) => acc + scan.score, 0) / scans.length)
      : 0,
    criticalIssues: scans.reduce((acc, scan) => 
      acc + scan.vulnerabilities.filter(v => v.severity === 'CRITICAL').length, 0
    ),
    highIssues: scans.reduce((acc, scan) => 
      acc + scan.vulnerabilities.filter(v => v.severity === 'HIGH').length, 0
    ),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Painel</h1>
          <p className="text-gray-600 dark:text-gray-400">Histórico e estatísticas das suas análises</p>
        </div>

        <div className="mb-8 grid gap-6 grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Total de análises</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-eletric-blue/20">
                  <Search className="h-6 w-6 text-eletric-blue" />
                </div>
                <span className="text-3xl font-bold">{stats.totalScans}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Pontuação média</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-3xl font-bold">{stats.averageScore}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Críticos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <span className="text-3xl font-bold">{stats.criticalIssues}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Altos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <span className="text-3xl font-bold">{stats.highIssues}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Histórico de análises</h2>
            <Button 
              onClick={() => router.push('/')}
              className="bg-eletric-blue hover:bg-hover-eletric-blue"
            >
              <Search className="mr-2 h-4 w-4" />
              Nova análise
            </Button>
          </div>

          {scans.length === 0 ? (
            <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Nenhuma análise realizada</h3>
                <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                  Comece analisando um site para ver os resultados aqui
                </p>
                <Button 
                  onClick={() => router.push('/')}
                  className="bg-eletric-blue hover:bg-hover-eletric-blue"
                >
                  Fazer primeira análise
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {scans.map((scan) => (
                <Card 
                  key={scan.id} 
                  className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 transition-all hover:shadow-lg dark:hover:bg-white/10 cursor-pointer"
                  onClick={() => router.push(`/scan/${scan.id}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white break-all">
                            {scan.url}
                          </h3>
                          <Badge 
                            variant={
                              scan.grade === 'A+' || scan.grade === 'A' 
                                ? 'success' 
                                : scan.grade === 'F' 
                                ? 'critical' 
                                : 'warning'
                            }
                          >
                            {scan.grade}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{new Date(scan.startedAt).toLocaleDateString('pt-BR')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Shield className="h-4 w-4" />
                            <span>Pontuação: {scan.score}/100</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <AlertTriangle className="h-4 w-4" />
                            <span>{scan.vulnerabilities.length} vulnerabilidades</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="self-start sm:self-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/scan/${scan.id}`);
                        }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
