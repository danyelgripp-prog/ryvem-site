import { useState, useEffect } from 'react';
import { Link } from 'wouter';

// Logo principal RYVEM — fundo escuro nativo, perfeita para navbar escura
const LOGO_PRINCIPAL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/ryvem_logo_principal_dec02b57.png';

const navLinks = [
  { label: 'Como trabalhamos', href: '#processo', isAnchor: true },
  { label: 'Produtos', href: '#produtos', isAnchor: true },
  { label: 'Cases', href: '#cases', isAnchor: true },
  { label: 'Missão, Visão e Valores', href: '/missao-visao-valores', isAnchor: false },
];

export default function RyvemNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(10,10,26,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="container">
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo — tamanho e posicionamento corretos */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img
              src={LOGO_PRINCIPAL}
              alt="RYVEM"
              style={{
                height: '38px',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'left center',
                display: 'block',
                transition: 'opacity 0.3s ease',
              }}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.125rem' }}>
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '0.5rem 1rem',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '0.5rem 1rem',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="https://wa.me/5522997178962?text=Quero%20falar%20com%20a%20RYVEM"
              target="_blank"
              rel="noopener noreferrer"
              className="ryvem-btn-primary"
              style={{ padding: '0.625rem 1.5rem', borderRadius: '8px', fontSize: '0.85rem' }}
            >
              Falar com a RYVEM
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: '#FFFFFF',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  transform: mobileOpen
                    ? i === 0 ? 'rotate(45deg) translate(3px, 3px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(3px, -3px)'
                    : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              background: 'rgba(10,10,26,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: '0.875rem 0',
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: '1rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: '0.875rem 0',
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: '1rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <a
              href="https://wa.me/5522997178962?text=Quero%20falar%20com%20a%20RYVEM"
              target="_blank"
              rel="noopener noreferrer"
              className="ryvem-btn-primary"
              style={{ display: 'flex', justifyContent: 'center', padding: '0.875rem', borderRadius: '10px' }}
            >
              Falar com a RYVEM
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
