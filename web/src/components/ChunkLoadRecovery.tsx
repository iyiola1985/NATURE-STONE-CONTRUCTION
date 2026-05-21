"use client";

import { useEffect } from "react";

/**
 * One automatic reload when Next dev chunks 404 after a stale .next / HMR mismatch.
 */
export function ChunkLoadRecovery() {
  useEffect(() => {
    const key = "nsc-chunk-reload";

    const onError = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLScriptElement) || !target.src) return;
      if (!target.src.includes("/_next/static/")) return;
      if (sessionStorage.getItem(key)) return;

      sessionStorage.setItem(key, "1");
      window.location.reload();
    };

    window.addEventListener("error", onError, true);
    return () => window.removeEventListener("error", onError, true);
  }, []);

  return null;
}
