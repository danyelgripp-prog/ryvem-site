export default function RyvemCTA() {
  return (
    <section
      style={{
        padding: 'clamp(6rem, 12vw, 10rem) 0',
        background: '#0A0A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="ryvem-glow-line" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      {/* Glow central */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '500px',
          background:
            'radial-gradient(ellipse, rgba(0, 85, 238, 0.12) 0%, rgba(91, 33, 182, 0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Símbolo Y decorativo de fundo */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: '0.025',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <path
            d="M300 50 L300 300 M300 300 L100 500 M300 300 L500 500"
            stroke="url(#ctaGrad)"
            strokeWidth="40"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0055EE" />
              <stop offset="100%" stopColor="#5B21B6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Label */}
          <div className="ryvem-section-label" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            O próximo passo
          </div>

          {/* Headline principal — copy direto do Manifesto */}
          <h2
            style={{
              fontFamily: 'Syne, Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
              lineHeight: '1.0',
              letterSpacing: '-0.04em',
              color: '#F0F2FF',
              marginBottom: '2rem',
            }}
          >
            Se o seu negócio
            <br />
            ainda depende de esforço
            <br />
            constante para gerar resultado,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              você ainda está no caos.
            </span>
          </h2>

          {/* Subtítulo */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 1.75vw, 1.15rem)',
              color: 'rgba(240,242,255,0.55)',
              lineHeight: '1.75',
              marginBottom: '3rem',
              maxWidth: '560px',
              margin: '0 auto 3rem',
            }}
          >
            Se você quer construir algo previsível, escalável e sustentável —{' '}
            <strong style={{ color: 'rgba(240,242,255,0.85)', fontWeight: '600' }}>
              a RYVEM é onde isso começa.
            </strong>
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/5522997178962?text=Quero%20estruturar%20meu%20fluxo%20de%20resultado%20com%20a%20RYVEM"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '1.1rem 2.75rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0055EE 0%, #5B21B6 100%)',
              color: '#FFFFFF',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
              fontSize: '1rem',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              boxShadow: '0 8px 32px rgba(0, 85, 238, 0.35), 0 2px 8px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 48px rgba(0, 85, 238, 0.45), 0 4px 16px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(0, 85, 238, 0.35), 0 2px 8px rgba(0,0,0,0.3)';
            }}
          >
            Quero estruturar meu fluxo de resultado
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.78rem',
              color: 'rgba(240,242,255,0.2)',
              marginTop: '1.25rem',
              letterSpacing: '0.01em',
            }}
          >
            Sem compromisso. Diagnóstico inicial gratuito.
          </p>

          {/* Divider */}
          <div
            style={{
              margin: '4rem auto',
              width: '100%',
              maxWidth: '400px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
            }}
          />

          {/* Citação do Manifesto */}
          <div
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '500',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'rgba(240,242,255,0.4)',
                lineHeight: '1.75',
                letterSpacing: '-0.01em',
                fontStyle: 'italic',
              }}
            >
              "Nós não trabalhamos com qualquer empresa. Trabalhamos com quem entendeu que
              continuar no mesmo padrão tem um custo alto demais. Com quem quer parar de
              depender de sorte. Com quem quer construir algo sólido."
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                color: 'rgba(240,242,255,0.18)',
                marginTop: '1.25rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              — Manifesto RYVEM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
