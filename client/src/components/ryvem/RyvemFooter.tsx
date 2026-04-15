import { Link } from "wouter";

const LOGO_PRINCIPAL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/ryvem_logo_principal_dec02b57.png';

const links = {
  solucoes: [
    { label: 'Vetiva', href: 'https://vetiva.manus.space', externo: true },
    { label: 'Magic SDR', href: '#solucoes', externo: false },
  ],
  empresa: [
    { label: 'Sobre a RYVEM', href: '#sobre', externo: false },
    { label: 'Missão, Visão e Valores', href: '/missao-visao-valores', externo: false },
    { label: 'Resultados', href: '#cases', externo: false },
    { label: 'Como trabalhamos', href: '#processo', externo: false },
  ],
  contato: [
    { label: 'WhatsApp', href: 'https://wa.me/5522997178962', externo: true },
    { label: 'contato@ryvem.com.br', href: 'mailto:contato@ryvem.com.br', externo: false },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ryvem', externo: true },
    { label: 'Instagram', href: 'https://instagram.com/ryvem.tech', externo: true },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { label: 'Termos de Uso', href: '/termos-de-uso' },
    { label: 'Política de Cookies', href: '/politica-de-cookies' },
    { label: 'Conformidade LGPD', href: '/conformidade-lgpd' },
    { label: 'Acessibilidade', href: '/acessibilidade' },
    { label: 'DPA', href: '/dpa' },
  ],
};

const linkStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.875rem',
  color: 'rgba(240,242,255,0.45)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
};

const headingStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.65rem',
  fontWeight: '700' as const,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'rgba(240,242,255,0.25)',
  marginBottom: '1.25rem',
};

export default function RyvemFooter() {
  return (
    <footer
      style={{
        background: '#060610',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: 'clamp(3rem, 6vw, 5rem) 0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        {/* Grid principal — 5 colunas em desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {/* Coluna Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src={LOGO_PRINCIPAL}
                alt="RYVEM"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                color: 'rgba(240,242,255,0.38)',
                lineHeight: '1.7',
                maxWidth: '260px',
                marginBottom: '1.5rem',
              }}
            >
              Transformamos caos operacional em fluxo previsível de resultado para empresas B2B.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                borderRadius: '100px',
                background: 'rgba(0, 85, 238, 0.08)',
                border: '1px solid rgba(0, 85, 238, 0.15)',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0055EE, #5B21B6)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  color: 'rgba(51, 119, 255, 0.8)',
                  letterSpacing: '0.02em',
                }}
              >
                O fluxo que retorna.
              </span>
            </div>
          </div>

          {/* Coluna Soluções */}
          <div>
            <h4 style={headingStyle}>Soluções</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {links.solucoes.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.externo ? '_blank' : undefined}
                  rel={l.externo ? 'noopener noreferrer' : undefined}
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F0F2FF')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,242,255,0.45)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna Empresa */}
          <div>
            <h4 style={headingStyle}>Empresa</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {links.empresa.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F0F2FF')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,242,255,0.45)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna Contato */}
          <div>
            <h4 style={headingStyle}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {links.contato.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.externo ? '_blank' : undefined}
                  rel={l.externo ? 'noopener noreferrer' : undefined}
                  style={linkStyle}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#F0F2FF')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,242,255,0.45)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Seção Legal — linha separada */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '2rem',
            marginBottom: '1.75rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.375rem 0',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(240,242,255,0.2)',
                marginRight: '1.25rem',
                whiteSpace: 'nowrap',
              }}
            >
              Legal
            </span>
            {links.legal.map((l, i) => (
              <span key={l.href} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && (
                  <span
                    style={{
                      color: 'rgba(240,242,255,0.12)',
                      margin: '0 0.75rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    ·
                  </span>
                )}
                <Link href={l.href}>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.78rem',
                      color: 'rgba(240,242,255,0.32)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = 'rgba(240,242,255,0.7)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = 'rgba(240,242,255,0.32)')}
                  >
                    {l.label}
                  </span>
                </Link>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.78rem',
              color: 'rgba(240,242,255,0.2)',
            }}
          >
            © 2026 DMG Serviços Empresariais Ltda (RYVEM) — CNPJ 35.416.764/0001-47 — Nova Friburgo/RJ
          </p>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              color: 'rgba(240,242,255,0.18)',
              letterSpacing: '0.02em',
              fontStyle: 'italic',
            }}
          >
            RYV — o fluxo que não para. EM — aquilo que retorna.
          </p>
        </div>
      </div>
    </footer>
  );
}
