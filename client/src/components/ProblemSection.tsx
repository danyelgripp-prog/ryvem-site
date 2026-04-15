import { Moon, UserX, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <Moon size={28} />,
    title: "Tutor mandou mensagem às 21h. Ninguém respondeu.",
    description:
      "Ele esperou até a manhã. Mas de manhã ele já tinha ido para o concorrente. Você perdeu o cliente sem nem saber que ele existia.",
    stat: "68%",
    statLabel: "dos tutores não voltam após falta de resposta rápida",
  },
  {
    icon: <UserX size={28} />,
    title: "Recepcionista boa é difícil de encontrar e fácil de perder.",
    description:
      "Treinar, pagar, gerenciar — e ainda assim o atendimento é inconsistente. Cada funcionário atende de um jeito. O padrão da sua clínica depende do humor do dia.",
    stat: "R$ 3.200",
    statLabel: "custo médio mensal de uma recepcionista treinada",
  },
  {
    icon: <TrendingDown size={28} />,
    title: "Clientes somem e você só descobre quando o faturamento cai.",
    description:
      "Vacinas vencidas, retornos não agendados, aniversários de pets ignorados. Cada um desses é dinheiro que saiu da sua clínica em silêncio.",
    stat: "R$ 34K+",
    statLabel: "receita média não capturada por clínica por ano",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24" style={{ background: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D1F3C] inline-block" />
            O Problema Real
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1F3C] leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Você Não Perde Clientes<br />
            <span style={{ color: "#00C896" }}>por Falta de Qualidade.</span><br />
            Perde por Falta de Presença.
          </h2>
          <p className="text-lg text-[#0D1F3C]/60 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            A clínica veterinária que cresce hoje não é a que tem o melhor médico. É a que está disponível quando o tutor precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-[#0D1F3C]/8 hover:border-[#00C896]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#0D1F3C] mb-6" style={{ background: "rgba(13,31,60,0.06)" }}>
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0D1F3C] mb-3 leading-snug" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {problem.title}
              </h3>
              <p className="text-[#0D1F3C]/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                {problem.description}
              </p>
              <div className="pt-4 border-t border-[#0D1F3C]/8">
                <div className="text-2xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>{problem.stat}</div>
                <div className="text-xs text-[#0D1F3C]/50 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{problem.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
