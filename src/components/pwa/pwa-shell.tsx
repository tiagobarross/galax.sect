"use client";

import { InstallBanner } from "@/components/pwa/install-banner";
import { OfflineBanner } from "@/components/pwa/offline-banner";
import { UpdateBanner } from "@/components/pwa/update-banner";
import { useOnlineStatus } from "@/hooks/use-online-status";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { usePwaUpdate } from "@/hooks/use-pwa-update";

export function PwaClient() {
  const online = useOnlineStatus();
  const install = usePwaInstall();
  const update = usePwaUpdate();

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex flex-col">
        <OfflineBanner visible={!online} />
        <UpdateBanner visible={update.hasUpdate} onApply={update.applyUpdate} />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center">
        <div className="w-full max-w-3xl px-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <InstallBanner
            visible={install.canShowInstall}
            canUseNativePrompt={install.canUseNativePrompt}
            isIos={install.isIos}
            onInstall={install.install}
            onDismiss={install.dismiss}
          />
        </div>
      </div>
    </>
  );
}
