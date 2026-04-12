import Link from "next/link";
import { WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <WifiOff
        className="h-14 w-14 text-gray-400 dark:text-gray-500"
        aria-hidden
      />
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Você está offline
      </h1>
      <p className="max-w-md text-sm text-gray-600 dark:text-gray-400">
        Verifique sua conexão e tente novamente. Conteúdo já visitado pode
        continuar disponível quando a rede voltar.
      </p>
      <Button asChild className="bg-eletric-blue hover:bg-hover-eletric-blue">
        <Link href="/">Ir para o início</Link>
      </Button>
    </div>
  );
}
