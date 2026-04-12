import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Target, Zap, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Sobre o Galax.sect</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Tornando a web mais segura, um scan por vez
          </p>
        </div>

        <div className="mb-16">
          <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
            <CardContent className="p-8">
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                O <span className="font-semibold text-eletric-blue">Galax.sect</span> é um scanner de vulnerabilidades web
                moderno desenvolvido para ajudar desenvolvedores, empresas e profissionais de segurança a identificar 
                vulnerabilidades e más configurações em aplicações web.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Nossa missão é democratizar a segurança web, fornecendo ferramentas poderosas e acessíveis para 
                análise automatizada de vulnerabilidades, baseadas nas melhores práticas do OWASP e padrões da indústria.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Nossos Valores</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                  <Shield className="h-6 w-6 text-eletric-blue" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Segurança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comprometidos com as melhores práticas de segurança em todas as nossas análises
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                  <Zap className="h-6 w-6 text-eletric-blue" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Velocidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Resultados rápidos e precisos para que você possa agir imediatamente
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                  <Target className="h-6 w-6 text-eletric-blue" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Precisão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detecção precisa com baixa taxa de falsos positivos
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-eletric-blue/20">
                  <Users className="h-6 w-6 text-eletric-blue" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Acessibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ferramentas poderosas acessíveis para todos os níveis de expertise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Tecnologia</h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Construído com Next.js 16, TypeScript, Tailwind CSS e as melhores práticas de desenvolvimento moderno.
            Nosso scanner é baseado em padrões OWASP Top 10 e constantemente atualizado com as últimas ameaças.
          </p>
        </div>

        <div className="text-center">
          <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 inline-block">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Desenvolvido por</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-eletric-blue mb-2">Tiago Barros</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Desenvolvedor Full-Stack</p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href="https://github.com/tiagobarross" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-eletric-blue transition-colors"
                >
                  GitHub
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/tiago-oliveira-barros/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-eletric-blue transition-colors"
                >
                  LinkedIn
                </Link>
                <Link 
                  href="https://www.instagram.com/tiagoo_barross/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-eletric-blue transition-colors"
                >
                  Instagram
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
