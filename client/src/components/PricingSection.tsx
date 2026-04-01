import { Check, MessageCircle } from "lucide-react";

const WA_AGENT = "https://wa.me/5522998047666?text=Quero%20contratar%20o%20Vetiva%20Agent";
const WA_INTELLIGENCE = "https://wa.me/5522998047666?text=Quero%20saber%20mais%20sobre%20o%20Vetiva%20Intelligence";

const agentFeatures = [
  "Agente Vetiva configurado com sua clínica",
  "CRM nativo com Kanban de atendimentos",
  "Atendimento 24h no WhatsApp",
  "Triagem veterinária com escalação inteligente",
  "Relatório diário de performance",
  "Alertas de escalação em tempo real",
  "Suporte e ajustes mensais incluídos",
  "Onboarding em até 7 dias úteis",
];

const intelligenceFeatures = [
  "Tudo do Vetiva Agent",
  "Integração com seu ERP veterinário",
  "Inteligência de receita avançada",
  "Alertas de churn e oportunidade de reativação",
  "Análise preditiva de faturamento",
  "Relatórios executivos semanais",
  "Implementação dedicada",
  "Suporte prioritário",
];

export default function PricingSection() {
  return (
    <section id="produtos" className="bg-[#040f08] py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Planos
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Escolha o nível certo{" "}
            <span className="text-[#00c977]">para a sua clínica</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Comece com o Vetiva Agent e escale para o Intelligence quando quiser inteligência completa com ERP.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Vetiva Agent */}
          <div className="bg-[#0a1f14] border border-[#00c977]/30 rounded-2xl p-8 relative">
            <div className="absolute top-5 right-5 bg-[#00c977] text-black text-xs font-black px-3 py-1 rounded-full" style={{ fontFamily: "Montserrat, sans-serif" }}>
              MAIS POPULAR
            </div>
            <div className="mb-6">
              <p className="text-xs font-semibold text-[#00c977] uppercase tracking-widest mb-2">Entrada</p>
              <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Vetiva Agent
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Agente Vetiva + CRM + Kanban nativo
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-500 text-sm line-through mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                R$ 3.957/mês (se montasse separado)
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>R$ 697</span>
                <span className="text-gray-400 text-sm mb-1">/mês · contrato 6 meses</span>
              </div>
              <p className="text-gray-600 text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>ou R$ 997/mês no plano mensal</p>
            </div>

            <ul className="space-y-3 mb-8">
              {agentFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="w-5 h-5 rounded-full bg-[#00c977]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-[#00c977]" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WA_AGENT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-black transition-all hover:brightness-110"
              style={{ background: "#00c977", fontFamily: "Montserrat, sans-serif" }}
            >
              <MessageCircle size={18} />
              Contratar Vetiva Agent
            </a>

            <p className="text-gray-600 text-xs mt-3 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
              Garantia: R$ 3.000 em receita automatizada no 1º mês ou devolvemos.
            </p>
          </div>

          {/* Vetiva Intelligence */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative">
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Premium</p>
              <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Vetiva Intelligence
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Agente Vetiva + ERP + Inteligência de Receita
              </p>
            </div>

            <div className="mb-6 py-4 px-5 rounded-xl border border-white/8 bg-white/[0.03]">
              <p className="text-white font-bold text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Investimento sob consulta
              </p>
              <p className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                Requer estudo de viabilidade técnica com o ERP da sua clínica. Diagnóstico gratuito.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {intelligenceFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="w-5 h-5 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-gray-400" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WA_INTELLIGENCE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/5 transition-all"
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
