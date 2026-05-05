const WA_VAGA = "https://wa.me/5522981047666?text=Quero%20garantir%20minha%20vaga";

export default function EscassezSection() {
  return (
    <section className="py-24" style={{ background: "#0D1F3C" }}>
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Por que apenas 5 clínicas por mês?
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}>
            A RYVEM VET não é software de prateleira. Cada clínica recebe configuração proprietária do atendente com DNA da sua clínica, análise de viabilidade de integração com seu sistema e treinamento da sua equipe. Para garantir o resultado prometido em contrato, limitamos a 5 novas clínicas por mês.
          </p>
        </div>

        <div className="rounded-2xl p-8 space-y-3" style={{ border: "1px solid rgba(0,200,150,0.4)", background: "rgba(0,200,150,0.06)" }}>
          <p className="text-2xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Restam 3 vagas para maio de 2026.
          </p>
          <p className="text-white/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Próxima turma: junho de 2026.
          </p>
        </div>

        <a
          href={WA_VAGA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0D1F3C] transition-all duration-200 hover:brightness-110 hover:scale-105"
          style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
        >
          Garantir minha vaga
        </a>
      </div>
    </section>
  );
}
