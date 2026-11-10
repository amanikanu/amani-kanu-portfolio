"use client";

import { useEffect, useState } from "react";

/** Year computed client-side so prerendering stays stable. */
export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year ?? 2026}</>;
}
