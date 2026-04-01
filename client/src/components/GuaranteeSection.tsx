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
              Nossa Garantia de{" "}
              <span className="text-[#00c977]">Resultado</span>
            </h2>

            <p className="text-gray-400 text-sm italic max-w-2xl mx-auto leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Para o veterinário que já foi prometido demais e entregue de menos.
            </p>

            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Nos primeiros 30 dias, se o Agente não gerar{" "}
              <span className="text-[#00c977] font-semibold">R$ 3.000</span>{" "}
              em receita automatizada comprovada — agendamentos confirmados sem intervenção humana,
              rastreáveis no painel — nossa equipe entra na sua operação.
            </p>

            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Não como suporte. Como consultores dedicados exclusivamente à sua clínica,
              trabalhando ao seu lado até o resultado ser atingido. Sem prazo. Sem custo adicional.
            </p>

            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
              Você não precisa entender de tecnologia para cobrar isso de nós.
              Só precisa abrir o painel e ver os números. Se não estiverem lá,
              é nossa responsabilidade — não a sua.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { value: "R$ 3.000", label: "Mínimo garantido" },
                { value: "30 dias", label: "Prazo de avaliação" },
                { value: "Consultoria dedicada", label: "Se não atingir" },
              ].map((item) => (
                <div key={item.label} className="bg-black/30 rounded-xl p-4 border border-white/8">
                  <p className="text-[#00c977] font-black text-xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-xs italic max-w-xl mx-auto mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              Não devolvemos o dinheiro. Porque não fugimos do problema — nós o resolvemos.
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
