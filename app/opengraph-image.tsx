import { ImageResponse } from "next/og";

export const alt = "Rightstart | Fractional/Interim COO or CFO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a2744",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Teal glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(42,125,110,0.45) 0%, transparent 70%)",
          }}
        />

        {/* Faint dot grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#3dbda5",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          RIGHTSTART
        </div>

        {/* Centre content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Fractional &amp; Interim</span>
            <span>
              <span style={{ color: "#3dbda5" }}>COO</span>
              <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 16px" }}>·</span>
              <span style={{ color: "#3dbda5" }}>CFO</span>
            </span>
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              maxWidth: 680,
              display: "flex",
            }}
          >
            Strategic operations leadership for nonprofits and mission-driven
            organizations.
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 36, height: 2, background: "#2a7d6e", display: "flex" }} />
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#3dbda5",
              display: "flex",
            }}
          >
            rightstart.co
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
