"use client";

import { useEffect } from "react";

export default function CuelumeSounds() {
  useEffect(() => {
    let unbind: (() => void) | undefined;
    let cancelled = false;

    void import("cuelume").then(({ bind }) => {
      if (cancelled) {
        return;
      }
      unbind = bind();
    });

    return () => {
      cancelled = true;
      unbind?.();
    };
  }, []);

  return null;
}
