"use client";

import { useCallback, useEffect, useState } from "react";
import { isIosDevice, isStandaloneDisplay } from "@/lib/pwa/platform";
import { useIsClient } from "@/hooks/use-is-client";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function usePwaInstall() {
  const isClient = useIsClient();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    globalThis.addEventListener("beforeinstallprompt", onBeforeInstall);
    return () =>
      globalThis.removeEventListener("beforeinstallprompt", onBeforeInstall);
  }, []);

  const standalone = isClient && isStandaloneDisplay();
  const canShow =
    isClient &&
    !standalone &&
    !dismissed &&
    (deferred !== null || isIosDevice());

  const install = useCallback(async () => {
    if (!deferred) {
      return;
    }
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
  }, [deferred]);

  const dismiss = useCallback(() => {
    setDismissed(true);
  }, []);

  return {
    canShowInstall: canShow,
    canUseNativePrompt: deferred !== null,
    install,
    dismiss,
    isIos: isIosDevice(),
  };
}
