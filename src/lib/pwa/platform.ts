export function isStandaloneDisplay(): boolean {
  if (typeof globalThis.window === "undefined") {
    return false;
  }
  const w = globalThis.window;
  const nav = w.navigator as Navigator & { standalone?: boolean };
  return (
    w.matchMedia("(display-mode: standalone)").matches ||
    nav.standalone === true
  );
}

export function isIosDevice(): boolean {
  if (typeof globalThis.navigator === "undefined") {
    return false;
  }
  const nav = globalThis.navigator;
  return (
    /iPad|iPhone|iPod/.test(nav.userAgent) ||
    (nav.platform === "MacIntel" && nav.maxTouchPoints > 1)
  );
}
