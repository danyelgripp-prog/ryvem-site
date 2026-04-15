import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5522997178962?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Vetiva%20Agent";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Gratuito",
    description: "Você fala com a nossa equipe pelo WhatsApp. Em 30 minutos mapeamos sua clínica, seus horários, seus serviços e como você quer ser atendido.",
    duration: "30 min",
  },
  {
    number: "02",
    title: "Configuramos a Maya",
    description: "Nossa equipe programa a Maya com o DNA da sua clínica: tom de voz, tabela de preços, escala médica, regras e protocolos específicos.",
    duration: "48 horas",
  },
  {
    number: "03",
    title: "Ativação e Treinamento",
    description: "Você recebe acesso ao painel, testamos juntos os fluxos e garantimos que a Maya está respondendo exatamente como você quer.",
    duration: "1 dia",
  },
  {
    number: "04",
    title: "Resultados em Tempo Real",
    description: "A Maya começa a atender. Você recebe relatório diário às 8h no WhatsApp com tudo que aconteceu: atendimentos, agendamentos, receita gerada.",
    duration: "Contínuo",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24" style={{ background: "#0D1F3C" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
            Como Funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            De Zero a Maya Funcionando<br />
            <span style={{ color: "#00C896" }}>em Menos de 72 Horas.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Sem instalação técnica. Sem treinamento complicado. Sem mudar o que já funciona na sua clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px z-10" style={{ background: "linear-gradient(90deg, rgba(0,200,150,0.4) 0%, transparent 100%)" }} />
              )}
              <div className="rounded-2xl p-6 border border-white/10 h-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif", opacity: 0.4 }}>{step.number}</span>
                  <span className="text-xs px-3 py-1 rounded-full border border-[#00C896]/30 text-[#00C896]" style={{ fontFamily: "Inter, sans-serif" }}>{step.duration}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-[#0D1F3C] transition-all duration-200 hover:brightness-110 hover:scale-105"
            style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
          >
            <MessageCircle size={20} />
            Iniciar Diagnóstico Gratuito
          </a>
          <p className="text-white/30 text-xs mt-3" style={{ fontFamily: "Inter, sans-serif" }}>Sem compromisso · Resposta em até 2 horas</p>
        </div>
      </div>
    </section>
  );
}
