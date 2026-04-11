import { Navbar } from "@/components/Navbar";
import { ScanForm } from "@/components/scan-form";
import { Shield, Zap, FileText, Bell, Search, Lock } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/blue_planet_background.png"
              alt="Background"
              className="h-full w-full object-cover opacity-20 dark:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white dark:from-black/60 dark:via-black/40 dark:to-black" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-eletric-blue/30 bg-eletric-blue/10 px-4 py-2 text-sm font-medium text-eletric-blue">
              <Shield className="h-4 w-4" />
              Web Vulnerability Scanner
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Proteja seu site contra
              <span className="block text-eletric-blue">vulnerabilidades</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl">
              Análise automatizada de segurança web. Detecte vulnerabilidades, más configurações e riscos em segundos.
            </p>

            <div className="mx-auto max-w-3xl">
              <ScanForm />
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              ✓ Análise gratuita · ✓ Relatório detalhado · ✓ Recomendações práticas
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/50 px-4 py-16 backdrop-blur-sm sm:px-6 lg:px-8 transition-colors">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Como funciona
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
                Análise completa de segurança em poucos passos
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all hover:shadow-lg dark:hover:bg-white/10">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <Search className="h-6 w-6 text-eletric-blue" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">Varredura Automática</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Análise completa de headers HTTP, SSL/TLS e configurações de segurança
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all hover:shadow-lg dark:hover:bg-white/10">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <Shield className="h-6 w-6 text-eletric-blue" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">Detecção de Riscos</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Identificação de vulnerabilidades baseada em OWASP Top 10 e melhores práticas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all hover:shadow-lg dark:hover:bg-white/10">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <FileText className="h-6 w-6 text-eletric-blue" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">Relatório Detalhado</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Relatório técnico com recomendações práticas e acionáveis
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all hover:shadow-lg dark:hover:bg-white/10">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <Zap className="h-6 w-6 text-eletric-blue" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">Análise Rápida</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Resultados em segundos com score de segurança e classificação de risco
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all hover:shadow-lg dark:hover:bg-white/10">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <Lock className="h-6 w-6 text-eletric-blue" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">Verificação SSL</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Validação de certificados, protocolos e configurações de criptografia
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm transition-all hover:shadow-lg dark:hover:bg-white/10">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <Bell className="h-6 w-6 text-eletric-blue" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">Histórico de Scans</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Acompanhe a evolução da segurança do seu site ao longo do tempo
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-200 dark:border-white/10 px-4 py-16 sm:px-6 lg:px-8 transition-colors">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Pronto para analisar seu site?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Comece agora mesmo. Sem cadastro, sem cartão de crédito.
            </p>
            <div className="mx-auto max-w-2xl">
              <ScanForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/10 px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors">
        <p className="text-gray-700 dark:text-gray-300">
          © 2026 Galax.sect. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          Desenvolvido por <a href="https://github.com/tiagobarross" target="_blank" rel="noopener noreferrer" className="text-eletric-blue hover:underline">Tiago Barros</a>
        </p>
        <p className="mt-2">
          Feito com ❤️ para tornar a web mais segura
        </p>
      </footer>
    </div>
  );
}
