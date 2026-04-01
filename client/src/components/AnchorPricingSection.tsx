import { X, Check } from "lucide-react";

export default function AnchorPricingSection() {
  return (
    <section className="bg-[#071810] py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            O custo de montar isso sozinho
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Quanto você já paga —{" "}
            <span className="text-[#00c977]">ou deveria pagar</span> — por isso?
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Antes de ver o preço do Vetiva Agent, veja o que custa montar uma solução equivalente por conta própria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: cost breakdown */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-red-900/30 border-b border-red-500/20 px-6 py-4">
              <p className="text-red-400 font-bold text-sm uppercase tracking-wide" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Montando por conta própria
              </p>
            </div>
            <div className="p-6 space-y-3">
              {[
                { item: "CRM veterinário separado", value: "R$ 500/mês" },
                { item: "Chatbot genérico (sem especialização)", value: "R$ 497/mês" },
                { item: "Plataforma de automação de mensagens", value: "R$ 200/mês" },
                { item: "1 cliente perdido por dia (ticket R$ 200)", value: "R$ 4.400/mês" },
                { item: "Recepcionista 24h com encargos", value: "Inviável" },
              ].map((row) => (
                <div key={row.item} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{row.item}</span>
                  </div>
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 ml-4" style={{ fontFamily: "Montserrat, sans-serif" }}>{row.value}</span>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-red-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-red-300 font-bold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Total do problema</span>
                  <span className="text-red-400 font-black text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>R$ 5.597+/mês</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vetiva Agent */}
          <div className="bg-[#0a1f14] border border-[#00c977]/30 rounded-2xl overflow-hidden relative">
            <div className="absolute top-4 right-4 bg-[#00c977] text-black text-xs font-black px-3 py-1 rounded-full" style={{ fontFamily: "Montserrat, sans-serif" }}>
              MAIS POPULAR
            </div>
            <div className="bg-[#00c977]/10 border-b border-[#00c977]/20 px-6 py-4">
              <p className="text-[#00c977] font-bold text-sm uppercase tracking-wide" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Vetiva Agent — tudo em um
              </p>
            </div>
            <div className="p-6 space-y-3 mb-4">
              {[
                "Agente Vetiva configurado com sua clínica",
                "CRM nativo com Kanban de atendimentos",
                "Atendimento 24h no WhatsApp",
                "Relatório diário de performance",
                "Alertas de escalação em tempo real",
                "Suporte e ajustes mensais incluídos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
                  <Check className="w-4 h-4 text-[#00c977] flex-shrink-0" />
                  <span className="text-gray-200 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="bg-black/30 rounded-xl p-5 text-center">
                <p className="text-gray-400 text-sm line-through mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  De R$ 3.957/mês (se montasse separado)
                </p>
                <p className="text-white font-black text-4xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  R$ 697<span className="text-gray-400 text-lg font-normal">/mês</span>
                </p>
                <p className="text-[#00c977] text-sm font-semibold mb-4">
                  Economia de R$ 3.260/mês vs. montar separado
                </p>
                <a
                  href="https://wa.me/5522998047666?text=Quero%20contratar%20o%20Vetiva%20Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#00c977] hover:bg-[#00b368] text-black font-bold py-3 rounded-xl text-center transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Contratar Vetiva Agent
                </a>
                <p className="text-gray-500 text-xs mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  Garantia: R$ 3.000 em receita automatizada no primeiro mês ou devolvemos o investimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
