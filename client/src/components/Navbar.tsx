import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/5522997178962?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20RYVEM";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Cases", href: "#cases" },
  { label: "Como funciona", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

function RyvemLogo() {
  return (
    <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="ryvem-logo-glow">
        <defs>
          <linearGradient id="navYGrad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3377FF"/>
            <stop offset="100%" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
        <path d="M15 17 L15 26" stroke="url(#navYGrad)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 17 L7 7" stroke="url(#navYGrad)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 17 L23 7" stroke="url(#navYGrad)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12.5 23.5 L15 26 L17.5 23.5" stroke="url(#navYGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: "1.2rem",
        letterSpacing: "-0.04em",
        color: "#FFFFFF",
      }}>
        RYVEM
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10, 10, 26, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <RyvemLogo />

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex ryvem-btn-primary"
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            fontSize: "0.875rem",
            textDecoration: "none",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Falar com a RYVEM
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#FFFFFF", padding: "4px", cursor: "pointer" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: "rgba(10, 10, 26, 0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                padding: "0.5rem 0",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ryvem-btn-primary"
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontSize: "0.9rem",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              marginTop: "0.5rem",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Falar com a RYVEM
          </a>
        </div>
      )}
    </header>
  );
}
