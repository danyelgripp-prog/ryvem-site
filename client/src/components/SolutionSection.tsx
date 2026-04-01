import { ShieldCheck, Eye, Settings2, MessageSquareText } from "lucide-react";

export default function SolutionSection() {
  return (
    <section id="solucao" className="bg-[#071810] py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            A solução
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Um agente que trabalha{" "}
            <span className="text-[#00c977]">com os seus protocolos.</span>{" "}
            Não com os de outra clínica.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            O Agente Vetiva é configurado com a sua tabela de preços, sua escala médica,
            seus limites de autonomia e o tom de voz da sua clínica. Você define o que ele
            pode responder — e o que ele deve escalar para a equipe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Features */}
          <div className="space-y-6">
            {[
              {
                icon: <Settings2 className="w-5 h-5 text-[#00c977]" />,
                title: "Configurado com os dados da sua clínica",
                desc: "Tabela de preços, escala médica, especialidades, limites de triagem. O Agente responde com as informações reais da sua clínica — não com respostas genéricas.",
              },
              {
                icon: <Eye className="w-5 h-5 text-[#00c977]" />,
                title: "Você vê tudo em tempo real",
                desc: "Kanban nativo com as etapas do atendimento: Novo, Em Atendimento, Aguardando Resposta, Agendado, Concluído. Cada conversa visível para você e para a equipe.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[#00c977]" />,
                title: "Limites claros — sem promessas que o Agente não pode cumprir",
                desc: "Diagnóstico clínico, prescrição e emergência são escalados para a equipe. O Agente não inventa. Quando não sabe, transfere — e você recebe o alerta.",
              },
              {
                icon: <MessageSquareText className="w-5 h-5 text-[#00c977]" />,
                title: "Relatório diário de performance",
                desc: "Quantos atendimentos, quantos agendamentos, quantas escalações, tempo médio de resposta. Dados reais para você tomar decisão — não suposição.",
              },
            ].map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00c977]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Screenshot: atendimento */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/atendimento_mockup_b139fbae.jpg"
                alt="Painel de Atendimento Vetiva — WhatsApp em tempo real"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Painel de Atendimento — WhatsApp em tempo real
                </p>
                <p className="text-gray-300 text-xs mt-0.5">
                  293 conversas gerenciadas pelo Agente Vetiva
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency block */}
        <div className="bg-[#0a1f14]/80 border border-white/8 rounded-2xl p-8 lg:p-10">
          <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            O que o Agente Vetiva não faz — e por que isso importa
          </h3>
          <p className="text-gray-400 text-sm mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Transparência técnica é o que diferencia uma ferramenta séria de um chatbot com nome bonito.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Não emite diagnóstico clínico",
              "Não prescreve medicamentos",
              "Não atende emergências sem escalar",
              "Não inventa preços não cadastrados",
              "Não substitui o julgamento do veterinário",
              "Não opera sem os dados da sua clínica",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-black/20 rounded-xl px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 text-red-400 text-xs font-bold">✕</span>
                <span className="text-gray-300 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Quando o Agente encontra qualquer um desses cenários, ele escala para a equipe e registra no painel. Você sempre tem controle.
          </p>
        </div>
      </div>
    </section>
  );
}
