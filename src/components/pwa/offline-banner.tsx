"use client";

import { WifiOff } from "lucide-react";

type OfflineBannerProps = {
  visible: boolean;
};

export function OfflineBanner({ visible }: OfflineBannerProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none flex items-center justify-center gap-2 bg-amber-500/90 px-4 py-1.5 text-center text-xs font-medium text-amber-950">
      <WifiOff className="h-3.5 w-3.5 shrink-0" aria-hidden />
      Sem conexão — algumas funções podem ficar indisponíveis.
    </div>
  );
}
