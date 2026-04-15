import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/ryvem_logo_principal_dec02b57.png";

const legalLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
  { label: "Conformidade LGPD", href: "/conformidade-lgpd" },
  { label: "Acessibilidade", href: "/acessibilidade" },
  { label: "DPA", href: "/dpa" },
];

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#0A0A1A]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src={LOGO_URL} alt="RYVEM" className="h-9 w-auto" />
          </Link>
          <Link href="/">
            <span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
              ← Voltar ao site
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero da página legal */}
      <div className="border-b border-white/10 bg-gradient-to-b from-[#0D0D2A] to-[#0A0A1A]">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/"><span className="hover:text-white/70 cursor-pointer transition-colors">Início</span></Link>
            <span>/</span>
            <span className="text-white/70">Legal</span>
            <span>/</span>
            <span className="text-[#0055EE]">{title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/50 text-sm">Última atualização: {lastUpdated}</p>
        </div>
      </div>

      {/* Layout principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar de navegação legal */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Páginas Legais</p>
              <nav className="flex flex-col gap-1">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block px-4 py-2.5 rounded-lg text-sm cursor-pointer transition-all ${
                        link.label === title
                          ? "bg-[#0055EE]/20 text-[#4D8EFF] border border-[#0055EE]/30 font-medium"
                          : "text-white/50 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-white/50 mb-2">Dúvidas sobre privacidade?</p>
                <a
                  href="mailto:contato@ryvem.com.br"
                  className="text-sm text-[#4D8EFF] hover:text-[#0055EE] transition-colors"
                >
                  contato@ryvem.com.br
                </a>
              </div>
            </div>
          </aside>

          {/* Conteúdo principal */}
          <main className="lg:col-span-3">
            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#4D8EFF]
              prose-p:text-white/70 prose-p:leading-relaxed
              prose-li:text-white/70
              prose-strong:text-white
              prose-a:text-[#4D8EFF] prose-a:no-underline hover:prose-a:underline
            ">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Footer mínimo */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} DMG Serviços Empresariais Ltda — CNPJ 35.416.764/0001-47
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-white/30 hover:text-white/60 text-xs cursor-pointer transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
