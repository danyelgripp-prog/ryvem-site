import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522981047666?text=Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Vetiva";

const faqs = [
  {
    question: "E se o Agente passar uma informação errada para o tutor?",
    answer:
      "O Agente só responde com o que você configurou. Ele não inventa preços, não cria horários e não promete o que não está na sua tabela. Se ele não souber responder algo, ele informa que vai verificar com a equipe e registra a conversa no painel. Você define os limites de autonomia — o que ele pode e não pode responder.",
  },
  {
    question: "O tutor vai perceber que está falando com uma IA?",
    answer:
      "Sim, se perguntar diretamente. O Agente não mente sobre sua natureza. Ele se apresenta como o assistente digital da clínica. Na prática, os tutores se importam menos com 'quem' respondeu e mais com 'se' responderam — e em quanto tempo. Na Fripet, 232 tutores foram atendidos em uma semana sem nenhuma reclamação sobre o Agente.",
  },
  {
    question: "Como eu sei que o Agente está funcionando corretamente?",
    answer:
      "Você tem acesso ao painel de Atendimento e ao Kanban em tempo real. Cada conversa é visível — você pode ler qualquer mensagem enviada pelo Agente a qualquer momento. Além disso, você recebe um relatório diário com métricas: atendimentos, agendamentos, escalações e tempo médio de resposta. Não há caixa preta.",
  },
  {
    question: "Preciso trocar meu sistema atual para usar o Vetiva?",
    answer:
      "Não. O Vetiva Agent funciona de forma independente, pelo WhatsApp da sua clínica. O Vetiva Intelligence se integra ao seu ERP atual sem substituí-lo. Você não precisa mudar nada do que já funciona na sua operação.",
  },
  {
    question: "Quanto tempo leva para o Agente estar funcionando?",
    answer:
      "Em até 7 dias úteis após o diagnóstico inicial. Nossa equipe configura o Agente com os dados da sua clínica, realiza testes de qualidade e você aprova cada fluxo antes da ativação. Você não precisa fazer nada técnico — só revisar e aprovar.",
  },
  {
    question: "O que acontece se eu quiser cancelar?",
    answer:
      "No plano semestral, o contrato é de 6 meses. No plano mensal, você pode cancelar a qualquer momento com 30 dias de aviso. Não há multa abusiva nem burocracia. Se você quiser sair, saímos sem complicação — e você leva todos os dados da sua clínica.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#040f08] py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00c977] text-sm font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Perguntas frequentes
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Suas dúvidas,{" "}
            <span className="text-[#00c977]">respondidas com honestidade.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: openIndex === i ? "rgba(0,201,119,0.06)" : "rgba(255,255,255,0.03)",
                border: openIndex === i ? "1px solid rgba(0,201,119,0.25)" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="font-semibold text-sm sm:text-base"
                  style={{
                    color: openIndex === i ? "#00c977" : "white",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-200 text-[#00c977]"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Ainda tem dúvidas? Fale com nossa equipe pelo WhatsApp.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-black transition-all hover:brightness-110"
            style={{ background: "#00c977", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={16} />
            Tirar dúvida pelo WhatsApp
          </a>
          <p className="text-gray-600 text-[10px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Ao clicar, você concorda em receber mensagens da Vetiva via WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}
