import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522997178962?text=Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Vetiva";

const faqs = [
  {
    question: "A Maya vai errar e passar informação errada para o tutor?",
    answer:
      "A Maya só responde com o que você configurou. Ela não inventa preços, não cria horários e não promete o que não pode cumprir. Se ela não souber responder algo, ela diz que vai verificar com a equipe e pede o contato. Você tem controle total sobre o que ela pode e não pode falar.",
  },
  {
    question: "E se o tutor quiser falar com uma pessoa de verdade?",
    answer:
      "A Maya identifica quando o tutor precisa de atendimento humano — seja por urgência, complexidade ou preferência — e transfere a conversa para você ou sua equipe com todo o contexto já registrado. Nenhuma informação se perde na transição.",
  },
  {
    question: "Preciso trocar meu sistema atual para usar o Vetiva?",
    answer:
      "Não. O Vetiva Agent funciona de forma independente, pelo WhatsApp da sua clínica. O Vetiva Intelligence se integra ao seu ERP atual sem substituí-lo. Você não precisa mudar nada do que já funciona.",
  },
  {
    question: "Quanto tempo leva para a Maya estar funcionando?",
    answer:
      "Em até 72 horas após o diagnóstico inicial. Nossa equipe configura tudo: tom de voz, tabela de preços, horários, protocolos. Você revisa, aprova e a Maya começa a atender. Sem instalação técnica da sua parte.",
  },
  {
    question: "O que acontece se eu quiser cancelar?",
    answer:
      "No plano semestral, o contrato é de 6 meses. No plano mensal, você pode cancelar a qualquer momento com 30 dias de aviso. Não há multa abusiva nem burocracia. Se você quiser sair, saímos sem complicação.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24" style={{ background: "#0D1F3C" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
            Perguntas Frequentes
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black text-white leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Suas Dúvidas,{" "}
            <span style={{ color: "#00C896" }}>Respondidas com Honestidade.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: openIndex === i ? "rgba(0,200,150,0.06)" : "rgba(255,255,255,0.04)",
                border: openIndex === i ? "1px solid rgba(0,200,150,0.25)" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="font-semibold text-sm sm:text-base"
                  style={{
                    color: openIndex === i ? "#00C896" : "white",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: "#00C896",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-white/40 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Ainda tem dúvidas? Fale com nossa equipe pelo WhatsApp.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#0D1F3C] transition-all hover:brightness-110"
            style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={16} />
            Tirar Dúvida pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
