import { MessageCircle, Star } from "lucide-react";

const WA_LINK = "https://wa.me/5522981047666?text=Quero%20saber%20quanto%20estou%20perdendo";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, rgba(0, 200, 150, 0.08) 0%, transparent 60%), linear-gradient(135deg, #0D1F3C 0%, #0f2847 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(0,200,150,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,200,150,0.12) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
              Para donos de clínica veterinária
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Sua clínica perde dinheiro todo dia.<br />
                <span style={{ color: "#00C896" }}>E você provavelmente não sabe quanto.</span>
              </h1>
              <p className="text-base text-white/60 leading-relaxed max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Você foi formado para cuidar de animais, não para estruturar uma operação comercial. Só que enquanto você atende, a recepção passa preço errado, o tutor que mandou mensagem ontem não recebeu resposta, e o cliente que não volta há três meses não sabe que você ainda está lá.
              </p>
              <p className="text-base text-white/60 leading-relaxed max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                A RYVEM VET entra na sua clínica, organiza tudo isso e entrega funcionando em 72 horas. Você não aprende nada novo. Sua equipe não muda de sistema. Você só vê o resultado.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "72h", label: "Para estar funcionando" },
                  { value: "24/7", label: "Sua clínica disponível" },
                  { value: "R$ 9.600", label: "receita preservada/mês¹" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-2xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>{stat.value}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/40" style={{ fontSize: "11px", fontFamily: "Inter, sans-serif" }}>
                ¹ Dados reais — clínica veterinária de médio porte, interior do RJ — semana 24–31/03/2026.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-[#0D1F3C] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}>
                <MessageCircle size={20} />
                Quero saber quanto estou perdendo
              </a>
              <a href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white border border-white/20 hover:border-[#00C896]/50 hover:bg-white/5 transition-all duration-200"
                style={{ fontFamily: "Inter, sans-serif" }}>
                Ver como funciona
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#00C896" stroke="none" />)}</div>
              <p className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="text-white/80 font-medium">"Antes a gente perdia paciente toda semana sem nem saber. Agora cada contato é atendido. A diferença apareceu no caixa logo na primeira semana."</span> — Pedro · Fripet Veterinária · Nova Friburgo, RJ
              </p>
            </div>
          </div>

          {/* Kanban Screenshot */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden max-h-[500px]">
              {/* Screenshot principal */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/kanban_mockup_faf3f42e.jpg"
                alt="Kanban de atendimentos RYVEM VET em tempo real"
                className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                style={{ border: "1px solid rgba(255,255,255,0.1)", maxHeight: "480px" }}
              />
              {/* Badge superior direito — vermelho */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                style={{ background: "#EF4444", fontFamily: "Montserrat, sans-serif" }}>
                94 aguardando resposta
              </div>
              {/* Badge resposta rápida — verde */}
              <div className="absolute top-12 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-[#0D1F3C]"
                style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}>
                Resposta em 7s
              </div>
              {/* Card inferior esquerdo — stats Fripet */}
              <div className="absolute bottom-16 left-4 px-4 py-3 rounded-xl shadow-xl"
                style={{ background: "#0D1F3C", border: "1px solid rgba(0,200,150,0.3)" }}>
                <div className="text-3xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>232</div>
                <div className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>tutores atendidos</div>
                <div className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>em 7 dias · clínica interior RJ</div>
              </div>
              {/* Overlay inferior — label */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 rounded-b-2xl"
                style={{ background: "linear-gradient(to top, rgba(13,31,60,0.95), transparent)" }}>
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Kanban de Atendimentos — tempo real
                </p>
                <p className="text-white/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  Cada etapa, cada resultado — visível para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
