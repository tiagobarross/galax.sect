'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScanResult } from '@/types/scan';
import { VulnerabilityDetailCard } from '@/components/vulnerability-detail-card';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft,
  Clock,
  Globe,
  Lock,
  Info
} from 'lucide-react';


export default function ScanResultPage() {
  const params = useParams();
  const router = useRouter();
  const [result, setResult] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResult = () => {
      const storedResult = localStorage.getItem(`scan_${params.id}`);
      if (storedResult) {
        setResult(JSON.parse(storedResult));
      }
      setLoading(false);
    };
    
    loadResult();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black transition-colors">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-eletric-blue border-t-transparent" />
          <p className="text-gray-900 dark:text-white">Carregando resultados...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black px-4 transition-colors">
        <Card className="max-w-md border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Scan não encontrado</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Não foi possível encontrar os resultados deste scan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/')} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const criticalCount = result.vulnerabilities.filter(v => v.severity === 'CRITICAL').length;
  const highCount = result.vulnerabilities.filter(v => v.severity === 'HIGH').length;
  const mediumCount = result.vulnerabilities.filter(v => v.severity === 'MEDIUM').length;
  const lowCount = result.vulnerabilities.filter(v => v.severity === 'LOW').length;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="mb-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Resultado do Scan</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="break-all">{result.url}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{new Date(result.startedAt).toLocaleString('pt-BR')}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Score Geral</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-eletric-blue">{result.score}</span>
                <span className="text-2xl text-gray-600 dark:text-gray-400">/100</span>
              </div>
              <Badge 
                variant={result.grade === 'A+' || result.grade === 'A' ? 'success' : result.grade === 'F' ? 'critical' : 'warning'}
                className="mt-2"
              >
                Grade {result.grade}
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Crítico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                  <XCircle className="h-6 w-6 text-red-500" />
                </div>
                <span className="text-3xl font-bold">{criticalCount}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Alto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                </div>
                <span className="text-3xl font-bold">{highCount}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
            <CardHeader className="pb-3">
              <CardDescription className="text-gray-600 dark:text-gray-400">Médio/Baixo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                  <Info className="h-6 w-6 text-yellow-500" />
                </div>
                <span className="text-3xl font-bold">{mediumCount + lowCount}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {result.sslInfo && !result.sslInfo.valid && (
          <Alert variant="destructive" className="mb-6">
            <Lock className="h-4 w-4" />
            <AlertTitle>Problema com SSL/TLS</AlertTitle>
            <AlertDescription>
              O site não está utilizando HTTPS ou há problemas com o certificado SSL.
            </AlertDescription>
          </Alert>
        )}

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Vulnerabilidades Detectadas</h2>
          {result.vulnerabilities.length === 0 ? (
            <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
              <CardContent className="flex items-center gap-4 py-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Nenhuma vulnerabilidade detectada!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">O site está bem configurado.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {result.vulnerabilities.map((vuln) => (
                <VulnerabilityDetailCard key={vuln.id} vulnerability={vuln} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Headers de Segurança</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {result.securityHeaders.map((header) => (
              <Card key={header.name} className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base text-gray-900 dark:text-white">{header.name}</CardTitle>
                    {header.present ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{header.recommendation}</p>
                  {header.value && (
                    <code className="block rounded bg-gray-100 dark:bg-black/50 p-2 text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                      {header.value}
                    </code>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button onClick={() => router.push('/')} className="flex-1 bg-eletric-blue hover:bg-hover-eletric-blue">
            Fazer Novo Scan
          </Button>
          <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5">
            Exportar Relatório
          </Button>
        </div>
      </div>
    </div>
  );
}
