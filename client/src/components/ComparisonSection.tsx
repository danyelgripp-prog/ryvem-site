import { Check, X } from "lucide-react";

const rows = [
  { feature: "Configurado com a tabela de preços da sua clínica", generic: false, vetiva: true },
  { feature: "Conhece a escala médica e horários reais", generic: false, vetiva: true },
  { feature: "Kanban nativo para monitorar atendimentos", generic: false, vetiva: true },
  { feature: "Escala para a equipe quando necessário", generic: false, vetiva: true },
  { feature: "Relatório diário de performance com dados reais", generic: false, vetiva: true },
  { feature: "Limites de autonomia definidos por você", generic: false, vetiva: true },
  { feature: "Treinado para triagem veterinária", generic: false, vetiva: true },
  { feature: "Responde perguntas básicas", generic: true, vetiva: true },
  { feature: "Disponível 24h por dia", generic: true, vetiva: true },
  { feature: "Integração com WhatsApp", generic: true, vetiva: true },
];

export default function ComparisonSection() {
  return (
    <section id="comparativo" className="bg-[#071810] py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Comparativo
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Chatbot genérico vs.{" "}
            <span className="text-[#00c977]">Agente Vetiva</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Qualquer chatbot responde. Só o Agente Vetiva responde com os dados da sua clínica — e você audita cada conversa.
          </p>
        </div>

        <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/8">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/8">
            <div className="p-5 px-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
                Funcionalidade
              </p>
            </div>
            <div className="p-5 text-center border-l border-white/8">
              <p className="text-sm font-bold text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>Chatbot Genérico</p>
              <p className="text-xs text-gray-600 mt-0.5">qualquer plataforma</p>
            </div>
            <div className="p-5 text-center border-l border-white/8 bg-[#00c977]/5">
              <p className="text-sm font-bold text-[#00c977]" style={{ fontFamily: "Montserrat, sans-serif" }}>Agente Vetiva</p>
              <p className="text-xs text-gray-500 mt-0.5">especializado em veterinária</p>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${i % 2 === 1 ? "bg-white/[0.015]" : ""}`}
            >
              <div className="p-4 px-6 flex items-center">
                <span className="text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                  {row.feature}
                </span>
              </div>
              <div className="p-4 flex items-center justify-center border-l border-white/5">
                {row.generic ? (
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                    <Check size={14} className="text-gray-500" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X size={14} className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="p-4 flex items-center justify-center border-l border-white/5 bg-[#00c977]/[0.03]">
                <div className="w-7 h-7 rounded-full bg-[#00c977]/15 flex items-center justify-center">
                  <Check size={14} className="text-[#00c977]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Chatbots genéricos respondem. O Agente Vetiva resolve — com os dados reais da sua clínica.
        </p>
      </div>
    </section>
  );
}
