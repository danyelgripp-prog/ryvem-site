import { Moon, UserX, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <Moon size={28} />,
    title: "O tutor manda mensagem às 21h. Ninguém vê até amanhã.",
    description:
      "Ele não espera. Em menos de 10 minutos está buscando outra clínica no Google. Você nem ficou sabendo que ele existiu.",
    stat: "70%",
    statLabel: "dos tutores escolhem a primeira clínica que responde",
  },
  {
    icon: <UserX size={28} />,
    title: "Cada pessoa da sua equipe atende de um jeito.",
    description:
      "Um passa preço diferente. Outro esquece de confirmar a consulta. O tutor percebe a bagunça antes de você perceber.",
    stat: "Inconsistência",
    statLabel: "de atendimento é a principal causa de perda de clientes",
  },
  {
    icon: <TrendingDown size={28} />,
    title: "Clientes que pararam de vir e você não sabe por quê.",
    description:
      "Eles estão na sua base. Consultaram uma vez, duas vezes, e sumiram. Ninguém ligou. Ninguém mandou mensagem. A cadeira ficou vazia.",
    stat: "5x",
    statLabel: "mais barato reativar um cliente do que conquistar um novo",
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
            O problema não é a qualidade<br />
            do seu atendimento.<br />
            <span style={{ color: "#00C896" }}>É o que acontece antes e depois da consulta.</span>
          </h2>
          <p className="text-lg text-[#0D1F3C]/60 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            São situações que acontecem em toda clínica veterinária. Silenciosas. E custosas.
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
