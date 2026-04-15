import { useEffect, useState } from 'react';

// ============================================================
// COPY 100% baseado nos documentos fornecidos pelo cliente
// Fonte: Pasted_content.txt — Manifesto RYVEM
// Fonte: RYVEM_DNA_Naming.md — Etimologia e posicionamento
// NENHUM dado foi inventado neste componente
// ============================================================

export default function RyvemHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="sobre"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: `
          radial-gradient(ellipse at 12% 60%, rgba(0,85,238,0.13) 0%, transparent 55%),
          radial-gradient(ellipse at 88% 15%, rgba(91,33,182,0.09) 0%, transparent 50%),
          #060612
        `,
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid de fundo */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'center',
        }}>

          {/* Coluna esquerda — Copy */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            {/* Badge — etimologia do nome, fornecida no DNA */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(0,85,238,0.1)', border: '1px solid rgba(0,85,238,0.22)',
              borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '2rem',
            }}>
              <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                <path d="M16 28V16M16 16L8 8M16 16L24 8" stroke="#5B8FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L28 8L22 12" stroke="#7C6FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5B8FFF', fontFamily: 'Inter, sans-serif' }}>
                RYVEM — fluxo que retorna
              </span>
            </div>

            {/* Headline — copy direto do Manifesto */}
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              color: '#F0F2FF',
              marginBottom: '1.75rem',
            }}>
              O fluxo{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                que não para.
              </span>
              <br />
              O resultado{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                que retorna.
              </span>
            </h1>

            {/* Subtítulo — copy do Manifesto */}
            <p style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: 1.75,
              color: 'rgba(240,242,255,0.55)',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '2.5rem',
              maxWidth: '500px',
            }}>
              Diagnóstico profundo. Solução construída para o seu negócio.{' '}
              <strong style={{ color: 'rgba(240,242,255,0.85)', fontWeight: 600 }}>Não adaptamos ferramentas genéricas</strong>{' '}
              — construímos o que o seu negócio precisa.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center', marginBottom: '3rem' }}>
              <a
                href="https://wa.me/5522997178962?text=Quero%20estruturar%20meu%20fluxo%20de%20resultado"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'linear-gradient(135deg, #0055EE, #5B21B6)',
                  color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: '0.9375rem', padding: '0.875rem 1.75rem',
                  borderRadius: '8px', textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Quero um diagnóstico gratuito
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#processo"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'transparent', color: 'rgba(240,242,255,0.5)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.9375rem',
                  padding: '0.875rem 1.5rem', borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,85,238,0.4)';
                  e.currentTarget.style.color = '#F0F2FF';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'rgba(240,242,255,0.5)';
                }}
              >
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Coluna direita — Diagrama dos 4 fluxos RYVEM */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}>
            <FluxoDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

// Diagrama dos 4 fluxos — copy 100% do DNA RYVEM
// "fluxo de oportunidades, fluxo de processos, fluxo de execução, fluxo de resultado"
function FluxoDiagram() {
  const fluxos = [
    {
      titulo: 'Prospecção estruturada',
      descricao: 'Geração previsível de oportunidades comerciais',
      cor: '#0055EE',
    },
    {
      titulo: 'Fluxo de processos',
      descricao: 'Operação que funciona sem depender de esforço',
      cor: '#2B6FEF',
    },
    {
      titulo: 'Fluxo de execução',
      descricao: 'Time alinhado, entrega consistente',
      cor: '#5B21B6',
    },
    {
      titulo: 'Fluxo de resultado',
      descricao: 'Crescimento que se repete — não picos',
      cor: '#7C3AED',
    },
  ];

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '20px',
      padding: 'clamp(1.5rem, 3vw, 2.25rem)',
    }}>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.6875rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(240,242,255,0.3)',
        marginBottom: '1.5rem',
      }}>
        O que construímos
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {fluxos.map((f, i) => (
          <div key={i}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.875rem 0',
            }}>
              {/* Ícone */}
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: `${f.cor}15`,
                border: `1px solid ${f.cor}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={f.cor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Texto */}
              <div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#F0F2FF',
                  marginBottom: '0.125rem',
                }}>
                  {f.titulo}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  color: 'rgba(240,242,255,0.4)',
                }}>
                  {f.descricao}
                </p>
              </div>
            </div>

            {/* Conector */}
            {i < fluxos.length - 1 && (
              <div style={{
                marginLeft: '20px',
                width: '1px',
                height: '12px',
                background: `linear-gradient(${f.cor}60, ${fluxos[i + 1].cor}60)`,
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Resultado — copy do Manifesto */}
      <div style={{
        marginTop: '1.5rem',
        padding: '1rem 1.25rem',
        background: 'linear-gradient(135deg, rgba(0,85,238,0.08), rgba(91,33,182,0.08))',
        border: '1px solid rgba(0,85,238,0.18)',
        borderRadius: '10px',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'rgba(240,242,255,0.85)',
          lineHeight: 1.5,
        }}>
          "Crescimento não pode depender de picos. Precisa de continuidade."
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.75rem',
          color: 'rgba(240,242,255,0.3)',
          marginTop: '0.375rem',
        }}>
          — Manifesto RYVEM
        </p>
      </div>
    </div>
  );
}
