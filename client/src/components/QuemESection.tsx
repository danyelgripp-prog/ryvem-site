const WA_DIAGNOSTICO = "https://wa.me/5522981047666?text=Quero%20meu%20diagn%C3%B3stico%20gratuito";

const paraVoce = [
  "Sua clínica fatura R$ 30 mil ou mais por mês",
  "Você tem 500 ou mais tutores cadastrados na base",
  "Você quer crescer sem contratar mais gente",
  "Você está cansado de juntar ferramentas que não conversam entre si",
  "Você topa fazer um diagnóstico de 30 minutos pelo WhatsApp",
];

const naoParaVoce = [
  "Sua clínica está abrindo agora (menos de 6 meses)",
  "Você não tem base de tutores cadastrada",
  "Você quer pagar barato pra ter mais uma ferramenta",
  "Você quer resolver só marketing — anúncios e Instagram",
  "Você não tem 30 minutos para o diagnóstico inicial",
];

export default function QuemESection() {
  return (
    <section className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>
            A RYVEM VET é pra você?
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(13,31,60,0.6)", fontFamily: "Inter, sans-serif" }}>
            Antes de marcar o diagnóstico, confirme se faz sentido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* É pra você */}
          <div className="rounded-2xl p-8" style={{ background: "white", border: "1px solid rgba(0,200,150,0.2)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm" style={{ background: "#00C896" }}>✓</div>
              <h3 className="font-black text-lg" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>É pra você se:</h3>
            </div>
            <ul className="space-y-3">
              {paraVoce.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(13,31,60,0.8)", fontFamily: "Inter, sans-serif" }}>
                  <span className="font-bold flex-shrink-0" style={{ color: "#00C896" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Não é pra você */}
          <div className="rounded-2xl p-8" style={{ background: "white", border: "1px solid rgba(239,68,68,0.2)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm" style={{ background: "#EF4444" }}>✕</div>
              <h3 className="font-black text-lg" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>Não é pra você se:</h3>
            </div>
            <ul className="space-y-3">
              {naoParaVoce.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(13,31,60,0.6)", fontFamily: "Inter, sans-serif" }}>
                  <span className="font-bold flex-shrink-0" style={{ color: "#EF4444" }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-lg" style={{ color: "rgba(13,31,60,0.7)", fontFamily: "Inter, sans-serif" }}>
            Se você se encaixa no primeiro perfil, o diagnóstico gratuito é pra você.
          </p>
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
      </div>
    </section>
  );
}
