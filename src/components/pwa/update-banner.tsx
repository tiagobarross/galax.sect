"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

type UpdateBannerProps = {
  visible: boolean;
  onApply: () => void;
};

export function UpdateBanner({ visible, onApply }: UpdateBannerProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-auto border-b border-eletric-blue/30 bg-eletric-blue/15 px-4 py-2 text-center text-sm text-gray-900 dark:text-white dark:bg-eletric-blue/10">
      <span className="mr-3">Nova versão disponível.</span>
      <Button
        type="button"
        size="sm"
        variant="secondary"
        className="inline-flex items-center gap-1"
        onClick={onApply}
      >
        <RefreshCw className="h-4 w-4" aria-hidden />
        Atualizar
      </Button>
    </div>
  );
}
