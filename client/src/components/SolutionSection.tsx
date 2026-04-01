import { Brain, Heart, BarChart3 } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: <Brain size={24} />,
    title: "DNA da Clínica",
    description: "Aprende como sua clínica fala, quais serviços você oferece, quais médicos estão disponíveis e quanto custa cada procedimento. Atende cada tutor exatamente como um funcionário treinado por você.",
    features: ["Tom e linguagem da sua clínica", "Tabela de preços e serviços", "Escala médica e horários", "Regras específicas do seu negócio"],
  },
  {
    number: "02",
    icon: <Heart size={24} />,
    title: "Interesse Genuíno",
    description: "Não tenta vender. Acolhe. Detecta o estado emocional do tutor e adapta o tom. Quando o tutor se sente cuidado, ele agenda. E volta.",
    features: ["Psicologia conversacional integrada", "Detecta frustração e objeção", "Adapta tom ao estado emocional", "Follow-up automático inteligente"],
  },
  {
    number: "03",
    icon: <BarChart3 size={24} />,
    title: "Inteligência Completa",
    description: "CRM integrado, Kanban, alertas de frustração e objeção, NPS automático, relatório diário no seu WhatsApp. Você acompanha tudo sem precisar estar na clínica.",
    features: ["Relatório diário às 8h no WhatsApp", "NPS automático pós-atendimento", "Alertas em tempo real", "Auditoria de qualidade diária"],
  },
];

export default function SolutionSection() {
  return (
    <section id="solucao" className="py-24" style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #0f2847 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
            A Solução
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Não é Mais Um Robô.<br />
            <span style={{ color: "#00C896" }}>É Um Membro da Sua Equipe.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            A Maya aprende o DNA da sua clínica e atende cada tutor como se fosse sua melhor recepcionista — 24 horas por dia, 7 dias por semana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="rounded-2xl p-8 border border-white/10 hover:border-[#00C896]/30 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-black leading-none" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif", opacity: 0.3 }}>{pillar.number}</div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#00C896]" style={{ background: "rgba(0,200,150,0.15)" }}>{pillar.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>{pillar.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-white/70 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm italic" style={{ fontFamily: "Inter, sans-serif" }}>
            "O ERP registra o passado. O Vetiva decide o futuro."
          </p>
        </div>
      </div>
    </section>
  );
}
