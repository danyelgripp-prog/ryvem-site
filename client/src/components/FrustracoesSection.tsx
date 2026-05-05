const tentativas = [
  {
    label: "Contratou recepcionista CLT",
    valor: "R$ 3.106/mês com encargos",
    texto: "Faltou. Ficou doente. Pediu férias. Saiu depois de 4 meses. O WhatsApp continuou sem resposta à noite.",
  },
  {
    label: "Pagou agência de marketing",
    valor: "R$ 3.000/mês em anúncios",
    texto: "Trouxe cliente novo. Mas a base que você já tem continuou parada, sem follow-up, sem reativação.",
  },
  {
    label: "Comprou software de gestão",
    valor: "R$ 400/mês",
    texto: "Relatórios que ninguém olha. Que não geram nenhuma ação concreta. Que não respondem WhatsApp à noite.",
  },
  {
    label: "Pôs alguém para cuidar do Instagram",
    valor: "R$ 1.500/mês",
    texto: "Três posts por semana, zero conversão. Foto fofa nos stories. Nenhum tutor a mais agendando.",
  },
  {
    label: "Tentou chatbot genérico",
    valor: "Cancelou em 2 meses",
    texto: "Atendia mal. Passava informação errada. Em um caso marcou cirurgia sem avaliação. Você desligou.",
  },
];

export default function FrustracoesSection() {
  return (
    <section className="py-24" style={{ background: "#111827" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Você já tentou tudo.
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}>
            E cada tentativa custou dinheiro, tempo e energia. Sem resolver o problema real.
          </p>
        </div>

        <div className="space-y-4">
          {tentativas.map((t) => (
            <div key={t.label} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", borderLeft: "4px solid #EF4444" }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg" style={{ color: "#EF4444" }}>✕</span>
                  <span className="font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>{t.label}</span>
                </div>
                <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ color: "#EF4444", background: "rgba(239,68,68,0.1)", fontFamily: "Inter, sans-serif" }}>
                  {t.valor}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}>
                {t.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-3">
          <p className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            O problema não é você.
          </p>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}>
            O problema é que ninguém construiu uma estrutura comercial que entendesse de clínica veterinária. Até agora.
          </p>
        </div>
      </div>
    </section>
  );
}
