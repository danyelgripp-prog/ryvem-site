const WA_DIAGNOSTICO = "https://wa.me/5522981047666?text=Quero%20meu%20diagn%C3%B3stico%20gratuito";

export default function DiagnosticSection() {
  return (
    <section id="diagnostico" className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C] inline-block" />
            Diagnóstico gratuito
          </div>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>
            Você sabe quanto sua clínica está perdendo?
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(13,31,60,0.6)", fontFamily: "Inter, sans-serif" }}>
            Em 30 minutos pelo WhatsApp, mostramos o número real. Sem compromisso. Sem apresentação de vendas.
          </p>
        </div>
        <a
          href={WA_DIAGNOSTICO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0D1F3C] transition-all duration-200 hover:brightness-110 hover:scale-105"
          style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
        >
          Quero meu diagnóstico gratuito
        </a>
      </div>
    </section>
  );
}
