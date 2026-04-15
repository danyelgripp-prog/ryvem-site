export default function RyvemProcesso() {
  const etapas = [
    {
      num: '01',
      titulo: 'Diagnóstico do caos',
      descricao: 'Mapeamos onde estão os vazamentos de resultado no seu negócio. Processos frágeis, dependências críticas, decisões tomadas no escuro. Sem diagnóstico real, qualquer solução é chute.',
      detalhe: 'Análise completa em até 48h',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="url(#p1)" strokeWidth="1.5" />
          <path d="M11 7v4l3 2" stroke="url(#p1)" strokeWidth="1.5" strokeLinecap="round" />
          <defs><linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0055EE" /><stop offset="100%" stopColor="#5B21B6" /></linearGradient></defs>
        </svg>
      ),
    },
    {
      num: '02',
      titulo: 'Construção do sistema',
      descricao: 'Desenvolvemos a solução personalizada para o seu contexto — não um template genérico. Cada sistema é construído para eliminar a fonte específica de caos que identificamos.',
      detalhe: 'Implementação em até 7 dias',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="2" y="2" width="8" height="8" rx="2" stroke="url(#p2)" strokeWidth="1.5" />
          <rect x="12" y="2" width="8" height="8" rx="2" stroke="url(#p2)" strokeWidth="1.5" />
          <rect x="2" y="12" width="8" height="8" rx="2" stroke="url(#p2)" strokeWidth="1.5" />
          <rect x="12" y="12" width="8" height="8" rx="2" stroke="url(#p2)" strokeWidth="1.5" />
          <defs><linearGradient id="p2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0055EE" /><stop offset="100%" stopColor="#5B21B6" /></linearGradient></defs>
        </svg>
      ),
    },
    {
      num: '03',
      titulo: 'Ativação do fluxo',
      descricao: 'O sistema entra em operação. Acompanhamos os primeiros dias de perto, ajustamos o que for necessário e garantimos que o fluxo está funcionando como esperado.',
      detalhe: 'Suporte ativo nas primeiras 2 semanas',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M5 11l4 4 8-8" stroke="url(#p3)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="9" stroke="url(#p3)" strokeWidth="1.5" />
          <defs><linearGradient id="p3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0055EE" /><stop offset="100%" stopColor="#5B21B6" /></linearGradient></defs>
        </svg>
      ),
    },
    {
      num: '04',
      titulo: 'Resultado contínuo',
      descricao: 'O fluxo está estabelecido. Resultado deixa de ser eventual e passa a ser contínuo. Você acompanha tudo por relatórios e dashboards — sem depender de esforço pontual.',
      detalhe: 'Relatórios semanais de performance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 16l5-5 4 4 7-9" stroke="url(#p4)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <defs><linearGradient id="p4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0055EE" /><stop offset="100%" stopColor="#5B21B6" /></linearGradient></defs>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="processo"
      style={{
        background: '#060612',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Linha decorativa topo */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,85,238,0.3), transparent)',
      }} />

      <div aria-hidden style={{
        position: 'absolute', top: '20%', left: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,85,238,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
        position: 'relative', zIndex: 1,
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(3rem, 6vw, 5rem)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(0,85,238,0.08)', border: '1px solid rgba(0,85,238,0.18)',
            borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.75rem',
          }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5B8FFF', fontFamily: 'Inter, sans-serif' }}>
              Como funciona
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.875rem, 4vw, 3.25rem)',
            fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.035em',
            color: '#F0F2FF', marginBottom: '1.25rem',
          }}>
            Do caos ao fluxo{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              em 4 etapas.
            </span>
          </h2>

          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(240,242,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
            Não começamos pela tecnologia. Começamos pelo problema.
            Só depois construímos a solução que faz sentido para o seu contexto.
          </p>
        </div>

        {/* Timeline de etapas */}
        <div style={{ position: 'relative' }}>
          {/* Linha vertical conectora */}
          <div aria-hidden style={{
            position: 'absolute',
            left: 'clamp(1.25rem, 4vw, 2.5rem)',
            top: '2.5rem',
            bottom: '2.5rem',
            width: '1px',
            background: 'linear-gradient(180deg, #0055EE, #5B21B6)',
            opacity: 0.2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {etapas.map((e, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'clamp(1.25rem, 3vw, 2.5rem)',
                  alignItems: 'flex-start',
                }}
              >
                {/* Número + ícone */}
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: '52px', height: '52px',
                    background: 'rgba(0,85,238,0.1)',
                    border: '1px solid rgba(0,85,238,0.2)',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', zIndex: 1,
                    flexShrink: 0,
                  }}>
                    {e.icon}
                  </div>
                </div>

                {/* Conteúdo */}
                <div style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(0,85,238,0.25)';
                    el.style.background = 'rgba(0,85,238,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                    el.style.background = 'rgba(255,255,255,0.025)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <span style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.1em',
                        color: 'rgba(0,85,238,0.5)',
                      }}>
                        {e.num}
                      </span>
                      <h3 style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: 'clamp(1rem, 1.75vw, 1.25rem)',
                        fontWeight: 700, letterSpacing: '-0.025em',
                        color: '#F0F2FF', lineHeight: 1.2,
                      }}>
                        {e.titulo}
                      </h3>
                    </div>
                    <span style={{
                      fontSize: '0.6875rem', fontWeight: 600,
                      color: 'rgba(240,242,255,0.4)', fontFamily: 'Inter, sans-serif',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '100px', padding: '0.25rem 0.625rem',
                      whiteSpace: 'nowrap',
                    }}>
                      {e.detalhe}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.9375rem', lineHeight: 1.7,
                    color: 'rgba(240,242,255,0.5)', fontFamily: 'Inter, sans-serif',
                  }}>
                    {e.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
