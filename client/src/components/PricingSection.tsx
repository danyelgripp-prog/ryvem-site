import { Check, MessageCircle } from "lucide-react";

const WA_AGENT = "https://wa.me/5522997178962?text=Quero%20come%C3%A7ar%20meu%20diagn%C3%B3stico%20gratuito%20RYVEM%20VET%20AGENTE";
const WA_DIRETOR = "https://wa.me/5522997178962?text=Quero%20solicitar%20diagn%C3%B3stico%20RYVEM%20VET%20DIRETOR";

const agentFeatures = [
  "Atendimento profissional 24/7 via WhatsApp",
  "Super agente com DNA da clínica",
  "CRM + Kanban",
  "Agenda Google integrada",
  "Pipeline de follow-up",
  "Configuração completa + onboarding",
  "Suporte especializado",
];

const diretorFeatures = [
  "Tudo do RYVEM VET AGENTE",
  "Diagnóstico de Receita Oculta",
  "Motor de Campanhas Autônomas",
  "Dashboard Executivo",
  "Auditoria NPS Ryvem",
  "Análise de viabilidade de integração ERP",
  "3 funcionalidades sob medida a cada 6 meses",
  "Linha direta com fundador",
];

export default function PricingSection() {
  return (
    <section id="produtos" className="py-24" style={{ background: "#0D1F3C" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
            Planos e Preços
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black text-white leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Dois planos. Peso visual igual.<br />
            <span style={{ color: "#00C896" }}>Você escolhe pelo que sua clínica precisa.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            O DIRETOR pode ser contratado direto desde o dia 1 — não é um upgrade obrigatório.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* RYVEM VET AGENTE */}
          <div className="rounded-3xl p-8 border border-white/10 relative flex flex-col" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="mb-6">
              <p className="text-xs font-semibold text-[#00C896] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                Para clínicas com atendimento bagunçado
              </p>
              <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                RYVEM VET AGENTE
              </h3>
            </div>

            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  R$ 797
                </span>
                <span className="text-white/50 text-sm mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  /mês · semestral
                </span>
              </div>
              <p className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                ou R$ 997/mês no plano mensal
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {agentFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,200,150,0.15)" }}>
                    <Check size={11} style={{ color: "#00C896" }} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-6 p-4 rounded-xl border border-[#00C896]/20" style={{ background: "rgba(0,200,150,0.06)" }}>
              <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong className="text-white">Garantia:</strong> Em 60 dias, sua clínica responde tutor em menos de 10 segundos, 24h por dia — ou cancelamos seu plano e devolvemos cada centavo pago.
              </p>
            </div>

            <a
              href={WA_AGENT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[#0D1F3C] transition-all hover:brightness-110"
              style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
            >
              <MessageCircle size={18} />
              Começar diagnóstico gratuito
            </a>
          </div>

          {/* RYVEM VET DIRETOR */}
          <div
            className="rounded-3xl p-8 border border-[#00C896]/30 relative overflow-hidden flex flex-col"
            style={{ background: "rgba(0,200,150,0.06)" }}
          >
            <div className="mb-6">
              <p className="text-xs font-semibold text-[#00C896] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                Para clínicas com múltiplas dores simultâneas
              </p>
              <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                RYVEM VET DIRETOR
              </h3>
            </div>

            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  R$ 1.497
                </span>
                <span className="text-white/50 text-sm mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  /mês · semestral
                </span>
              </div>
              <p className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                ou R$ 1.997/mês no plano mensal
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {diretorFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,200,150,0.15)" }}>
                    <Check size={11} style={{ color: "#00C896" }} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-6 p-4 rounded-xl border border-[#00C896]/20" style={{ background: "rgba(0,200,150,0.06)" }}>
              <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong className="text-white">Garantia:</strong> Em 90 dias, sua clínica recupera pelo menos R$ 5.000 em receita atribuída ao sistema, rastreável no painel — ou trabalhamos sem custo adicional até atingir.
              </p>
            </div>

            <a
              href={WA_DIRETOR}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white border border-[#00C896]/40 hover:bg-[#00C896]/10 transition-all"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <MessageCircle size={18} />
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
