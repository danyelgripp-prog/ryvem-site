// ============================================================
// COPY EXATO FORNECIDO PELO CLIENTE — NÃO ALTERAR
// Vetiva e Magic SDR são PRODUTOS DE PRATELEIRA da RYVEM
// ============================================================

export default function RyvemProdutos() {
  return (
    <section
      id="solucoes"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#070714',
        position: 'relative',
      }}
    >
      {/* Linha divisória sutil no topo */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,85,238,0.3), transparent)',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
      }}>

        {/* Cabeçalho */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '640px' }}>
          <p style={{
            fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase' as const, color: 'rgba(240,242,255,0.3)',
            marginBottom: '1rem', fontFamily: 'Inter, sans-serif',
          }}>
            Soluções segmentadas prontas para atuação
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 700, letterSpacing: '-0.03em',
            color: '#F0F2FF', lineHeight: 1.15, marginBottom: '1.25rem',
          }}>
            Conheça nossos{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              produtos.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '1.5rem',
        }}>

          {/* ─── VETIVA ─── */}
          <div style={{
            background: 'rgba(0,168,80,0.03)',
            border: '1px solid rgba(0,168,80,0.22)',
            borderRadius: '20px',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Glow verde */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '220px', height: '220px',
              background: 'radial-gradient(circle, rgba(0,168,80,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, color: '#00A850',
                background: 'rgba(0,168,80,0.1)', border: '1px solid rgba(0,168,80,0.25)',
                borderRadius: '100px', padding: '0.25rem 0.75rem', fontFamily: 'Inter, sans-serif',
              }}>
                Veterinário
              </span>
            </div>

            {/* Nome */}
            <div>
              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800, letterSpacing: '-0.03em',
                color: '#F0F2FF', marginBottom: '0.5rem',
              }}>
                VETIVA
              </h3>
              {/* Tagline — copy exato */}
              <p style={{
                fontSize: '1rem', fontWeight: 600,
                color: '#00C864',
                fontFamily: 'Inter, sans-serif', lineHeight: 1.4,
                marginBottom: '0.875rem',
              }}>
                Acelerador de resultados veterinários com o DNA da sua clínica.
              </p>
              {/* Descrição — copy exato */}
              <p style={{
                fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', lineHeight: 1.75,
                color: 'rgba(240,242,255,0.55)', fontFamily: 'Inter, sans-serif',
              }}>
                Atende, agenda e converte pelo WhatsApp 24h — enquanto você cuida dos animais.
                CRM, Kanban e integração com ERP Vetus.
              </p>
            </div>

            {/* Resultado real Fripet */}
            <div style={{
              background: 'rgba(0,168,80,0.05)', border: '1px solid rgba(0,168,80,0.12)',
              borderRadius: '12px', padding: '1.25rem',
            }}>
              <p style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase' as const, color: 'rgba(240,242,255,0.3)',
                marginBottom: '0.875rem', fontFamily: 'Inter, sans-serif',
              }}>
                Resultado real — Fripet Clínica Veterinária
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { numero: '232', label: 'tutores atendidos por mês' },
                  { numero: '7s', label: 'tempo médio de resposta' },
                  { numero: 'R$ 9.600', label: 'receita gerada por mês' },
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <p style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                      fontWeight: 700, color: '#00C864', letterSpacing: '-0.02em',
                    }}>
                      {stat.numero}
                    </p>
                    <p style={{
                      fontSize: '0.6875rem', lineHeight: 1.4,
                      color: 'rgba(240,242,255,0.4)', marginTop: '0.25rem',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA — copy exato */}
            <a
              href="https://vetiva.ryvem.com.br"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #00A850, #00C864)',
                color: '#fff', fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
                padding: '0.8125rem 1.5rem', borderRadius: '10px',
                alignSelf: 'flex-start', marginTop: 'auto',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
            >
              Conhecer Vetiva →
            </a>
          </div>

          {/* ─── MAGIC SDR ─── */}
          <div style={{
            background: 'rgba(91,33,182,0.03)',
            border: '1px solid rgba(91,33,182,0.22)',
            borderRadius: '20px',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Glow roxo */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '220px', height: '220px',
              background: 'radial-gradient(circle, rgba(91,33,182,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, color: '#9B6FEF',
                background: 'rgba(91,33,182,0.1)', border: '1px solid rgba(91,33,182,0.25)',
                borderRadius: '100px', padding: '0.25rem 0.75rem', fontFamily: 'Inter, sans-serif',
              }}>
                Prospecção B2B
              </span>
            </div>

            {/* Nome */}
            <div>
              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800, letterSpacing: '-0.03em',
                color: '#F0F2FF', marginBottom: '0.5rem',
              }}>
                MAGIC SDR
              </h3>
              {/* Tagline — copy exato */}
              <p style={{
                fontSize: '1rem', fontWeight: 600,
                color: '#A78BFA',
                fontFamily: 'Inter, sans-serif', lineHeight: 1.4,
                marginBottom: '0.875rem',
              }}>
                Solução para quem não aguenta mais pagar caro por lead desqualificado.
              </p>
              {/* Descrição — copy exato */}
              <p style={{
                fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', lineHeight: 1.75,
                color: 'rgba(240,242,255,0.55)', fontFamily: 'Inter, sans-serif',
              }}>
                Agente de prospecção autônomo que avalia a qualidade do atendimento digital
                de empresas. Gera diagnósticos profundos e relatórios de oportunidade
                comercial de leads qualificados por segmentação personalizada.
              </p>
            </div>

            {/* Features */}
            <div style={{
              background: 'rgba(91,33,182,0.05)', border: '1px solid rgba(91,33,182,0.12)',
              borderRadius: '12px', padding: '1.25rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              {[
                'Prospecção B2B autônoma',
                'Diagnóstico do atendimento digital',
                'Relatórios de oportunidade comercial',
                'Segmentação personalizada por nicho',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#7C3AED', flexShrink: 0,
                  }} />
                  <p style={{
                    fontSize: '0.875rem', color: 'rgba(240,242,255,0.6)',
                    lineHeight: 1.5, fontFamily: 'Inter, sans-serif',
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA — copy exato */}
            <a
              href="https://magicsdr.ryvem.com.br"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'transparent',
                border: '1.5px solid rgba(124,58,237,0.5)',
                color: '#A78BFA', fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
                padding: '0.8125rem 1.5rem', borderRadius: '10px',
                alignSelf: 'flex-start', marginTop: 'auto',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'rgba(124,58,237,0.1)';
                el.style.borderColor = 'rgba(124,58,237,0.8)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'transparent';
                el.style.borderColor = 'rgba(124,58,237,0.5)';
              }}
            >
              Saiba mais →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
