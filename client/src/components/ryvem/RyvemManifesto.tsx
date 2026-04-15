export default function RyvemManifesto() {
  return (
    <>
      {/* MISSÃO */}
      <section id="missao" className="py-24 bg-[#0A0A1A] relative overflow-hidden">
        {/* Linha decorativa lateral */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0055EE]/40 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Label */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-[#0055EE]" />
            <span className="text-[#0055EE] text-xs font-semibold tracking-[0.2em] uppercase">
              Nossa Missão
            </span>
          </div>

          {/* Frase principal da missão */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
            Transformar o caos operacional em{" "}
            <span className="text-[#0055EE]">fluxo previsível</span>{" "}
            de resultado.
          </h2>

          {/* Parágrafos da missão — copy literal do documento */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-l-2 border-[#0055EE]/30 pl-6">
              <p className="text-white/70 text-lg leading-relaxed">
                Fazemos isso construindo soluções inteligentes, personalizadas e orientadas ao que realmente importa — eliminando desperdícios, organizando processos e reduzindo dependências.
              </p>
            </div>
            <div className="border-l-2 border-[#5B21B6]/30 pl-6">
              <p className="text-white/70 text-lg leading-relaxed">
                Entramos em negócios para simplificar, organizar e potencializar aquilo que já existe — criando sistemas que sustentam crescimento contínuo, previsível e lucrativo.
              </p>
            </div>
          </div>

          {/* Declaração forte */}
          <div className="bg-[#0D0D2B] border border-[#0055EE]/20 rounded-2xl p-8 md:p-12">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-white">
                Não entregamos tecnologia.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-[#0055EE]">
                Entregamos estrutura, clareza e direção.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/60 text-lg">
                  Porque resultado não pode depender de esforço pontual.{" "}
                  <span className="text-white font-semibold">Resultado precisa fluir.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="py-24 bg-[#060610] relative overflow-hidden">
        {/* Fundo com textura sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0055EE08_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#5B21B608_0%,_transparent_60%)]" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          {/* Label */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-[#5B21B6]" />
            <span className="text-[#5B21B6] text-xs font-semibold tracking-[0.2em] uppercase">
              Manifesto RYVEM
            </span>
          </div>

          {/* Bloco 1 — O problema do mercado */}
          <div className="mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">01</p>
                <h3 className="text-white/50 text-sm font-medium leading-relaxed">
                  O que o mercado ensinou
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
                  O mercado ensinou empresários a aceitar o imprevisível.
                </p>
                <div className="space-y-1 pl-4 border-l border-white/10">
                  <p className="text-white/50 text-lg">Meses bons. Meses ruins.</p>
                  <p className="text-white/50 text-lg">Picos de crescimento seguidos de estagnação.</p>
                  <p className="text-white/50 text-lg">Processos frágeis. Times sobrecarregados.</p>
                  <p className="text-white/50 text-lg">E decisões sendo tomadas no escuro.</p>
                </div>
                <p className="text-white text-xl font-semibold pt-2">
                  E com o tempo, isso vira normal.
                </p>
                <p className="text-[#0055EE] text-xl font-bold">
                  Mas não é.
                </p>
                <p className="text-white/70 text-lg pt-2">
                  A RYVEM existe porque esse modelo está errado.
                </p>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 2 — A causa real */}
          <div className="mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">02</p>
                <h3 className="text-white/50 text-sm font-medium leading-relaxed">
                  A causa real
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
                  Empresas não quebram por falta de esforço.
                </p>
                <p className="text-white text-2xl md:text-3xl font-bold">
                  Quebram por falta de estrutura.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  Não é a falta de trabalho que limita o crescimento. É a ausência de direção.
                  E enquanto o negócio depende de esforço constante, ele nunca escala de verdade.
                </p>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 3 — Por que a RYVEM nasceu */}
          <div className="mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">03</p>
                <h3 className="text-white/50 text-sm font-medium leading-relaxed">
                  Por que nascemos
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 text-xl leading-relaxed">
                  Foi por isso que a RYVEM nasceu. Do entendimento de que crescimento real não vem de picos.
                </p>
                <p className="text-white text-2xl md:text-3xl font-bold text-[#0055EE]">
                  Vem de fluxo.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    "Fluxo de decisões bem tomadas",
                    "Fluxo de processos bem definidos",
                    "Fluxo de execução consistente",
                    "Fluxo de resultado",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#0D0D2B] rounded-xl p-4 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-[#0055EE] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-lg pt-2">
                  Porque crescimento não pode depender de picos.{" "}
                  <span className="text-white font-semibold">Precisa de continuidade.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 4 — O princípio RYVEM */}
          <div className="mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">04</p>
                <h3 className="text-white/50 text-sm font-medium leading-relaxed">
                  O princípio
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 text-xl leading-relaxed">
                  RYVEM não é um nome. É um princípio.
                </p>
                <div className="bg-gradient-to-r from-[#0055EE]/10 to-[#5B21B6]/10 border border-[#0055EE]/20 rounded-2xl p-6 space-y-2">
                  <p className="text-white/60 text-sm">
                    <span className="text-[#0055EE] font-bold">RYV</span> — o fluxo que não para.
                  </p>
                  <p className="text-white/60 text-sm">
                    <span className="text-[#5B21B6] font-bold">EM</span> — aquilo que retorna.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white font-bold text-lg">
                      RYVEM é o fluxo que retorna.
                    </p>
                    <p className="text-white/60 text-sm mt-1">
                      É a construção de um sistema onde o resultado deixa de ser eventual e passa a ser contínuo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 5 — Contrastes */}
          <div className="mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">05</p>
                <h3 className="text-white/50 text-sm font-medium leading-relaxed">
                  Nossa posição
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { enquanto: "Enquanto muitos tentam vender mais,", nos: "nós estruturamos melhor." },
                  { enquanto: "Enquanto outros aumentam esforço,", nos: "nós aumentamos eficiência." },
                  { enquanto: "Enquanto o mercado busca atalhos,", nos: "nós construímos base." },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-white/5 last:border-0">
                    <span className="text-white/40 text-base sm:flex-1">{item.enquanto}</span>
                    <span className="text-white font-semibold text-base sm:flex-1">{item.nos}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 6 — Verdades fundamentais */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Produtividade",
                  texto: "não é fazer mais. É fazer o que realmente importa.",
                  cor: "#0055EE",
                },
                {
                  titulo: "Lucro",
                  texto: "não é sorte. É consequência de estrutura.",
                  cor: "#5B21B6",
                },
                {
                  titulo: "Liberdade",
                  texto: "não é um privilégio. É o resultado de um sistema bem construído.",
                  cor: "#0055EE",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#0D0D2B] border border-white/5 rounded-2xl p-6">
                  <p className="font-bold text-xl mb-2" style={{ color: item.cor }}>
                    {item.titulo}
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 7 — IA e transição */}
          <div className="mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">06</p>
                <h3 className="text-white/50 text-sm font-medium leading-relaxed">
                  O novo jogo
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 text-xl leading-relaxed">
                  A inteligência artificial mudou o jogo. Mas a maioria das empresas ainda opera como se estivesse no passado.
                </p>
                <p className="text-white font-semibold text-lg">
                  A RYVEM existe para fazer essa transição.
                </p>
                <div className="space-y-2 pl-4 border-l-2 border-[#0055EE]/40">
                  <p className="text-white/60">Operações caóticas → <span className="text-white">sistemas inteligentes.</span></p>
                  <p className="text-white/60">Dependência → <span className="text-white">autonomia.</span></p>
                  <p className="text-white/60">Esforço → <span className="text-white">previsibilidade.</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 8 — Para quem é */}
          <div className="mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">07</p>
                <h3 className="text-white/50 text-sm font-medium leading-relaxed">
                  Para quem é
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/80 text-xl leading-relaxed">
                  Nós não trabalhamos com qualquer empresa.
                </p>
                <p className="text-white font-semibold text-lg">
                  Trabalhamos com quem entendeu que continuar no mesmo padrão tem um custo alto demais.
                </p>
                <div className="space-y-2">
                  {[
                    "Com quem quer parar de depender de sorte.",
                    "Com quem quer construir algo sólido.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0055EE] mt-2 flex-shrink-0" />
                      <p className="text-white/70 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Bloco 9 — Empresas melhores */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#0D0D2B] to-[#0A0A1A] border border-[#0055EE]/20 rounded-3xl p-8 md:p-12">
              <p className="text-white/60 text-lg mb-4">Porque no final,</p>
              <p className="text-white text-2xl md:text-3xl font-bold leading-tight mb-6">
                empresas melhores criam realidades melhores.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Para o dono.", "Para o time.", "Para o mercado."].map((item, i) => (
                  <span key={i} className="text-white/60 text-lg">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bloco final — O chamado */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-white/60 text-lg leading-relaxed">
                Se o seu negócio ainda depende de esforço constante para gerar resultado,
              </p>
              <p className="text-white text-xl font-semibold">
                você ainda está no caos.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Se você quer construir algo previsível, escalável e sustentável…
              </p>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0055EE] to-[#5B21B6] bg-clip-text text-transparent">
                A RYVEM é onde isso começa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
