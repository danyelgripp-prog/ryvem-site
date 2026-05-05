import { MessageCircle } from "lucide-react";

const LOGO_DARK_URL = "/ryvem_vet_logo_dark.png";
const WA_LINK = "https://wa.me/5522981047666";
const WA_DIAGNOSTICO = "https://wa.me/5522981047666?text=Quero%20meu%20diagn%C3%B3stico%20gratuito";

const produtoLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Plano AGENTE", href: "#produtos" },
  { label: "Plano DIRETOR", href: "#produtos" },
];

const empresaLinks = [
  { label: "Garantia", href: "#garantia" },
  { label: "FAQ", href: "#faq" },
  { label: "Diagnóstico Gratuito", href: WA_DIAGNOSTICO },
  { label: "Contato via WhatsApp", href: WA_LINK },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
  { label: "Conformidade LGPD", href: "/conformidade-lgpd" },
  { label: "Acessibilidade", href: "/acessibilidade" },
  { label: "DPA", href: "/dpa" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060f1e", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <img src={LOGO_DARK_URL} alt="RYVEM VET" className="h-8 w-auto object-contain" />
            <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              A primeira aceleradora de negócios veterinários do Brasil.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#00C896", fontFamily: "Inter, sans-serif" }}
            >
              <MessageCircle size={16} />
              (22) 98104-7666
            </a>
            <p className="text-white/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              vet@ryvem.com.br
            </p>
            <p className="text-white/20 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Rua Romualdo Machado, 122<br />Nova Friburgo/RJ
            </p>
          </div>

          {/* Produto */}
          <div className="space-y-4">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Produto
            </p>
            <ul className="space-y-2">
              {produtoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-4">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Empresa
            </p>
            <ul className="space-y-2">
              {empresaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Legal
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex flex-wrap gap-4 justify-center">
            {legalLinks.slice(0, 5).map((link) => (
              <a key={link.label} href={link.href} className="text-white/20 hover:text-white/50 text-xs transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-white/20 text-xs text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2026 DMG Serviços Empresariais Ltda — CNPJ 35.416.764/0001-47 · Rua Romualdo Machado, 122 · Nova Friburgo/RJ · vet@ryvem.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}
