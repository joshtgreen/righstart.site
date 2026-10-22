import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Josh Green | Fractional COO/CFO and Advisor | RightStart";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function dataUri(relativePath: string, mime: string) {
  const data = readFileSync(join(process.cwd(), relativePath));
  return `data:${mime};base64,${data.toString("base64")}`;
}

export default function Image() {
  const headshotSrc = dataUri("public/josh-headshot.jpg", "image/jpeg");
  const logoSrc = dataUri("public/logos/rightstart font white.png", "image/png");

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a2744",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 70px",
        }}
      >
        <img
          src={headshotSrc}
          alt=""
          width={420}
          height={420}
          style={{ borderRadius: 210, objectFit: "cover" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 60,
          }}
        >
          {/* The bundled font has no bold weight; a thin stroke of the same colour stands in for it. */}
          <div
            style={{
              fontSize: 76,
              color: "#ffffff",
              lineHeight: 1.1,
              WebkitTextStroke: "2.5px #ffffff",
            }}
          >
            Josh Green
          </div>
          <div style={{ fontSize: 36, color: "#3dbda5", marginTop: 22, lineHeight: 1.25 }}>
            Fractional COO/CFO and Advisor
          </div>
          <div style={{ fontSize: 30, color: "#ffffff", marginTop: 6, lineHeight: 1.3 }}>
            for nonprofits and mission-driven startups
          </div>
          <img
            src={logoSrc}
            alt=""
            width={293}
            height={60}
            style={{ marginTop: 52 }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
