import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522997178962?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20com%20o%20Vetiva%20Agent";

export default function FinalCTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(0,200,150,0.15) 0%, transparent 60%), linear-gradient(180deg, #0D1F3C 0%, #0a1a30 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(0,200,150,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <div className="space-y-8">
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Enquanto Você Lê Isso,<br />
              <span style={{ color: "#00C896" }}>Um Tutor Está Esperando Resposta.</span>
            </h2>
            <p
              className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Cada mensagem sem resposta é uma consulta perdida. A Maya pode estar atendendo agora mesmo — em menos de 72 horas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-black text-lg text-[#0D1F3C] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
              style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
            >
              <MessageCircle size={22} />
              Quero a Maya na Minha Clínica
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            {[
              "Diagnóstico gratuito",
              "Ativação em 72 horas",
              "Garantia de R$ 3.000",
              "Sem fidelidade no plano mensal",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                {item}
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            (22) 99717-8962 · Atendimento de segunda a sexta, 9h às 18h
          </p>
        </div>
      </div>
    </section>
  );
}
