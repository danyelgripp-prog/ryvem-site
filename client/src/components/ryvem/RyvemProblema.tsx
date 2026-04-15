export default function RyvemProblema() {
  const dores = [
    {
      num: '01',
      titulo: 'Meses bons. Meses ruins.',
      texto:
        'Você não sabe o que vai acontecer no próximo mês. Não porque o mercado é imprevisível — mas porque o negócio não tem estrutura para gerar resultado de forma consistente.',
    },
    {
      num: '02',
      titulo: 'Decisões tomadas no escuro.',
      texto:
        'Você reage ao que acontece, não ao que planeja. Sem dados, sem processos, sem previsibilidade. O negócio depende do seu esforço constante para não parar.',
    },
    {
      num: '03',
      titulo: 'Time sobrecarregado. Dono refém.',
      texto:
        'Cada problema exige você. Cada decisão passa por você. O negócio cresceu, mas a liberdade não veio junto. Você está preso dentro da operação que deveria te libertar.',
    },
    {
      num: '04',
      titulo: 'Crescimento que não escala.',
      texto:
        'Você já tentou contratar mais, trabalhar mais, vender mais. Mas sem estrutura, mais esforço só gera mais caos. O problema não é falta de trabalho — é ausência de sistema.',
    },
  ];

  return (
    <section
      id="sobre"
      style={{
        background: '#0A0A1A',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Linha de transição topo */}
      <div className="ryvem-glow-line" />

      <div className="container" style={{ paddingTop: '6rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '5rem' }}>
          <div className="ryvem-section-label" style={{ marginBottom: '1.5rem' }}>
            O diagnóstico
          </div>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.04em',
              color: '#F8F9FF',
              marginBottom: '1.25rem',
            }}
          >
            Empresas não quebram
            <br />
            por falta de{' '}
            <span className="ryvem-gradient-text">esforço.</span>
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              color: 'rgba(248,249,255,0.5)',
              lineHeight: '1.7',
              fontWeight: '400',
            }}
          >
            Quebram por falta de estrutura. Não é a quantidade de trabalho que limita o
            crescimento — é a ausência de um sistema que sustente esse crescimento.
          </p>
        </div>

        {/* Grid de dores — layout em mosaico */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {dores.map((d, i) => (
            <div
              key={i}
              style={{
                padding: '2.5rem 2rem',
                background: 'rgba(10,10,26,0.95)',
                position: 'relative',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,85,238,0.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(10,10,26,0.95)';
              }}
            >
              {/* Número decorativo de fundo */}
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '5rem',
                  fontWeight: '800',
                  letterSpacing: '-0.05em',
                  color: 'rgba(0,85,238,0.07)',
                  lineHeight: '1',
                  marginBottom: '-1.5rem',
                  userSelect: 'none',
                }}
              >
                {d.num}
              </div>

              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  color: '#F8F9FF',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.875rem',
                  lineHeight: '1.3',
                }}
              >
                {d.titulo}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: 'rgba(248,249,255,0.48)',
                  lineHeight: '1.65',
                  fontWeight: '400',
                }}
              >
                {d.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de transição */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2.5rem 3rem',
            background: 'linear-gradient(135deg, rgba(0,85,238,0.06) 0%, rgba(91,33,182,0.06) 100%)',
            border: '1px solid rgba(0,85,238,0.12)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
              fontWeight: '600',
              color: '#F8F9FF',
              letterSpacing: '-0.02em',
              lineHeight: '1.5',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Se o seu negócio ainda depende de esforço constante para gerar resultado,{' '}
            <span className="ryvem-gradient-text">você ainda está no caos.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
