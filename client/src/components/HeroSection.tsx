import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, BarChart2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5522981047666?text=Quero%20fazer%20o%20diagn%C3%B3stico%20gratuito%20da%20Vetiva";

export default function HeroSection() {
  return (
    <section className="relative bg-[#071810] overflow-hidden min-h-screen flex items-center">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#00c97730 1px, transparent 1px), linear-gradient(90deg, #00c97730 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00c977]/8 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-[#00c977]/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00c977]/10 border border-[#00c977]/25 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00c977] animate-pulse" />
              <span className="text-[#00c977] text-sm font-medium">
                Agente de IA exclusivo para clínicas veterinárias
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-[3.4rem] font-black text-white leading-[1.08] tracking-tight mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Cada tutor sem resposta{" "}
              <span className="text-[#00c977]">é uma oportunidade</span>{" "}
              de atendimento perdida.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-3 max-w-xl" style={{ fontFamily: "Inter, sans-serif" }}>
              O <strong className="text-white">Agente Vetiva</strong> responde em{" "}
              <strong className="text-[#00c977]">7 segundos</strong>, 24 horas por dia,
              com os protocolos da sua clínica. Você monitora cada atendimento
              em tempo real pelo Kanban nativo.
            </p>
            <p className="text-sm text-gray-500 mb-10 max-w-xl" style={{ fontFamily: "Inter, sans-serif" }}>
              Não é um chatbot genérico com nome bonito. É um agente configurado com
              sua tabela de preços, sua escala médica e seus limites de autonomia.
              Você define o que ele pode e não pode responder.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: <Zap className="w-5 h-5 text-[#00c977]" />, value: "7s", label: "tempo de resposta" },
                { icon: <Clock className="w-5 h-5 text-[#00c977]" />, value: "24h / 7d", label: "sem interrupção" },
                { icon: <BarChart2 className="w-5 h-5 text-[#00c977]" />, value: "R$ 9.600", label: "receita preservada/mês¹" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00c977]/12 flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#00c977] hover:bg-[#00b368] text-black font-bold px-8 py-4 text-base rounded-xl w-full sm:w-auto"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Diagnóstico gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <p className="text-gray-600 text-[10px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Ao clicar, você concorda em receber mensagens da Vetiva via WhatsApp.</p>
              <a href="#como-funciona">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-base rounded-xl w-full sm:w-auto bg-transparent"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Ver como funciona
                </Button>
              </a>
            </div>

            <p className="text-gray-600 text-xs mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
              ¹ Dado real — Fripet Clínica Veterinária, Nova Friburgo (RJ), semana 24–31/03/2026.
              12 tutores atendidos de noite × R$ 200 ticket médio × 4 semanas.
            </p>
          </div>

          {/* ── Right: Product screenshot ── */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/kanban_mockup_faf3f42e.jpg"
                alt="Kanban de Atendimentos Vetiva — visão em tempo real"
                className="w-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                94 aguardando resposta
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-5 py-4">
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Kanban de Atendimentos — tempo real
                </p>
                <p className="text-gray-300 text-xs mt-0.5">
                  Cada conversa, cada etapa, cada resultado — visível para você.
                </p>
              </div>
            </div>

            {/* Floating metric */}
            <div className="absolute -bottom-5 -left-5 bg-[#0d2a1a] border border-[#00c977]/30 rounded-xl px-5 py-4 shadow-2xl">
              <p className="text-[#00c977] font-black text-2xl leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>232</p>
              <p className="text-gray-300 text-xs mt-1">tutores atendidos</p>
              <p className="text-gray-500 text-xs">em 7 dias · Fripet</p>
            </div>

            {/* Floating speed badge */}
            <div className="absolute -top-4 -right-4 bg-[#00c977] text-black text-xs font-black px-4 py-2 rounded-full shadow-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Resposta em 7s
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
