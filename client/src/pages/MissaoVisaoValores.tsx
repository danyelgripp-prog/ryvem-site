import { useEffect, useState } from 'react';
import RyvemNavbar from '../components/ryvem/RyvemNavbar';
import RyvemFooter from '../components/ryvem/RyvemFooter';

// ============================================================
// COPY 100% literal dos documentos fornecidos pelo cliente
// Fonte: Pasted_content.txt — Missão, Visão, Valores e Manifesto RYVEM
// ============================================================

const valores = [
  {
    numero: '01',
    titulo: 'Resultado é compromisso',
    corpo: 'Agimos como donos em cada projeto. Não nos guiamos por tarefas, mas por impacto. Se não gera produtividade, lucro ou eficiência, não faz sentido. Resultado não é consequência. É construção.',
    cor: '#0055EE',
  },
  {
    numero: '02',
    titulo: 'Ética é inegociável',
    corpo: 'Coerência entre o que falamos e o que fazemos. Nos comunicamos com clareza, assumimos responsabilidade pelo que está sob nosso controle e tomamos decisões com visão de dono. Fazer o certo não é diferencial. É o mínimo.',
    cor: '#1A6AFF',
  },
  {
    numero: '03',
    titulo: 'Transparência constrói confiança',
    corpo: 'A verdade sempre vem primeiro. Não omitimos, não distorcemos, não escondemos. Criamos relações baseadas em clareza, maturidade e alinhamento real. Sem transparência, não existe evolução.',
    cor: '#3B5FEF',
  },
  {
    numero: '04',
    titulo: 'O sucesso do cliente é a entrega',
    corpo: 'Não medimos esforços. Não transferimos responsabilidade. Enquanto o resultado não for atingido, o trabalho não está concluído.',
    cor: '#5B21B6',
  },
  {
    numero: '05',
    titulo: 'Ser mais interessante do que interessado',
    corpo: 'Não buscamos convencer. Buscamos elevar o nível da conversa. Geramos valor antes de qualquer troca. Provocamos, direcionamos e mostramos o caminho. Quem entende profundamente o problema, naturalmente se torna a solução.',
    cor: '#7C3AED',
  },
];

const s: Record<string, React.CSSProperties> = {
  page: {
    background: '#060612',
    minHeight: '100vh',
    color: '#F0F2FF',
    fontFamily: 'Inter, sans-serif',
  },
  hero: {
    paddingTop: '120px',
    paddingBottom: '80px',
    position: 'relative',
    overflow: 'hidden',
    background: `
      radial-gradient(ellipse at 20% 40%, rgba(0,85,238,0.12) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 20%, rgba(91,33,182,0.09) 0%, transparent 50%),
      #060612
    `,
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(0,85,238,0.1)',
    border: '1px solid rgba(0,85,238,0.22)',
    borderRadius: '100px',
    padding: '0.35rem 0.875rem',
    marginBottom: '2rem',
  },
  eyebrowText: {
    fontSize: '0.6875rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#5B8FFF',
  },
  heroTitle: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: '-0.04em',
    color: '#F0F2FF',
    marginBottom: '1.5rem',
  },
  heroSub: {
    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
    lineHeight: 1.75,
    color: 'rgba(240,242,255,0.5)',
    maxWidth: '560px',
  },
  divider: {
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(0,85,238,0.3), transparent)',
    margin: '0',
  },
  section: {
    padding: 'clamp(4rem, 8vw, 7rem) 0',
  },
  sectionLabel: {
    fontSize: '0.6875rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgba(240,242,255,0.3)',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    color: '#F0F2FF',
    marginBottom: '2rem',
  },
  bodyText: {
    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
    lineHeight: 1.8,
    color: 'rgba(240,242,255,0.6)',
    maxWidth: '680px',
  },
};

export default function MissaoVisaoValores() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={s.page}>
      <RyvemNavbar />

      {/* Hero da página */}
      <div style={s.hero}>
        <div style={s.container}>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            <div style={s.eyebrow}>
              <svg width="10" height="10" viewBox="0 0 32 32" fill="none">
                <path d="M16 28V16M16 16L8 8M16 16L24 8" stroke="#5B8FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L28 8L22 12" stroke="#7C6FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={s.eyebrowText}>A alma da RYVEM</span>
            </div>

            <h1 style={s.heroTitle}>
              O que nos move.<br />
              <span style={{
                background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                O que nos define.
              </span>
            </h1>

            <p style={s.heroSub}>
              Missão, Visão e Valores não são palavras em uma parede. São os princípios que guiam cada decisão, cada entrega e cada relação que construímos.
            </p>
          </div>
        </div>
      </div>

      <div style={s.divider} />

      {/* MISSÃO */}
      <div id="missao" style={{ ...s.section, background: '#060612' }}>
        <div style={s.container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 6rem)',
            alignItems: 'center',
          }}>
            {/* Coluna esquerda — label + título */}
            <div>
              <p style={s.sectionLabel}>Missão</p>
              <h2 style={{ ...s.sectionTitle, maxWidth: '420px' }}>
                Transformar o caos operacional em{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  fluxo previsível de resultado.
                </span>
              </h2>
            </div>

            {/* Coluna direita — copy literal */}
            <div>
              <div style={{
                borderLeft: '2px solid rgba(0,85,238,0.35)',
                paddingLeft: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                <p style={s.bodyText}>
                  A RYVEM existe para transformar o caos operacional em fluxo previsível de resultado. Fazemos isso construindo soluções inteligentes, personalizadas e orientadas ao que realmente importa — eliminando desperdícios, organizando processos e reduzindo dependências.
                </p>
                <p style={{ ...s.bodyText, color: 'rgba(240,242,255,0.45)' }}>
                  Não entregamos tecnologia. Entregamos estrutura, clareza e direção.
                </p>
                <p style={{ ...s.bodyText, color: 'rgba(240,242,255,0.45)' }}>
                  Entramos em negócios para simplificar, organizar e potencializar aquilo que já existe — criando sistemas que sustentam crescimento contínuo, previsível e lucrativo.
                </p>
                <p style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  fontWeight: 600,
                  color: '#F0F2FF',
                  lineHeight: 1.5,
                }}>
                  Porque resultado não pode depender de esforço pontual.<br />
                  Resultado precisa fluir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={s.divider} />

      {/* VISÃO */}
      <div id="visao" style={{
        ...s.section,
        background: `
          radial-gradient(ellipse at 70% 50%, rgba(91,33,182,0.1) 0%, transparent 60%),
          #070714
        `,
      }}>
        <div style={s.container}>
          <p style={s.sectionLabel}>Visão</p>

          {/* Headline da Visão */}
          <div style={{
            maxWidth: '820px',
            marginBottom: '3rem',
          }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              color: '#F0F2FF',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}>
              1.000 empresas libertadas do caos operacional{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                até abril de 2028.
              </span>
            </h2>

            <p style={s.bodyText}>
              Em um mundo cada vez mais movido pela inteligência artificial, a RYVEM assume o papel de construir fluxos previsíveis de resultado — libertando negócios do caos operacional e guiando-os para um novo padrão de produtividade, lucratividade e evolução.
            </p>
          </div>

          {/* 3 pilares da Visão */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { titulo: 'Empresas mais organizadas', descricao: 'Estrutura que sustenta crescimento sem depender de esforço constante.' },
              { titulo: 'Operações mais inteligentes', descricao: 'Processos que funcionam, independente de quem os executa.' },
              { titulo: 'Trabalho sobre progresso', descricao: 'Ambientes onde o trabalho deixa de ser sobre pressão e passa a ser sobre avanço.' },
            ].map((pilar, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '1.75rem',
              }}>
                <div style={{
                  width: '32px',
                  height: '2px',
                  background: `linear-gradient(90deg, #0055EE, #5B21B6)`,
                  marginBottom: '1.25rem',
                  borderRadius: '2px',
                }} />
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#F0F2FF',
                  marginBottom: '0.625rem',
                }}>
                  {pilar.titulo}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: 'rgba(240,242,255,0.45)',
                }}>
                  {pilar.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={s.divider} />

      {/* VALORES */}
      <div id="valores" style={{ ...s.section, background: '#060612' }}>
        <div style={s.container}>
          <p style={s.sectionLabel}>Valores</p>
          <h2 style={{ ...s.sectionTitle, marginBottom: '3rem' }}>
            Os princípios que guiam{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3377FF 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              cada decisão.
            </span>
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}>
            {valores.map((v, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'clamp(1.5rem, 3vw, 3rem)',
                padding: 'clamp(1.75rem, 3vw, 2.5rem) 0',
                borderBottom: i < valores.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                alignItems: 'start',
              }}>
                {/* Número */}
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  background: `linear-gradient(135deg, ${v.cor}60, ${v.cor}20)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  paddingTop: '0.25rem',
                  minWidth: 'clamp(2.5rem, 5vw, 4rem)',
                }}>
                  {v.numero}
                </div>

                {/* Conteúdo */}
                <div>
                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    fontWeight: 600,
                    color: '#F0F2FF',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em',
                  }}>
                    {v.titulo}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(0.875rem, 1.25vw, 1rem)',
                    lineHeight: 1.75,
                    color: 'rgba(240,242,255,0.5)',
                    maxWidth: '680px',
                  }}>
                    {v.corpo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={s.divider} />

      {/* MANIFESTO — trecho final */}
      <div style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: `
          radial-gradient(ellipse at 50% 50%, rgba(0,85,238,0.08) 0%, transparent 70%),
          #060612
        `,
      }}>
        <div style={{ ...s.container, textAlign: 'center' }}>
          <p style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(240,242,255,0.3)',
            marginBottom: '2.5rem',
          }}>
            Manifesto
          </p>

          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            {[
              'Enquanto muitos tentam vender mais, nós estruturamos melhor.',
              'Enquanto outros aumentam esforço, nós aumentamos eficiência.',
              'Enquanto o mercado busca atalhos, nós construímos base.',
            ].map((linha, i) => (
              <p key={i} style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: 600,
                lineHeight: 1.4,
                color: i === 0 ? '#F0F2FF' : `rgba(240,242,255,${0.75 - i * 0.2})`,
                letterSpacing: '-0.02em',
              }}>
                {linha}
              </p>
            ))}
          </div>

          <div style={{
            marginTop: '3.5rem',
            display: 'inline-flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: 'rgba(240,242,255,0.5)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '0.9375rem',
                padding: '0.875rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
              }}
            >
              ← Voltar ao site
            </a>
            <a
              href="https://wa.me/5522997178962?text=Quero%20um%20diagn%C3%B3stico%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #0055EE, #5B21B6)',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.9375rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Quero um diagnóstico gratuito →
            </a>
          </div>
        </div>
      </div>

      <RyvemFooter />
    </div>
  );
}
