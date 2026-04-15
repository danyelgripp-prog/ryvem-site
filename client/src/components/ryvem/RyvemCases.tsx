// ============================================================
// CASES REAIS — 3 projetos entregues em produção
// ============================================================

const cases = [
  {
    tag: 'Solução Customizada — Contabilidade',
    titulo: 'Inteligência comercial em 48h para escritório de contabilidade',
    descricao:
      'Escritório com CRM existente mas sem visibilidade real da operação. Time vendia de memória, leads de alto valor sem follow-up, pipeline zerado. Em 48h sem alterar o sistema, entregamos diagnóstico completo e painel em tempo real.',
    metricas: [
      { valor: 'R$62.749', label: 'Pipeline mapeado' },
      { valor: '57', label: 'Leads analisados' },
      { valor: '48h', label: 'Prazo de entrega' },
    ],
    cor: '#0055EE',
  },
  {
    tag: 'Solução Customizada — Indústria B2B',
    titulo: 'Agente comercial inteligente para indústria de embalagens',
    descricao:
      'Empresa com time de vendas operando sem padrão, contatos perdidos nos finais de semana e sem rastreabilidade do funil. Agente com DNA da empresa passou a atender, qualificar e registrar cada contato automaticamente.',
    metricas: [
      { valor: 'R$665k', label: 'Receita potencial mapeada' },
      { valor: '11.505', label: 'Contatos integrados' },
      { valor: '50 un.', label: 'Pedido mínimo gerenciado' },
    ],
    cor: '#5B21B6',
  },
  {
    tag: 'Vetiva — Clínica Veterinária',
    titulo: 'Atendimento inteligente 24/7 com DNA da clínica veterinária',
    descricao:
      'Clínica com 5.820 clientes ativos perdendo agendamentos fora do horário comercial. Implementamos atendimento inteligente 24h por 7 via WhatsApp, com linguagem e protocolos da própria clínica.',
    metricas: [
      { valor: '5.820', label: 'Clientes ativos' },
      { valor: '1.577', label: 'Oportunidades mapeadas' },
      { valor: '8.2', label: 'NPS interno' },
    ],
    cor: '#00A850',
  },
];

export default function RyvemCases() {
  return (
    <section
      id="resultados"
      style={{
        background: '#060612',
        padding: 'clamp(5rem, 10vw, 8rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Linha decorativa de topo */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,85,238,0.3), transparent)',
      }} />

      {/* Glow de fundo */}
      <div aria-hidden style={{
        position: 'absolute',
        bottom: '-10%', left: '-5%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,85,238,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header da seção */}
        <div style={{ maxWidth: '600px', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0055EE',
            marginBottom: '1rem',
          }}>
            Resultados
          </p>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#F0F2FF',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Estrutura que gera resultado real.
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: 'rgba(240,242,255,0.45)',
            lineHeight: 1.7,
          }}>
            Para a RYVEM, projeto entregue não é sucesso. Resultado previsível é.
          </p>
        </div>

        {/* Grid de cases */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}>
          {cases.map((c, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.025)',
              border: `1px solid ${c.cor}33`,
              borderRadius: '20px',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              {/* Linha de acento no topo */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: c.cor,
              }} />

              {/* Glow interno */}
              <div aria-hidden style={{
                position: 'absolute',
                top: '-40px', right: '-40px',
                width: '200px', height: '200px',
                background: `radial-gradient(circle, ${c.cor}12 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Tag */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                background: `${c.cor}1A`,
                border: `1px solid ${c.cor}33`,
                borderRadius: '100px',
                padding: '0.25rem 0.75rem',
                alignSelf: 'flex-start',
              }}>
                <div style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: c.cor,
                }} />
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  color: c.cor,
                }}>
                  {c.tag}
                </span>
              </div>

              {/* Título */}
              <h3 style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: '#F0F2FF',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
              }}>
                {c.titulo}
              </h3>

              {/* Descrição */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                color: 'rgba(240,242,255,0.55)',
                lineHeight: 1.7,
              }}>
                {c.descricao}
              </p>

              {/* Métricas */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                marginTop: 'auto',
              }}>
                {c.metricas.map((m, i) => (
                  <div key={i} style={{
                    background: `${c.cor}08`,
                    border: `1px solid ${c.cor}20`,
                    borderRadius: '12px',
                    padding: '1rem 0.75rem',
                    textAlign: 'center' as const,
                  }}>
                    <p style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                      fontWeight: 700,
                      color: c.cor,
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}>
                      {m.valor}
                    </p>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: 'rgba(240,242,255,0.4)',
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.05em',
                    }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
