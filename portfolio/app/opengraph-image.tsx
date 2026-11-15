import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAFA",
          color: "#171717",
          padding: 72,
          borderTop: "10px solid #2563EB",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#2563EB" }}>
          {profile.eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            {profile.heroTitle}
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: "#737373" }}>
            {profile.name} · {profile.title}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
