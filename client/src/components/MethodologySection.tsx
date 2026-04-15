import { Database, Brain, ListChecks, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Conecta ao Seu ERP",
    description:
      "O Vetiva se integra ao sistema que você já usa. Sem migração, sem troca de software, sem treinamento da equipe. Em 48 horas, seus dados estão sendo analisados.",
    detail: "Compatível com os principais ERPs veterinários do Brasil",
    color: "#3B82F6",
  },
  {
    number: "02",
    icon: Brain,
    title: "Analisa Seus Dados",
    description:
      "Nossa inteligência processa o histórico completo da clínica: atendimentos, clientes, procedimentos, receitas. Identifica padrões invisíveis ao olho humano.",
    detail: "Análise de 100% do histórico da clínica, 24/7",
    color: "#8B5CF6",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Entrega Insights Acionáveis",
    description:
      "Você recebe um painel com as oportunidades priorizadas por valor financeiro. Não são relatórios — são decisões prontas para executar.",
    detail: "Dashboard atualizado em tempo real, acessível de qualquer dispositivo",
    color: "#00C896",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Sua Clínica Cresce",
    description:
      "Com as ações certas executadas no momento certo, sua receita cresce de forma previsível e sustentável. Sem contratar mais pessoas. Sem trabalhar mais horas.",
    detail: "Média de 34% de crescimento de receita nos primeiros 90 dias",
    color: "#F59E0B",
  },
];

export default function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="py-24 relative overflow-hidden"
      style={{ background: "#F5F7FA" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0,200,150,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="vetiva-badge w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
            Como Funciona
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
          >
            De Dados Parados a
            <br />
            <span style={{ color: "#00C896" }}>Dinheiro em Movimento.</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Um processo simples de 4 etapas que transforma os dados que você já tem em
            crescimento financeiro real e previsível.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5"
            style={{
              background:
                "linear-gradient(90deg, #3B82F6, #8B5CF6, #00C896, #F59E0B)",
              opacity: 0.3,
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center space-y-4">
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                    border: `2px solid ${step.color}40`,
                  }}
                >
                  <step.icon size={24} style={{ color: step.color }} />
                </div>

                {/* Number Badge */}
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                  style={{
                    background: step.color,
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {i + 1}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.description}
                  </p>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: step.color, fontFamily: "Inter, sans-serif" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div
          className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "white",
            border: "1px solid rgba(0,200,150,0.2)",
            boxShadow: "0 8px 32px rgba(0,200,150,0.08)",
          }}
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              className="text-xl font-black"
              style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
            >
              Pronto para ver o Vetiva em ação na sua clínica?
            </h3>
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              No diagnóstico gratuito, mostramos exatamente quanto você está deixando de faturar
              — com os dados reais da sua clínica.
            </p>
          </div>
          <a
            href="#diagnostico"
            className="btn-cta px-8 py-4 rounded-full text-sm font-bold whitespace-nowrap flex-shrink-0"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
