import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C] inline-block" />
            Prova Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F3C] leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Nao e Promessa.<br />
            <span style={{ color: "#00C896" }}>E Resultado Documentado.</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 border border-[#0D1F3C]/8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: "radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 70%)" }} />
            <div className="relative">
              <Quote size={48} className="mb-6" style={{ color: "#00C896", opacity: 0.3 }} />
              <blockquote className="text-2xl sm:text-3xl font-bold text-[#0D1F3C] leading-snug mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
                &quot;Melhor IA que ja usei. A Maya atendeu um cliente as 21h &mdash; as 21h20 ele ja tinha sido atendido e pago R$ 250.&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0D1F3C] flex items-center justify-center text-white font-black text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>P</div>
                <div>
                  <p className="font-bold text-[#0D1F3C]" style={{ fontFamily: "Montserrat, sans-serif" }}>Pedro</p>
                  <p className="text-[#0D1F3C]/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Proprietario &middot; Fripet Veterinaria &middot; Nova Friburgo, RJ</p>
                </div>
                <div className="ml-auto flex flex-col items-end gap-2">
                  <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#00C896" stroke="none" />)}</div>
                  <span className="text-xs text-[#0D1F3C]/40" style={{ fontFamily: "Inter, sans-serif" }}>Cliente Vetiva Agent</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[{ value: "21:00", label: "Tutor enviou mensagem" }, { value: "21:20", label: "Atendimento concluido" }, { value: "R$ 250", label: "Receita gerada" }].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 border border-[#0D1F3C]/8 text-center">
                <div className="text-2xl font-black mb-1" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>{item.value}</div>
                <div className="text-xs text-[#0D1F3C]/50" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
