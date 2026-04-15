import { Shield, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522997178962?text=Quero%20saber%20mais%20sobre%20a%20garantia%20do%20Vetiva";

export default function GuaranteeSection() {
  return (
    <section className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white rounded-3xl p-12 border border-[#0D1F3C]/8 shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full -translate-y-1/2 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative space-y-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
              style={{ background: "rgba(0,200,150,0.12)" }}
            >
              <Shield size={40} style={{ color: "#00C896" }} />
            </div>

            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C] inline-block" />
                Nossa Garantia
              </div>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#0D1F3C] leading-tight mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Se Não Gerar{" "}
                <span style={{ color: "#00C896" }}>R$ 3.000</span>{" "}
                em Receita Automatizada,<br />
                Entramos na Sua Operação.
              </h2>
              <p
                className="text-lg text-[#0D1F3C]/60 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Se nos primeiros 90 dias a Maya não gerar pelo menos{" "}
                <strong className="text-[#0D1F3C]">R$ 3.000 em receita automatizada comprovada</strong>,
                nossa equipe entra na sua operação e garante os ajustes necessários — sem custo adicional.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { value: "R$ 3.000", label: "Mínimo garantido" },
                { value: "90 dias", label: "Prazo de avaliação" },
                { value: "100%", label: "Sem custo adicional" },
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
                  <div
                    className="text-xs text-[#0D1F3C]/50"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              className="text-[#0D1F3C]/40 text-sm italic max-w-xl mx-auto"
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
      </div>
    </section>
  );
}
