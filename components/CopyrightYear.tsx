"use client";

import { useSyncExternalStore } from "react";

// The footer is prerendered at build time, so the server can only know the
// build year. React renders the build year during hydration, then swaps in
// the visitor's current year, so the copyright line never goes stale between
// deploys.
const subscribe = () => () => {};
const currentYear = () => new Date().getFullYear();

export default function CopyrightYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(subscribe, currentYear, () => buildYear);

  return <span suppressHydrationWarning>{year}</span>;
}
