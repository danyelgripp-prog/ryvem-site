import { Settings, Eye, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: <Settings size={24} />,
    title: "Configurado com os dados da sua clínica",
    description: "Tabela de preços, escala médica, especialidades, limites de triagem. Responde com as informações reais da sua clínica — não com respostas genéricas.",
  },
  {
    icon: <Eye size={24} />,
    title: "Você vê tudo em tempo real",
    description: "Kanban com as etapas do atendimento: Novo, Em Atendimento, Aguardando Resposta, Agendado, Concluído. Cada conversa visível para você e para a equipe.",
  },
  {
    icon: <Shield size={24} />,
    title: "Limites claros — sem promessas que não pode cumprir",
    description: "Diagnóstico clínico, prescrição e emergência são escalados para a equipe. Quando não sabe, transfere — e você recebe o alerta.",
  },
  {
    icon: <BarChart size={24} />,
    title: "Relatório diário de performance",
    description: "Quantos atendimentos, quantos agendamentos, quantas escalações, tempo médio de resposta. Dados reais para você tomar decisão — não suposição.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solucao" className="py-24" style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #0f2847 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna esquerda — features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                O que você recebe
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Não é um chatbot genérico com nome bonito.
              </h2>
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                É um atendente configurado com os dados reais da sua clínica — que sabe o que pode e não pode responder.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#00C896] flex-shrink-0" style={{ background: "rgba(0,200,150,0.15)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{f.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — screenshot painel */}
          <div className="relative w-full max-w-lg mx-auto">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/atendimento_mockup_b139fbae.jpg"
              alt="Painel de atendimento WhatsApp em tempo real"
              className="w-full rounded-2xl shadow-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 rounded-b-2xl"
              style={{ background: "linear-gradient(to top, rgba(13,31,60,0.95), transparent)" }}>
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Painel de Atendimento — WhatsApp em tempo real
              </p>
              <p className="text-white/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                293 conversas gerenciadas pelo atendente RYVEM VET
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
