import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522981047666?text=Quero%20o%20diagn%C3%B3stico%20gratuito%20do%20Vetiva%20Agent";

export default function FinalCTASection() {
  return (
    <section className="bg-[#071810] py-24 px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00c97730 1px, transparent 1px), linear-gradient(90deg, #00c97730 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00c977]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Última pergunta
        </p>

        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Quanto sua clínica pode otimizar{" "}
          <span className="text-[#00c977]">esse mês</span>{" "}
          com atendimento 24h?
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
          Com ticket médio de R$ 200 e atendimento 24h, veja a projeção para sua clínica.
          Sem compromisso. O diagnóstico gratuito mostra os números reais.
        </p>

        <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
          O diagnóstico gratuito leva 30 minutos. Você sai sabendo exatamente quanto
          sua clínica está perdendo — e se o Agente Vetiva faz sentido para o seu caso.
          Sem pressão. Sem compromisso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-black text-lg text-black transition-all hover:brightness-110"
            style={{ background: "#00c977", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={22} />
            Diagnóstico gratuito agora
          </a>
          <p className="text-gray-600 text-[10px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Ao clicar, você concorda em receber mensagens da Vetiva via WhatsApp.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            "Diagnóstico gratuito",
            "Ativação em 7 dias úteis",
            "Garantia de R$ 3.000",
            "Sem fidelidade no plano mensal",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c977] inline-block" />
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-xs mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
          (22) 98104-7666 · Atendimento de segunda a sexta, 9h às 18h
        </p>
      </div>
    </section>
  );
}
