import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MessageSquare, Code, Share2, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Entre em Contato</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Tem dúvidas, sugestões ou precisa de ajuda? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Envie uma Mensagem</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Preencha o formulário abaixo e retornaremos em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    className="bg-white dark:bg-black/50 border-gray-300 dark:border-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-white dark:bg-black/50 border-gray-300 dark:border-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Como podemos ajudar?"
                    className="bg-white dark:bg-black/50 border-gray-300 dark:border-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Sua mensagem..."
                    className="flex w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-black/50 px-4 py-2 text-base shadow-sm transition-colors placeholder:text-gray-400 dark:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eletric-blue disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button className="w-full bg-eletric-blue hover:bg-hover-eletric-blue">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <Mail className="h-5 w-5 text-eletric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a href="mailto:tiagobarros519@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-eletric-blue transition-colors">
                      tiagobarros519@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-eletric-blue/20">
                    <Phone className="h-5 w-5 text-eletric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                    <a href="https://wa.me/5585997395870" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-eletric-blue transition-colors">
                      +55 (85) 99739-5870
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Redes Sociais</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Conecte-se comigo nas redes sociais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="https://github.com/tiagobarross" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    GitHub - @tiagobarross
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/tiago-oliveira-barros/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    LinkedIn - Tiago Barros
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/tiagoo_barross/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Instagram - @tiagoo_barross
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">O scanner é gratuito?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sim! Oferecemos scans gratuitos para análise básica de segurança.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Meus dados são armazenados?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Os resultados são armazenados localmente no seu navegador. Não coletamos dados pessoais.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Posso usar em produção?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sim, mas sempre obtenha permissão antes de escanear sites que não são seus.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
