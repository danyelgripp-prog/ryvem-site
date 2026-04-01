import { useState, useEffect } from "react";
import { Link } from "wouter";

const STORAGE_KEY = "vetiva_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 sm:px-6"
      style={{ background: "rgba(6, 15, 30, 0.95)", borderTop: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/60 text-xs leading-relaxed text-center sm:text-left" style={{ fontFamily: "Inter, sans-serif" }}>
          Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <Link href="/privacidade">
            <a className="underline transition-colors hover:opacity-80" style={{ color: "#00C896" }}>
              Política de Privacidade
            </a>
          </Link>.
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 px-5 py-2 rounded-lg text-xs font-bold text-black transition-all hover:brightness-110 cursor-pointer"
          style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
