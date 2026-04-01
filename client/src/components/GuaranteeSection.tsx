import { Shield, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522998047666?text=Quero%20saber%20mais%20sobre%20a%20garantia%20do%20Vetiva";

export default function GuaranteeSection() {
  return (
    <section className="bg-[#071810] py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0a1f14] border border-[#00c977]/25 rounded-2xl p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full -translate-y-1/2 pointer-events-none bg-[#00c977]/5 blur-3xl" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-[#00c977]/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#00c977]" />
            </div>

            <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Nossa garantia
            </p>

            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Se não gerar{" "}
              <span className="text-[#00c977]">R$ 3.000</span>{" "}
              em receita automatizada no primeiro mês,{" "}
              devolvemos o investimento.
            </h2>

            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Receita automatizada = agendamentos confirmados pelo Agente sem intervenção humana,
              calculados pelo ticket médio da sua clínica. Você acompanha cada conversa no painel.
              Os números são verificáveis.
            </p>

            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
              Na Fripet, em uma semana com 18% de autonomia, o Agente preservou R$ 9.600 em receita noturna.
              Com autonomia plena, a projeção é de R$ 8.975/mês em produtividade equivalente.
              Nossa garantia é conservadora — de propósito.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { value: "R$ 3.000", label: "Mínimo garantido" },
                { value: "30 dias", label: "Prazo de avaliação" },
                { value: "100%", label: "Devolução integral" },
              ].map((item) => (
                <div key={item.label} className="bg-black/30 rounded-xl p-4 border border-white/8">
                  <p className="text-[#00c977] font-black text-xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-xs italic max-w-xl mx-auto mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              Não é promessa de marketing. É compromisso contratual com mecanismo verificável.
              Porque confiamos no que entregamos.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-black transition-all hover:brightness-110"
              style={{ background: "#00c977", fontFamily: "Montserrat, sans-serif" }}
            >
              <MessageCircle size={20} />
              Quero esta garantia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
