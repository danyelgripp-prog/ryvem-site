const depoimentos = [
  {
    texto: "Antes a gente perdia paciente toda semana sem nem saber. Agora cada contato é atendido. A diferença apareceu no caixa logo na primeira semana.",
    autor: "Pedro",
    clinica: "Fripet Veterinária · Nova Friburgo, RJ",
    plano: "RYVEM VET DIRETOR",
    cor: "#00C896",
  },
  {
    texto: "A gente não tinha noção de quantos tutores a gente perdia por não responder rápido. Agora a clínica responde em segundos e o movimento aumentou visivelmente.",
    autor: "Gestor",
    clinica: "Clínica veterinária · interior do RJ",
    plano: "RYVEM VET AGENTE",
    cor: "#3B82F6",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C] inline-block" />
            Quem já usa
          </div>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>
            O que donos de clínica dizem<br />depois de começar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {depoimentos.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 relative overflow-hidden" style={{ border: "1px solid rgba(13,31,60,0.08)" }}>
              {/* Barra superior colorida */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: d.cor }} />

              {/* Estrelas */}
              <div className="flex gap-0.5 mb-5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={d.cor}>
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(13,31,60,0.75)", fontFamily: "Inter, sans-serif" }}>
                "{d.texto}"
              </p>

              {/* Autor */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>{d.autor}</p>
                  <p className="text-xs" style={{ color: "rgba(13,31,60,0.5)", fontFamily: "Inter, sans-serif" }}>{d.clinica}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0" style={{ color: d.cor, background: `${d.cor}18`, fontFamily: "Inter, sans-serif" }}>
                  {d.plano}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
