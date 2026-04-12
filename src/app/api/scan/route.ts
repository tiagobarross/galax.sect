import { NextRequest, NextResponse } from 'next/server';
import { scanRequestSchema } from '@/lib/validators';
import { analyzeSecurityHeaders } from '@/lib/scanner/header-analyzer';
import { analyzeSSL } from '@/lib/scanner/ssl-analyzer';
import { detectVulnerabilities } from '@/lib/scanner/vulnerability-detector';
import { calculateScore, calculateGrade } from '@/lib/scanner/score-calculator';
import { ScanResult } from '@/types/scan';
import { SCAN_TIMEOUT, DEFAULT_USER_AGENT } from '@/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validation = scanRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: validation.error.issues },
        { status: 400 }
      );
    }

    const { url, options } = validation.data;
    const scanId = `scan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const startedAt = new Date().toISOString();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), options?.timeout || SCAN_TIMEOUT);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': DEFAULT_USER_AGENT,
        },
        redirect: options?.followRedirects ? 'follow' : 'manual',
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const headers = response.headers;
      const securityHeaders = analyzeSecurityHeaders(headers);
      
      const sslInfo = options?.checkSSL !== false 
        ? await analyzeSSL(url)
        : undefined;

      const vulnerabilities = detectVulnerabilities(
        securityHeaders,
        sslInfo || { valid: true },
        url
      );

      const score = calculateScore(vulnerabilities);
      const grade = calculateGrade(score);
      const completedAt = new Date().toISOString();
      const duration = new Date(completedAt).getTime() - new Date(startedAt).getTime();

      const result: ScanResult = {
        id: scanId,
        url,
        status: 'completed',
        score,
        grade,
        vulnerabilities,
        securityHeaders,
        sslInfo,
        startedAt,
        completedAt,
        duration,
      };

      return NextResponse.json(result, { status: 200 });

    } catch (fetchError) {
      clearTimeout(timeout);
      
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        return NextResponse.json(
          { error: 'Tempo esgotado: a análise demorou demais para ser concluída' },
          { status: 408 }
        );
      }

      throw fetchError;
    }

  } catch (error) {
    console.error('Erro na análise:', error);
    
    return NextResponse.json(
      { 
        error: 'Erro ao realizar a análise',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'API Galax.sect',
      version: '1.0.0',
      endpoints: {
        scan: 'POST /api/scan',
      }
    },
    { status: 200 }
  );
}
