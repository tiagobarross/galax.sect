"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  isIosDevice,
  isStandaloneDisplay,
  MOBILE_VIEWPORT_MEDIA_QUERY,
} from "@/lib/pwa/platform";
import { useIsClient } from "@/hooks/use-is-client";

function subscribeMobileViewport(onStoreChange: () => void): () => void {
  const mq = globalThis.window.matchMedia(MOBILE_VIEWPORT_MEDIA_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getMobileViewportSnapshot(): boolean {
  return globalThis.window.matchMedia(MOBILE_VIEWPORT_MEDIA_QUERY).matches;
}

function getServerMobileViewportSnapshot(): boolean {
  return false;
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function usePwaInstall() {
  const isClient = useIsClient();
  const isMobileViewport = useSyncExternalStore(
    subscribeMobileViewport,
    getMobileViewportSnapshot,
    getServerMobileViewportSnapshot,
  );
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
    isMobileViewport &&
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
