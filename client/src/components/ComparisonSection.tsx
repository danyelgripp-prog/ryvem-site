import { Check, X } from "lucide-react";

const rows = [
  { feature: "Aprende o DNA da sua clínica", generic: false, vetiva: true },
  { feature: "Tom de voz personalizado por clínica", generic: false, vetiva: true },
  { feature: "Tabela de preços e serviços integrada", generic: false, vetiva: true },
  { feature: "Agenda consultas automaticamente", generic: false, vetiva: true },
  { feature: "Detecta frustração e objeção do tutor", generic: false, vetiva: true },
  { feature: "Relatório diário no WhatsApp às 8h", generic: false, vetiva: true },
  { feature: "NPS automático pós-atendimento", generic: false, vetiva: true },
  { feature: "Suporte e ajustes contínuos", generic: false, vetiva: true },
  { feature: "Responde perguntas básicas", generic: true, vetiva: true },
  { feature: "Disponível 24 horas por dia, 7 dias", generic: true, vetiva: true },
];

export default function ComparisonSection() {
  return (
    <section id="comparativo" className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C] inline-block" />
            Comparativo
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0D1F3C] leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Robô Genérico vs.{" "}
            <span style={{ color: "#00C896" }}>Vetiva com DNA da Sua Clínica</span>
          </h2>
          <p
            className="text-lg text-[#0D1F3C]/60 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Qualquer chatbot responde. Só a Maya resolve — porque ela conhece sua clínica.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-[#0D1F3C]/8 shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-[#0D1F3C]/8">
            <div className="p-6 col-span-1">
              <p
                className="text-sm font-semibold text-[#0D1F3C]/50 uppercase tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Funcionalidade
              </p>
            </div>
            <div className="p-6 text-center border-l border-[#0D1F3C]/8">
              <p className="text-sm font-bold text-[#0D1F3C]/60" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Robô Genérico
              </p>
              <p className="text-xs text-[#0D1F3C]/40 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                Chatbot comum
              </p>
            </div>
            <div
              className="p-6 text-center border-l border-[#0D1F3C]/8"
              style={{ background: "rgba(0,200,150,0.06)" }}
            >
              <p className="text-sm font-bold" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>
                Vetiva
              </p>
              <p className="text-xs text-[#0D1F3C]/40 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                IA com DNA da clínica
              </p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-b border-[#0D1F3C]/6 last:border-0 ${
                i % 2 === 0 ? "" : "bg-[#F5F7FA]/60"
              }`}
            >
              <div className="p-4 px-6 flex items-center">
                <span className="text-sm text-[#0D1F3C]/80" style={{ fontFamily: "Inter, sans-serif" }}>
                  {row.feature}
                </span>
              </div>
              <div className="p-4 flex items-center justify-center border-l border-[#0D1F3C]/6">
                {row.generic ? (
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check size={14} className="text-gray-400" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                    <X size={14} className="text-red-400" />
                  </div>
                )}
              </div>
              <div
                className="p-4 flex items-center justify-center border-l border-[#0D1F3C]/6"
                style={{ background: "rgba(0,200,150,0.03)" }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,200,150,0.15)" }}
                >
                  <Check size={14} style={{ color: "#00C896" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#0D1F3C]/40 text-sm mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Robôs genéricos respondem. A Maya resolve.
        </p>
      </div>
    </section>
  );
}
