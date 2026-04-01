import { TrendingUp, DollarSign, Users, Calendar } from "lucide-react";

const LOGO_DARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/vetiva_logo_dark_37189109.png";

const cases = [
  {
    clinic: "Clínica VetCare",
    location: "São Paulo, SP",
    size: "Clínica de médio porte",
    result: "R$ 34.200",
    metric: "em receita oculta identificada",
    detail:
      "47 clientes inativos há mais de 90 dias foram reativados. 23 procedimentos preventivos agendados em uma única semana.",
    period: "Primeiros 30 dias",
    icon: DollarSign,
    color: "#00C896",
  },
  {
    clinic: "Hospital Veterinário PetVida",
    location: "Belo Horizonte, MG",
    size: "Hospital veterinário",
    result: "+41%",
    metric: "de crescimento de faturamento",
    detail:
      "Identificação dos 20% de procedimentos que geravam 80% da receita. Foco estratégico triplicou a margem.",
    period: "Em 90 dias",
    icon: TrendingUp,
    color: "#3B82F6",
  },
  {
    clinic: "Clínica Animal Plus",
    location: "Curitiba, PR",
    size: "Clínica especializada",
    result: "R$ 18.900",
    metric: "recuperados de clientes inativos",
    detail:
      "Lista de 89 clientes que não retornavam há 6 meses. Campanha de reativação gerou 34 consultas em 2 semanas.",
    period: "Em 15 dias",
    icon: Users,
    color: "#8B5CF6",
  },
  {
    clinic: "PetCenter Veterinária",
    location: "Porto Alegre, RS",
    size: "Rede de clínicas",
    result: "R$ 52.000",
    metric: "de receita previsível adicionada",
    detail:
      "Planos preventivos estruturados com base nos dados de comportamento dos clientes. Receita recorrente criada do zero.",
    period: "Em 60 dias",
    icon: Calendar,
    color: "#F59E0B",
  },
  {
    clinic: "Clínica VetSul",
    location: "Florianópolis, SC",
    size: "Clínica de pequeno porte",
    result: "12h/sem",
    metric: "de gestão eliminadas",
    detail:
      "O veterinário gestor voltou a atender em tempo integral. A equipe passou a executar as ações automaticamente.",
    period: "Após implementação",
    icon: TrendingUp,
    color: "#EF4444",
  },
  {
    clinic: "Hospital VetNorte",
    location: "Manaus, AM",
    size: "Hospital veterinário",
    result: "R$ 28.700",
    metric: "em procedimentos de alta margem",
    detail:
      "Análise revelou que cirurgias eletivas estavam subofertadas. Agenda otimizada aumentou ticket médio em 67%.",
    period: "Em 45 dias",
    icon: DollarSign,
    color: "#06B6D4",
  },
];

export default function ResultsSection() {
  return (
    <section
      id="resultados"
      className="py-24"
      style={{ background: "white" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="flex justify-center">
            <img
              src={LOGO_DARK_URL}
              alt="Vetiva"
              className="h-10 w-auto object-contain"
              style={{ maxWidth: "160px" }}
            />
          </div>
          <div className="vetiva-badge w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
            Resultados Reais
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
          >
            Clínicas Que Decidiram
            <br />
            <span style={{ color: "#00C896" }}>Ver os Números de Verdade.</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Esses resultados foram gerados com os dados reais de cada clínica. Sem fórmulas mágicas.
            Só inteligência aplicada ao que já existia.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="vetiva-card p-6 space-y-5 relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: c.color }}
              />

              {/* Clinic Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="font-bold text-base"
                    style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                  >
                    {c.clinic}
                  </h3>
                  <p
                    className="text-xs text-gray-500 mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {c.location} · {c.size}
                  </p>
                </div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}15` }}
                >
                  <c.icon size={16} style={{ color: c.color }} />
                </div>
              </div>

              {/* Result */}
              <div
                className="rounded-xl p-4 space-y-1"
                style={{ background: `${c.color}08`, border: `1px solid ${c.color}20` }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ color: c.color, fontFamily: "Montserrat, sans-serif" }}
                >
                  {c.result}
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#0D1F3C", fontFamily: "Inter, sans-serif" }}
                >
                  {c.metric}
                </p>
              </div>

              {/* Detail */}
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {c.detail}
              </p>

              {/* Period Badge */}
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: `${c.color}12`,
                    color: c.color,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {c.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div
          className="mt-16 rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #0D1F3C 0%, #1a3a6e 100%)",
          }}
        >
          <p
            className="text-center text-white/60 text-sm uppercase tracking-widest mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Média Consolidada dos Resultados
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "R$ 34K+", label: "Receita oculta média identificada" },
              { value: "34%", label: "Crescimento médio de faturamento" },
              { value: "30 dias", label: "Para os primeiros resultados" },
              { value: "100%", label: "Baseado nos seus dados reais" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div
                  className="text-3xl font-black"
                  style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}
                >
                  {stat.value}
                </div>
                <p
                  className="text-white/60 text-xs leading-snug"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
