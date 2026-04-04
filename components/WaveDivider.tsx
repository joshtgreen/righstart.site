/**
 * SVG wave section divider — matches wageproof.com style.
 *
 * direction="down" — arch hangs down (use when dark section flows into light)
 * direction="up"   — arch rises up  (use when light section flows into dark)
 *
 * fillColor should match the PRECEDING section's background.
 */
export default function WaveDivider({
  direction = "down",
  fillColor = "var(--navy)",
  className = "",
}: {
  direction?: "down" | "up";
  fillColor?: string;
  className?: string;
}) {
  const path =
    direction === "down"
      ? "M0,0 H1440 Q720,192 0,0 Z"
      : "M0,96 H1440 Q720,-96 0,96 Z";

  return (
    <div className={`w-full leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="block w-full h-[48px] sm:h-[72px] lg:h-[96px]"
      >
        <path d={path} fill={fillColor} />
      </svg>
    </div>
  );
}
