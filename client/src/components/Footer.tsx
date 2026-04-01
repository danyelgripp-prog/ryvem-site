import { MessageCircle } from "lucide-react";

const LOGO_DARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/vetiva_logo_dark_37189109.png";
const WA_LINK = "https://wa.me/5522998047666";

export default function Footer() {
  return (
    <footer style={{ background: "#060f1e", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <img src={LOGO_DARK_URL} alt="Vetiva" className="h-8 w-auto object-contain" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              IA de atendimento 24/7 com DNA da sua clínica veterinária. A Maya atende, agenda e fecha — enquanto você cuida dos animais.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#00C896", fontFamily: "Inter, sans-serif" }}
            >
              <MessageCircle size={16} />
              (22) 99804-7666
            </a>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Produto
            </p>
            <ul className="space-y-2">
              {[
                { label: "Solução", href: "#solucao" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Comparativo", href: "#comparativo" },
                { label: "Vetiva Agent", href: "#produtos" },
                { label: "Vetiva Intelligence", href: "#produtos" },
              ].map((link) => (
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

          <div className="space-y-4">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Empresa
            </p>
            <ul className="space-y-2">
              {[
                { label: "Garantia", href: "#garantia" },
                { label: "FAQ", href: "#faq" },
                { label: "Contato via WhatsApp", href: WA_LINK },
              ].map((link) => (
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
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-white/20 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2025 Vetiva. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidade", "Termos de Uso", "LGPD"].map((item) => (
              <a key={item} href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
