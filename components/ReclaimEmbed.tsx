"use client";
import { useEffect, useRef, useState } from "react";

export default function ReclaimEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.src =
      "https://meet.reclaimai.com/scripts/embed-scheduling-link.0.x.x.js";
    script.setAttribute("data-id", "4739f3cc-6238-44c8-a112-314d47bc4841");
    script.setAttribute("data-redirect", "NONE");
    script.crossOrigin = "anonymous";
    script.onload = () => setStatus("ready");
    script.onerror = () => setStatus("error");
    ref.current.appendChild(script);
  }, []);

  return (
    <div>
      {status === "loading" && (
        <div className="text-center py-8">
          <div className="inline-block w-6 h-6 border-2 border-[var(--teal)]/30 border-t-[var(--teal)] rounded-full animate-spin mb-3" aria-hidden="true" />
          <p className="text-[#4a5568]">Loading scheduler...</p>
        </div>
      )}
      {status === "error" && (
        <div className="text-center py-8">
          <p className="text-[#4a5568] mb-3">
            The scheduling widget couldn&apos;t load.
          </p>
          <a
            href="mailto:josh@rightstart.co?subject=Let's%20Chat"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-[var(--teal)] text-white hover:bg-[#236b5e] transition-colors"
          >
            Email Josh directly
          </a>
        </div>
      )}
      <div ref={ref} />
    </div>
  );
}
