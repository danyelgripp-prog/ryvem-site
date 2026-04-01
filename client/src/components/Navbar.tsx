import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const LOGO_DARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/vetiva_logo_dark_37189109.png";
const WA_LINK = "https://wa.me/5522998047666?text=Quero%20o%20diagn%C3%B3stico%20gratuito%20do%20Vetiva";

const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Planos", href: "#produtos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
      style={{
        background: "rgba(7,24,16,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={LOGO_DARK_URL} alt="Vetiva" className="h-8 w-auto object-contain" style={{ maxWidth: "140px" }} />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-black transition-all hover:brightness-110"
            style={{ background: "#00c977", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={15} />
            Diagnóstico gratuito
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/8" style={{ background: "rgba(7,24,16,0.98)" }}>
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-400 hover:text-white py-2.5"
                style={{ fontFamily: "Inter, sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-black mt-3"
              style={{ background: "#00c977", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={16} />
              Diagnóstico gratuito
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
