import { useState, useEffect } from "react";

const STORAGE_KEY = "ryvem-cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0A0A1A",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "1rem clamp(1.25rem, 4vw, 2.5rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.8125rem",
            color: "rgba(240,242,255,0.6)",
            lineHeight: 1.6,
            margin: 0,
            flex: "1 1 300px",
          }}
        >
          Utilizamos cookies para melhorar sua experiência. Ao continuar
          navegando, você concorda com nossa{" "}
          <a
            href="/politica-de-cookies"
            style={{ color: "#A78BFA", textDecoration: "underline" }}
          >
            Política de Cookies
          </a>
          .
        </p>
        <button
          onClick={accept}
          style={{
            background: "linear-gradient(135deg, #0055EE, #7C3AED)",
            color: "#fff",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "0.875rem",
            padding: "0.625rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
