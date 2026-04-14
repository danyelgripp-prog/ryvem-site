import { Link } from "wouter";
import { ArrowLeft, Headphones, MessageCircle, Mail, Clock, AlertTriangle } from "lucide-react";

const WA_LINK = "https://wa.me/5522997178962?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20Vetiva";

export default function Support() {
  return (
    <div className="min-h-screen" style={{ background: "#0D1F3C" }}>
      {/* Header */}
      <div style={{ background: "rgba(13,31,60,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            <ArrowLeft size={16} />
            Voltar
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,200,150,0.15)" }}>
            <Headphones size={20} style={{ color: "#00C896" }} />
          </div>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Suporte
          </h1>
        </div>

        <p className="text-white/50 text-sm mb-12 leading-relaxed max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
          Estamos aqui para ajudar. Escolha o canal mais conveniente para você ou consulte as dúvidas frequentes abaixo.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <ContactCard
            icon={<MessageCircle size={22} />}
            title="WhatsApp"
            description="Atendimento rápido via mensagem"
            detail="(22) 99717-8962"
            href={WA_LINK}
            highlight
          />
          <ContactCard
            icon={<Mail size={22} />}
            title="E-mail"
            description="Para questões detalhadas"
            detail="contato@ryvem.com.br"
            href="mailto:contato@ryvem.com.br"
          />
          <ContactCard
            icon={<Clock size={22} />}
            title="Horário"
            description="Atendimento humano"
            detail="Seg-Sex, 9h às 18h"
          />
        </div>

        {/* FAQ */}
        <div style={{ fontFamily: "Inter, sans-serif" }}>
          <h2 className="text-xl font-semibold text-white mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Dúvidas Frequentes
          </h2>

          <div className="space-y-6">
            <FAQ
              question="Como faço para conectar meu WhatsApp?"
              answer="Durante o onboarding, nossa equipe configura a conexão via QR Code. Caso precise reconectar, entre em contato pelo WhatsApp e faremos o processo em poucos minutos."
            />
            <FAQ
              question="A Maya pode responder errado?"
              answer="A Maya é treinada com o DNA da sua clínica (preços, serviços, horários), mas como toda IA, pode eventualmente gerar respostas imprecisas. Por isso, oferecemos escalação humana automática para casos complexos e você pode ajustar o comportamento a qualquer momento."
            />
            <FAQ
              question="Como altero os preços e serviços da minha clínica?"
              answer="Envie a tabela atualizada pelo WhatsApp de suporte ou e-mail. Nossa equipe atualiza o contexto da Maya em até 24 horas úteis."
            />
            <FAQ
              question="Posso pausar o serviço temporariamente?"
              answer="Sim. Entre em contato e podemos pausar o atendimento da Maya sem cancelar sua conta. Os dados e configurações são preservados."
            />
            <FAQ
              question="Como solicito a exclusão dos meus dados?"
              answer='Envie um e-mail para contato@ryvem.com.br com o assunto "Exclusão de dados". Processamos a solicitação em até 15 dias úteis, conforme a LGPD.'
            />
            <FAQ
              question="O serviço funciona com qual ERP?"
              answer="Atualmente temos integração nativa com o Vetus. Para outros ERPs, entre em contato para avaliarmos a viabilidade de integração."
            />
          </div>
        </div>

        {/* Emergency */}
        <div className="mt-16 p-6 rounded-xl" style={{ background: "rgba(240,82,82,0.08)", border: "1px solid rgba(240,82,82,0.15)" }}>
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "#f05252" }} />
            <div>
              <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Problema urgente?
              </h3>
              <p className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Se a Maya está respondendo incorretamente ou há um problema crítico no atendimento, entre em contato imediatamente pelo{" "}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white transition-colors" style={{ color: "#00C896" }}>
                  WhatsApp
                </a>{" "}
                com a palavra "URGENTE". Tempo de resposta: até 1 hora em horário comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  description,
  detail,
  href,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  href?: string;
  highlight?: boolean;
}) {
  const content = (
    <div
      className="p-6 rounded-xl transition-all hover:translate-y-[-2px]"
      style={{
        background: highlight ? "rgba(0,200,150,0.06)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${highlight ? "rgba(0,200,150,0.2)" : "rgba(255,255,255,0.06)"}`,
      }}
    >
      <div className="mb-4" style={{ color: highlight ? "#00C896" : "rgba(255,255,255,0.5)" }}>
        {icon}
      </div>
      <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
        {title}
      </h3>
      <p className="text-white/40 text-xs mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
        {description}
      </p>
      <p className="text-sm font-medium" style={{ color: highlight ? "#00C896" : "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}>
        {detail}
      </p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }
  return content;
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <h3 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
        {question}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
        {answer}
      </p>
    </div>
  );
}
