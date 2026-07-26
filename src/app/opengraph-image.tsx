import { ImageResponse } from "next/og";

export const alt = "EduVerse — structured Mathematics and Physics learning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 15% 15%, rgba(99,102,241,.45), transparent 36%), radial-gradient(circle at 85% 82%, rgba(14,165,233,.38), transparent 34%), #09090b",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "white",
              color: "#09090b",
            }}
          >
            E
          </div>
          EduVerse
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: 970 }}>
          <div style={{ fontSize: 70, lineHeight: 1.04, fontWeight: 800, letterSpacing: "-3px" }}>
            Learn from first principles.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,.76)" }}>
            Guided Mathematics and Physics paths, interactive practice, scientists, inventions and science answers.
          </div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: 23, color: "rgba(255,255,255,.62)" }}>
          <span>500+ lessons</span>
          <span>•</span>
          <span>Interactive learning</span>
          <span>•</span>
          <span>Progress tracking</span>
        </div>
      </div>
    ),
    size
  );
}
