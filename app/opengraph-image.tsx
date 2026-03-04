import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EclipticLink — Custom Software Development & AI Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#061a4d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #74D2B0 0%, #0c2e8a 100%)",
          }}
        />

        {/* Logo + brand name row */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "36px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://eclipticlink.com/ecliptic-link-logo.png"
            width={80}
            height={80}
            alt="EclipticLink logo"
            style={{ borderRadius: "12px" }}
          />
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            EclipticLink
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "58px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "820px",
            marginBottom: "28px",
            letterSpacing: "-1px",
          }}
        >
          Custom Software Development &amp; AI Solutions
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "#74D2B0",
            fontWeight: 500,
            maxWidth: "780px",
            lineHeight: 1.4,
          }}
        >
          AI Integration · Mobile Apps · Cloud &amp; DevOps · Hire Dedicated Teams
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "44px",
            right: "90px",
            fontSize: "20px",
            color: "#8ba3cc",
            fontWeight: 500,
          }}
        >
          eclipticlink.com
        </div>
      </div>
    ),
    { ...size }
  );
}
