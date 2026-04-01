import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-[#040f08] py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Resultado real — semana 1
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            O que aconteceu na primeira semana
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="bg-[#0a1f14] border border-[#00c977]/20 rounded-2xl p-8 lg:p-12 mb-8">
          <Quote className="w-10 h-10 text-[#00c977]/40 mb-6" />
          <blockquote className="text-white text-xl lg:text-2xl font-medium leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            "Em uma semana, com o Agente ainda em fase de ajuste, já tivemos{" "}
            <strong className="text-[#00c977]">232 tutores atendidos</strong>,{" "}
            <strong className="text-[#00c977]">45 atendimentos noturnos</strong> que antes
            seriam perdidos, e uma economia equivalente a{" "}
            <strong className="text-[#00c977]">R$ 1.077 em mão de obra</strong>. O maior
            gargalo que identificamos foi o agendamento — e já estamos resolvendo isso."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00c977]/20 flex items-center justify-center text-[#00c977] font-black text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
              P
            </div>
            <div>
              <p className="text-white font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>Pedro</p>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Fripet Clínica Veterinária · Nova Friburgo, RJ</p>
            </div>
            <div className="ml-auto hidden sm:block">
              <span className="bg-[#00c977]/10 border border-[#00c977]/20 text-[#00c977] text-xs font-semibold px-3 py-1.5 rounded-full">
                Semana 24–31/03/2026
              </span>
            </div>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "232", label: "tutores atendidos", sub: "em 7 dias" },
            { value: "1.820", label: "mensagens enviadas", sub: "pelo Agente" },
            { value: "7s", label: "tempo de resposta", sub: "vs 10,7 min humano" },
            { value: "R$ 1.077", label: "em mão de obra", sub: "economizados na semana" },
          ].map((m) => (
            <div key={m.label} className="bg-[#0a1f14]/60 border border-white/8 rounded-xl p-5 text-center">
              <p className="text-[#00c977] font-black text-2xl lg:text-3xl leading-none mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {m.value}
              </p>
              <p className="text-white text-xs font-semibold mb-0.5">{m.label}</p>
              <p className="text-gray-500 text-xs">{m.sub}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-xs text-center mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Dados extraídos do Relatório Semanal Vetiva — Fripet Clínica Veterinária, Nova Friburgo (RJ), 24–31/03/2026.
          Autonomia de 18% (fase inicial). Projeção com autonomia plena: R$ 8.975/mês em produtividade equivalente.
        </p>
      </div>
    </section>
  );
}
