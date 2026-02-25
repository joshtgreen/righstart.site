"use client";
import { useEffect, useRef } from "react";

export default function ReclaimEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.src =
      "https://meet.reclaimai.com/scripts/embed-scheduling-link.0.x.x.js";
    script.setAttribute("data-id", "4739f3cc-6238-44c8-a112-314d47bc4841");
    script.setAttribute("data-redirect", "NONE");
    ref.current.appendChild(script);
  }, []);
  return <div ref={ref} />;
}
