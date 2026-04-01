import { AlertTriangle, PhoneOff, Moon, TrendingDown } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="bg-[#040f08] py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            O diagnóstico
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Você sabe quantos tutores{" "}
            <span className="text-[#00c977]">sua clínica perdeu</span>{" "}
            essa semana?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            A maioria dos donos de clínica não sabe. Porque a receita que some não aparece
            em nenhum relatório — ela simplesmente não entra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Moon className="w-6 h-6 text-[#00c977]" />,
              title: "Fora do horário",
              stat: "45 tutores",
              statLabel: "perdidos por semana sem atendimento noturno¹",
              desc: "Tutores mandam mensagem às 20h, 21h, 22h. Sem resposta, ligam para a clínica ao lado. Você nem fica sabendo.",
            },
            {
              icon: <PhoneOff className="w-6 h-6 text-[#00c977]" />,
              title: "Demora na resposta",
              stat: "10,7 min",
              statLabel: "tempo médio de resposta de uma equipe humana¹",
              desc: "Em 10 minutos o tutor já abriu o WhatsApp de outra clínica. A primeira a responder fica com o agendamento.",
            },
            {
              icon: <TrendingDown className="w-6 h-6 text-[#00c977]" />,
              title: "Receita invisível",
              stat: "R$ 9.600",
              statLabel: "de receita noturna preservada em 1 mês¹",
              desc: "Não é receita que você perdeu — é receita que nunca entrou. Não aparece no relatório. Não aparece no caixa.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-[#0a1f14]/60 border border-white/8 rounded-2xl p-6 hover:border-[#00c977]/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00c977]/10 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {card.title}
              </h3>
              <p className="text-[#00c977] font-black text-3xl leading-none mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {card.stat}
              </p>
              <p className="text-gray-500 text-xs mb-4">{card.statLabel}</p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Cost of inaction banner */}
        <div className="bg-[#0a1f14] border border-[#00c977]/20 rounded-2xl p-8 lg:p-10">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                O custo real de não resolver isso
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Com ticket médio de R$ 200 e apenas 1 tutor perdido por dia:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { period: "Por dia", value: "R$ 200", color: "text-yellow-400" },
              { period: "Por semana", value: "R$ 1.400", color: "text-orange-400" },
              { period: "Por mês", value: "R$ 4.400", color: "text-red-400" },
              { period: "Por ano", value: "R$ 52.800", color: "text-red-500" },
            ].map((item) => (
              <div key={item.period} className="bg-black/30 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">{item.period}</p>
                <p className={`font-black text-2xl ${item.color}`} style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {item.value}
                </p>
                <p className="text-gray-600 text-xs mt-1">de receita invisível</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-xs mt-6 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            ¹ Dados reais — Fripet Clínica Veterinária, Nova Friburgo (RJ), semana 24–31/03/2026.
          </p>
        </div>
      </div>
    </section>
  );
}
