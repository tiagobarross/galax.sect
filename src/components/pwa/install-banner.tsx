"use client";

import { Button } from "@/components/ui/button";
import { Download, Share, X } from "lucide-react";

type InstallBannerProps = {
  visible: boolean;
  canUseNativePrompt: boolean;
  isIos: boolean;
  onInstall: () => void;
  onDismiss: () => void;
};

export function InstallBanner({
  visible,
  canUseNativePrompt,
  isIos,
  onInstall,
  onDismiss,
}: InstallBannerProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Instalar aplicativo"
      className="pointer-events-auto border-t border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/95"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 text-sm text-gray-700 dark:text-gray-200">
          <p className="font-medium">Instalar Galax.sect</p>
          {isIos && !canUseNativePrompt ? (
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Toque em{" "}
              <span className="inline-flex items-center gap-1 font-medium">
                <Share className="inline h-4 w-4" aria-hidden />
                Compartilhar
              </span>{" "}
              e depois em &quot;Adicionar à Tela de Início&quot;.
            </p>
          ) : (
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Acesse mais rápido e use em tela cheia como um app.
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {canUseNativePrompt ? (
            <Button
              type="button"
              size="sm"
              className="bg-eletric-blue hover:bg-hover-eletric-blue"
              onClick={onInstall}
            >
              <Download className="mr-2 h-4 w-4" aria-hidden />
              Instalar
            </Button>
          ) : null}
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={onDismiss}
            aria-label="Dispensar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
