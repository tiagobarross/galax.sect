/** Touch-first, narrow viewports — phones (incl. landscape) and small tablets; not desktop. */
export const MOBILE_VIEWPORT_MEDIA_QUERY =
  "(max-width: 1023px) and (pointer: coarse)";

export function isMobileViewport(): boolean {
  if (typeof globalThis.window === "undefined") {
    return false;
  }
  return globalThis.window.matchMedia(MOBILE_VIEWPORT_MEDIA_QUERY).matches;
}

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
