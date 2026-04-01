import { FileText, Settings, Play, BarChart2, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522998047666?text=Quero%20fazer%20o%20diagn%C3%B3stico%20gratuito%20da%20Vetiva";

const steps = [
  {
    number: "01",
    icon: <FileText className="w-6 h-6 text-[#00c977]" />,
    title: "Diagnóstico da clínica",
    desc: "Você preenche um formulário técnico com tabela de preços, escala médica, especialidades, horários e regras de triagem. Esse material vira a base de conhecimento do Agente.",
    duration: "1–2 dias",
  },
  {
    number: "02",
    icon: <Settings className="w-6 h-6 text-[#00c977]" />,
    title: "Configuração e testes",
    desc: "Nossa equipe configura o Agente com os dados da sua clínica e realiza testes de qualidade. Você aprova cada fluxo antes de ativar — sem surpresas.",
    duration: "3–5 dias",
  },
  {
    number: "03",
    icon: <Play className="w-6 h-6 text-[#00c977]" />,
    title: "Ativação no WhatsApp",
    desc: "O Agente entra em operação no número da sua clínica. Você e a equipe acessam o painel de Atendimento e o Kanban para monitorar cada conversa em tempo real.",
    duration: "Dia 1",
  },
  {
    number: "04",
    icon: <BarChart2 className="w-6 h-6 text-[#00c977]" />,
    title: "Relatório e ajustes mensais",
    desc: "Todo mês você recebe um relatório detalhado de performance: atendimentos, agendamentos, escalações, tempo médio de resposta. Ajustamos o Agente com base nos dados.",
    duration: "Mensal",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-[#040f08] py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Como funciona
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Da configuração ao{" "}
            <span className="text-[#00c977]">primeiro atendimento</span>{" "}
            em menos de 7 dias
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Sem integração técnica complexa. Sem treinamento de equipe. Sem meses de implantação.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[2.25rem] top-10 bottom-10 w-px bg-gradient-to-b from-[#00c977]/40 via-[#00c977]/20 to-transparent" />
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0a1f14] border border-[#00c977]/30 flex items-center justify-center z-10 relative">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1 bg-[#0a1f14]/60 border border-white/8 rounded-2xl p-6 hover:border-[#00c977]/20 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[#00c977]/40 font-black text-3xl leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {step.number}
                      </span>
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {step.title}
                      </h3>
                    </div>
                    <span className="bg-[#00c977]/10 border border-[#00c977]/20 text-[#00c977] text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-black transition-all duration-200 hover:brightness-110"
            style={{ background: "#00c977", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={20} />
            Iniciar diagnóstico gratuito
          </a>
          <p className="text-gray-600 text-xs mt-3" style={{ fontFamily: "Inter, sans-serif" }}>Sem compromisso · Resposta em até 2 horas</p>
        </div>
      </div>
    </section>
  );
}
