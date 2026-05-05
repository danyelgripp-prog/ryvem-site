const LOGO_DARK_URL = "/ryvem_vet_logo_dark.png";

const painCards = [
  {
    timeLabel: "Semana passada",
    text: "Um tutor mandou mensagem perguntando sobre vacina às 20h. Recebeu resposta no dia seguinte às 9h. Ele já tinha vacinado o pet em outra clínica.",
    footer: "Isso acontece toda semana em clínicas sem padrão de atendimento",
    color: "#00C896",
  },
  {
    timeLabel: "Todo mês",
    text: "Sua recepcionista mais experiente pediu demissão. Levou junto o jeito de atender, os clientes que eram dela e o padrão que levou meses para construir.",
    footer: "Dependência de pessoas é o maior risco operacional de uma clínica",
    color: "#3B82F6",
  },
  {
    timeLabel: "Agora mesmo",
    text: "Tem clientes na sua base que não voltam há mais de 90 dias. Você não sabe quantos são. Não sabe por que foram embora. E não tem como trazer de volta o que não sabe que perdeu.",
    footer: "Receita perdida não aparece em nenhum relatório",
    color: "#8B5CF6",
  },
  {
    timeLabel: "Todo dia",
    text: "Você chegou mais cedo, saiu mais tarde, resolveu problema de equipe, respondeu WhatsApp, e no final do dia não lembra de nenhuma consulta que fez. Era pra ser o contrário.",
    footer: "Veterinário que virou gerente de caos não é sustentável",
    color: "#F59E0B",
  },
];

export default function ResultsSection() {
  return (
    <section
      id="resultados"
      className="py-24"
      style={{ background: "white" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="flex justify-center">
            <img
              src={LOGO_DARK_URL}
              alt="RYVEM VET"
              className="h-10 w-auto object-contain"
              style={{ maxWidth: "160px" }}
            />
          </div>
          <div className="ryvem-vet-badge w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
            O que donos de clínica dizem
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
          >
            Você reconhece alguma<br />
            <span style={{ color: "#00C896" }}>dessas situações?</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            São as mesmas que encontramos em toda clínica veterinária que atendemos.
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {painCards.map((c, i) => (
            <div
              key={i}
              className="ryvem-vet-card p-6 space-y-4 relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: c.color }}
              />

              {/* Time label */}
              <div
                className="text-3xl font-black"
                style={{ color: c.color, fontFamily: "Montserrat, sans-serif" }}
              >
                {c.timeLabel}
              </div>

              {/* Text */}
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {c.text}
              </p>

              {/* Footer label */}
              <div
                className="rounded-xl p-3"
                style={{ background: `${c.color}08`, border: `1px solid ${c.color}20` }}
              >
                <p
                  className="text-xs font-semibold leading-snug"
                  style={{ color: c.color, fontFamily: "Inter, sans-serif" }}
                >
                  {c.footer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div
          className="mt-16 rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #0D1F3C 0%, #1a3a6e 100%)",
          }}
        >
          <p
            className="text-center text-white/60 text-sm uppercase tracking-widest mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            O que você pode esperar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "72h", label: "Para entregar funcionando" },
              { value: "24/7", label: "Sua clínica presente" },
              { value: "0", label: "Sistemas novos para aprender" },
              { value: "100%", label: "Focado na sua realidade" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div
                  className="text-3xl font-black"
                  style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}
                >
                  {stat.value}
                </div>
                <p
                  className="text-white/60 text-xs leading-snug"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
