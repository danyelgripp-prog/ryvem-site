import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const LOGO_DARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/vetiva_logo_dark_37189109.png";
const WA_LINK = "https://wa.me/5522997178962?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Vetiva";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: "rgba(13,31,60,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={LOGO_DARK_URL}
            alt="Vetiva"
            className="h-8 w-auto object-contain"
            style={{ maxWidth: "140px" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-150"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-[#0D1F3C] transition-all hover:brightness-110"
            style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={15} />
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/10"
          style={{ background: "rgba(13,31,60,0.98)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-white/70 hover:text-white py-2.5"
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
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-[#0D1F3C] mt-3"
              style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={16} />
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
