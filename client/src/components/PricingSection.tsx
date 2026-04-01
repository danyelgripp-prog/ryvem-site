import { Check, MessageCircle, ArrowRight } from "lucide-react";

const WA_AGENT = "https://wa.me/5522997178962?text=Quero%20contratar%20o%20Vetiva%20Agent";
const WA_INTELLIGENCE = "https://wa.me/5522997178962?text=Quero%20saber%20mais%20sobre%20o%20Vetiva%20Intelligence";

const agentFeatures = [
  "Maya com DNA da sua clínica",
  "Atendimento 24/7 pelo WhatsApp",
  "Agendamento automático de consultas",
  "Follow-up de vacinas e retornos",
  "Relatório diário às 8h no WhatsApp",
  "NPS automático pós-atendimento",
  "Painel de controle e histórico",
  "Suporte e ajustes contínuos",
  "Onboarding em até 72 horas",
];

const intelligenceFeatures = [
  "Tudo do Vetiva Agent",
  "Integração com seu ERP",
  "Inteligência de receita avançada",
  "Kanban e CRM veterinário",
  "Alertas de churn e oportunidade",
  "Análise preditiva de faturamento",
  "Relatórios executivos semanais",
  "Implementação dedicada",
  "Suporte prioritário",
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
            Escolha o Nível Certo<br />
            <span style={{ color: "#00C896" }}>para a Sua Clínica</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Comece com o Vetiva Agent e escale para o Intelligence quando quiser inteligência completa com ERP.
          </p>
        </div>

        {/* Price Anchor */}
        <div
          className="max-w-2xl mx-auto mb-10 rounded-2xl p-5 border border-white/10 text-center"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <p className="text-white/60 text-sm mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
            Soluções fragmentadas (recepcionista + chatbot + CRM + relatórios):
          </p>
          <div className="flex items-center justify-center gap-4">
            <span
              className="text-2xl font-black text-white/30 line-through"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              R$ 3.957/mês
            </span>
            <ArrowRight size={20} className="text-[#00C896]" />
            <span className="text-2xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>
              R$ 697/mês com Vetiva
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Vetiva Agent */}
          <div className="rounded-3xl p-8 border border-white/10 relative" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="mb-6">
              <p className="text-xs font-semibold text-[#00C896] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                Entrada
              </p>
              <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Vetiva Agent
              </h3>
              <p className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                A Maya no WhatsApp da sua clínica
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  R$ 697
                </span>
                <span className="text-white/50 text-sm mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  /mês · contrato 6 meses
                </span>
              </div>
              <p className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                ou R$ 997/mês no plano mensal
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {agentFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,200,150,0.15)" }}>
                    <Check size={11} style={{ color: "#00C896" }} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WA_AGENT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-[#0D1F3C] transition-all hover:brightness-110"
              style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
            >
              <MessageCircle size={18} />
              Quero o Vetiva Agent
            </a>
          </div>

          {/* Vetiva Intelligence */}
          <div
            className="rounded-3xl p-8 border border-[#00C896]/30 relative overflow-hidden"
            style={{ background: "rgba(0,200,150,0.06)" }}
          >
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold text-[#0D1F3C]" style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}>
              Solução Completa
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-[#00C896] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                Premium
              </p>
              <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Vetiva Intelligence
              </h3>
              <p className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Maya + ERP + Inteligência de Receita
              </p>
            </div>

            <div className="mb-6 py-4 px-5 rounded-xl border border-[#00C896]/20" style={{ background: "rgba(0,200,150,0.08)" }}>
              <p className="text-white font-bold text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Investimento sob consulta
              </p>
              <p className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                Requer estudo de viabilidade técnica. Fale com nossa equipe para diagnóstico gratuito.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {intelligenceFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,200,150,0.15)" }}>
                    <Check size={11} style={{ color: "#00C896" }} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WA_INTELLIGENCE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white border border-[#00C896]/40 hover:bg-[#00C896]/10 transition-all"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <MessageCircle size={18} />
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
