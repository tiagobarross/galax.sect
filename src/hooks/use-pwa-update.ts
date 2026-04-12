"use client";

import { useCallback, useEffect, useState } from "react";

export function usePwaUpdate() {
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const serwist = globalThis.window?.serwist;
    if (!serwist) {
      return;
    }
    const onWaiting = () => setWaiting(true);
    serwist.addEventListener("waiting", onWaiting);
    return () => serwist.removeEventListener("waiting", onWaiting);
  }, []);

  const applyUpdate = useCallback(() => {
    const serwist = globalThis.window?.serwist;
    if (!serwist) {
      return;
    }
    serwist.messageSkipWaiting();
    globalThis.location.reload();
  }, []);

  return { hasUpdate: waiting, applyUpdate };
}
