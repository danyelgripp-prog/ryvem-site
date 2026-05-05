import { Shield, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522981047666?text=Quero%20saber%20mais%20sobre%20a%20garantia%20da%20RYVEM%20VET";

export default function GuaranteeSection() {
  return (
    <section className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C] inline-block" />
            Nossa Garantia
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0D1F3C] leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Você não assume o risco.<br />
            <span style={{ color: "#00C896" }}>Nós assumimos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Garantia AGENTE */}
          <div className="bg-white rounded-3xl p-10 border border-[#0D1F3C]/8 shadow-xl relative overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full -translate-y-1/2 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 70%)" }}
            />
            <div className="relative space-y-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(0,200,150,0.12)" }}
              >
                <Shield size={28} style={{ color: "#00C896" }} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#00C896] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Plano AGENTE
                </p>
                <h3
                  className="text-xl font-black text-[#0D1F3C] mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Você não assume o risco
                </h3>
                <p
                  className="text-[#0D1F3C]/60 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Em 60 dias, sua clínica responde qualquer tutor em menos de 10 segundos, 24 horas por dia.
                  Se isso não acontecer, cancelamos seu plano e devolvemos cada centavo pago. Sem burocracia.
                  Sem discussão.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "10s", label: "Tempo de resposta" },
                  { value: "60 dias", label: "Prazo de avaliação" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4 border border-[#0D1F3C]/8"
                    style={{ background: "#F5F7FA" }}
                  >
                    <div
                      className="text-xl font-black mb-1"
                      style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-[#0D1F3C]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Garantia DIRETOR */}
          <div className="bg-white rounded-3xl p-10 border border-[#0D1F3C]/8 shadow-xl relative overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full -translate-y-1/2 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 70%)" }}
            />
            <div className="relative space-y-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(0,200,150,0.12)" }}
              >
                <Shield size={28} style={{ color: "#00C896" }} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#00C896] uppercase tracking-widest mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Plano DIRETOR
                </p>
                <h3
                  className="text-xl font-black text-[#0D1F3C] mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Resultado rastreável ou trabalhamos de graça
                </h3>
                <p
                  className="text-[#0D1F3C]/60 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Em 90 dias, sua clínica recupera pelo menos R$ 5.000 em receita atribuída ao sistema,
                  rastreável no painel. Se não atingir, nossa equipe continua trabalhando sem custo
                  adicional até isso acontecer.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "R$ 5K", label: "Receita mínima garantida" },
                  { value: "90 dias", label: "Prazo de avaliação" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4 border border-[#0D1F3C]/8"
                    style={{ background: "#F5F7FA" }}
                  >
                    <div
                      className="text-xl font-black mb-1"
                      style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-[#0D1F3C]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p
            className="text-[#0D1F3C]/40 text-sm italic max-w-xl mx-auto mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Não é promessa de marketing. É compromisso contratual. Porque confiamos no que entregamos.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-[#0D1F3C] transition-all hover:brightness-110 hover:scale-105"
            style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={20} />
            Quero Esta Garantia
          </a>
        </div>
      </div>
    </section>
  );
}
