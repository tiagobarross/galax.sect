'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { validateUrl } from '@/lib/validators';
import { Search, AlertCircle, Loader2 } from 'lucide-react';
import { ScanResult } from '@/types/scan';

interface ScanFormProps {
  onScanStart?: (url: string) => void;
}

export function ScanForm({ onScanStart }: ScanFormProps) {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validation = validateUrl(url);
    if (!validation.valid) {
      setError(validation.error || 'URL inválida');
      return;
    }

    setIsLoading(true);

    try {
      if (onScanStart) {
        onScanStart(url);
      }

      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao realizar scan');
      }

      const result: ScanResult = await response.json();
      
      localStorage.setItem(`scan_${result.id}`, JSON.stringify(result));
      
      router.push(`/scan/${result.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao iniciar scan. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError(null);
            }}
            className="h-12 pr-10 text-base sm:h-14 sm:text-lg"
            disabled={isLoading}
            aria-label="URL do site para análise"
          />
          <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isLoading || !url}
          className="h-12 min-w-[140px] bg-eletric-blue text-base font-semibold hover:bg-hover-eletric-blue sm:h-14 sm:text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analisando...
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Analisar
            </>
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
