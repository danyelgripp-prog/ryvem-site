import { useState, useRef } from "react";
import { MessageCircle, CheckCircle, Shield, ChevronDown, ChevronUp } from "lucide-react";

const CALENDLY = "https://calendly.com/raioxvet/diagnostico-pro-scale?month=2026-06";
const API_IPL = "https://apex.ryvem.com.br/api/ipl/lead";
const KANBAN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/kanban_mockup_faf3f42e.jpg";

type Etapa = "calculadora" | "formulario" | "confirmacao";

function formatarReais(valor: number): string {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function CampanhaPage() {
  // Etapa 1
  const [atendimentos, setAtendimentos] = useState("");
  const [ticket, setTicket] = useState("");

  // Calculado
  const [perdaMensal, setPerdaMensal] = useState<number | null>(null);

  // Estado geral
  const [etapa, setEtapa] = useState<Etapa>("calculadora");

  // Etapa 2
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Controles
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  // Refs para scroll
  const blocoResultadoRef = useRef<HTMLDivElement>(null);
  const blocoConfirmacaoRef = useRef<HTMLDivElement>(null);
  const blocoHeroRef = useRef<HTMLDivElement>(null);

  function calcular() {
    const a = parseInt(atendimentos);
    const t = parseInt(ticket);
    if (!a || a <= 0 || !t || t <= 0) {
      setErro("Preencha atendimentos e ticket médio.");
      return;
    }
    setErro(null);
    const perda = a * t * 0.3 * 22;
    setPerdaMensal(perda);
    setEtapa("formulario");
    setTimeout(() => {
      blocoResultadoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  async function submeter() {
    if (!nome.trim() || !cargo.trim() || !whatsapp.trim()) {
      setErro("Preencha todos os campos.");
      return;
    }
    setErro(null);
    setLoading(true);
    try {
      const resp = await fetch(API_IPL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clinica: "Clínica veterinária",
          cidade: "não informado",
          nome: nome.trim(),
          cargo: cargo.trim(),
          wpp_pessoal: whatsapp.trim(),
          atendimentos_dia: atendimentos,
          auto_avaliacao:
            "ticket_medio:R$" + ticket + ";perda_estimada:R$" + perdaMensal,
        }),
      });
      if (!resp.ok) throw new Error("status " + resp.status);
      setEtapa("confirmacao");
      setTimeout(() => {
        blocoConfirmacaoRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } catch {
      setErro("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  const faqs = [
    {
      p: "O que acontece depois que preencho o formulário?",
      r: "Nossa equipe entra em contato pelo WhatsApp em até 24 horas com o diagnóstico completo da sua clínica. Sem pitch. Sem pressão. Só os números reais.",
    },
    {
      p: "O atendente vai passar informação errada para o tutor?",
      r: "O atendente só responde com o que você configurou. Não inventa preços, não cria horários, não promete o que não está na sua tabela. Se não souber responder algo, transfere para sua equipe e registra no painel.",
    },
    {
      p: "Preciso trocar meu sistema atual para usar a RYVEM VET?",
      r: "Não. A RYVEM VET funciona de forma independente, pelo WhatsApp da sua clínica. No plano DIRETOR fazemos análise de viabilidade de integração com o sistema que você já usa.",
    },
  ];

  const inputClass =
    "w-full rounded-xl py-3 px-4 text-white placeholder-white/30 text-sm outline-none focus:ring-2 focus:ring-[#00C896]/50 transition-all";
  const inputStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ═══ BLOCO 1 — HEADER ═══ */}
      <header
        className="w-full flex items-center justify-between px-6"
        style={{ background: "#0D1F3C", height: 64 }}
      >
        <img src="/ryvem_vet_logo_dark.png" alt="RYVEM VET" style={{ height: 56 }} />
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: "Inter, sans-serif" }}>
          (22) 98104-7666
        </span>
      </header>

      {/* ═══ BLOCO 2 — HERO + FORMULÁRIO ETAPA 1 ═══ */}
      <section
        ref={blocoHeroRef}
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, #0D1F3C 0%, #0f2847 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Coluna esquerda */}
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  border: "1px solid rgba(0,200,150,0.30)",
                  background: "rgba(0,200,150,0.10)",
                  color: "#00C896",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                Para donos de clínica veterinária
              </div>

              <h1
                className="text-4xl sm:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Sua clínica perde dinheiro<br />
                <span style={{ color: "#00C896" }}>todo dia sem saber quanto.</span>
              </h1>

              <p
                className="text-base leading-relaxed max-w-lg"
                style={{ color: "rgba(255,255,255,0.70)", fontFamily: "Inter, sans-serif" }}
              >
                Você foi formado para cuidar de animais, não para estruturar operação comercial.
                Descubra em 2 minutos quanto está saindo pelo ralo.
              </p>

              {/* Card formulário etapa 1 */}
              <div
                className="rounded-2xl p-6 space-y-5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.80)", fontFamily: "Inter, sans-serif" }}
                  >
                    Calcule sua perda mensal
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{ color: "rgba(255,255,255,0.60)", fontFamily: "Inter, sans-serif" }}
                    >
                      Atendimentos por dia
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={200}
                      placeholder="Ex: 15"
                      value={atendimentos}
                      onChange={(e) => setAtendimentos(e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{ color: "rgba(255,255,255,0.60)", fontFamily: "Inter, sans-serif" }}
                    >
                      Ticket médio da consulta (R$)
                    </label>
                    <input
                      type="number"
                      min={50}
                      max={2000}
                      placeholder="Ex: 250"
                      value={ticket}
                      onChange={(e) => setTicket(e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {erro && etapa === "calculadora" && (
                  <p className="text-xs" style={{ color: "#EF4444" }}>{erro}</p>
                )}

                <button
                  onClick={calcular}
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all hover:brightness-110 hover:scale-[1.01] active:scale-95"
                  style={{
                    background: "#00C896",
                    color: "#0D1F3C",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Calcular minha perda mensal →
                </button>

                <p
                  className="text-center"
                  style={{ fontSize: 11, color: "rgba(255,255,255,0.30)", fontFamily: "Inter, sans-serif" }}
                >
                  Cálculo baseado em dados reais de clínicas veterinárias brasileiras.
                </p>
              </div>
            </div>

            {/* Coluna direita — Kanban */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg overflow-hidden max-h-[500px]">
                <img
                  src={KANBAN_IMG}
                  alt="Kanban de atendimentos RYVEM VET em tempo real"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.10)", maxHeight: 480 }}
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "#EF4444", fontFamily: "Montserrat, sans-serif" }}
                >
                  94 aguardando resposta
                </div>
                <div
                  className="absolute top-12 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: "#00C896", color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                >
                  Resposta em 7s
                </div>
                <div
                  className="absolute bottom-16 left-4 px-4 py-3 rounded-xl shadow-xl"
                  style={{ background: "#0D1F3C", border: "1px solid rgba(0,200,150,0.3)" }}
                >
                  <div className="text-3xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>232</div>
                  <div className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>tutores atendidos</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "Inter, sans-serif" }}>em 7 dias · clínica interior RJ</div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 rounded-b-2xl"
                  style={{ background: "linear-gradient(to top, rgba(13,31,60,0.95), transparent)" }}
                >
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Kanban de Atendimentos — tempo real
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.60)", fontFamily: "Inter, sans-serif" }}>
                    Cada etapa, cada resultado — visível para você.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOCO 3 — RESULTADO + ETAPA 2 ═══ */}
      {etapa !== "calculadora" && (
        <section
          ref={blocoResultadoRef}
          className="py-16"
          style={{ background: "#F5F7FA" }}
        >
          <div className="max-w-2xl mx-auto px-6 space-y-8">

            {/* Card resultado */}
            <div
              className="rounded-3xl p-8 text-center space-y-4"
              style={{ background: "#fff", boxShadow: "0 4px 32px rgba(0,0,0,0.10)" }}
            >
              <p
                className="text-sm"
                style={{ color: "rgba(13,31,60,0.60)", fontFamily: "Inter, sans-serif" }}
              >
                Com {atendimentos} atendimentos/dia e ticket R$ {ticket}, sua clínica pode estar perdendo:
              </p>

              <div
                className="text-5xl font-black"
                style={{ color: "#EF4444", fontFamily: "Montserrat, sans-serif" }}
              >
                R$ {perdaMensal !== null ? formatarReais(perdaMensal) : "—"}
              </div>

              <p
                className="text-xs"
                style={{ color: "rgba(13,31,60,0.60)", fontFamily: "Inter, sans-serif" }}
              >
                por mês em atendimentos não realizados¹
              </p>

              <p
                className="text-xs"
                style={{ color: "rgba(13,31,60,0.30)", fontFamily: "Inter, sans-serif" }}
              >
                ¹ Estimativa baseada em 30% de perda de contatos não respondidos e 22 dias úteis. Dado real — clínica veterinária de médio porte, interior do RJ, março 2026.
              </p>

              <hr style={{ borderColor: "rgba(13,31,60,0.08)" }} />

              <p
                className="text-lg font-bold"
                style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
              >
                Quer saber o número exato da sua clínica?
              </p>

              <p
                className="text-sm"
                style={{ color: "rgba(13,31,60,0.60)", fontFamily: "Inter, sans-serif" }}
              >
                Preencha abaixo para receber seu diagnóstico gratuito em até 24h.
              </p>
            </div>

            {/* Formulário etapa 2 */}
            {etapa === "formulario" && (
              <div className="space-y-4">
                {[
                  {
                    label: "Nome completo",
                    type: "text",
                    placeholder: "Dr. João Silva",
                    value: nome,
                    onChange: (v: string) => setNome(v),
                  },
                  {
                    label: "Cargo",
                    type: "text",
                    placeholder: "Proprietário, Sócio, Diretor...",
                    value: cargo,
                    onChange: (v: string) => setCargo(v),
                  },
                  {
                    label: "WhatsApp",
                    type: "tel",
                    placeholder: "(22) 99999-9999",
                    value: whatsapp,
                    onChange: (v: string) => setWhatsapp(v),
                  },
                ].map((f) => (
                  <div key={f.label}>
                    <label
                      className="block text-xs mb-1.5 font-medium"
                      style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={f.value}
                      onChange={(e) => f.onChange(e.target.value)}
                      className="w-full rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-[#00C896]/40 transition-all"
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(13,31,60,0.15)",
                        color: "#0D1F3C",
                        fontFamily: "Inter, sans-serif",
                      }}
                    />
                  </div>
                ))}

                {/* Atendimentos pré-preenchido */}
                <div>
                  <label
                    className="block text-xs mb-1.5 font-medium"
                    style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}
                  >
                    Atendimentos por dia
                  </label>
                  <input
                    type="number"
                    value={atendimentos}
                    onChange={(e) => setAtendimentos(e.target.value)}
                    className="w-full rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-[#00C896]/40 transition-all"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(13,31,60,0.15)",
                      color: "#0D1F3C",
                      fontFamily: "Inter, sans-serif",
                    }}
                  />
                </div>

                {erro && (
                  <p className="text-xs" style={{ color: "#EF4444" }}>{erro}</p>
                )}

                <button
                  onClick={submeter}
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:brightness-110 hover:scale-[1.01] active:scale-95 disabled:opacity-60"
                  style={{
                    background: "#00C896",
                    color: "#0D1F3C",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 15,
                  }}
                >
                  <MessageCircle size={20} />
                  {loading ? "Enviando..." : "Quero meu diagnóstico gratuito"}
                </button>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-semibold flex items-center justify-center transition-all hover:bg-[#0D1F3C]/5"
                  style={{
                    border: "1px solid rgba(13,31,60,0.20)",
                    color: "#0D1F3C",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    display: "flex",
                  }}
                >
                  Prefiro agendar direto
                </a>

                <p
                  className="text-center"
                  style={{ fontSize: 12, color: "rgba(13,31,60,0.40)", fontFamily: "Inter, sans-serif" }}
                >
                  30 minutos. Sem compromisso. Sem cartão.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══ BLOCO 4 — CONFIRMAÇÃO ═══ */}
      {etapa === "confirmacao" && (
        <section
          ref={blocoConfirmacaoRef}
          className="py-16 text-center"
          style={{ background: "#0D1F3C" }}
        >
          <div className="max-w-lg mx-auto px-6 space-y-6">
            <CheckCircle size={64} color="#00C896" className="mx-auto" />

            <h2
              className="text-3xl font-black text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Diagnóstico recebido.
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)", fontFamily: "Inter, sans-serif" }}
            >
              Nossa equipe vai entrar em contato pelo WhatsApp em até 24 horas com
              o diagnóstico completo da sua clínica.
            </p>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all hover:bg-[#00C896]/10"
              style={{
                border: "1px solid rgba(0,200,150,0.40)",
                color: "#00C896",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Prefiro agendar agora
            </a>
          </div>
        </section>
      )}

      {/* ═══ BLOCO 5 — PROVA SOCIAL ═══ */}
      <section className="py-16" style={{ background: "#F5F7FA" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div
              className="rounded-2xl p-8 space-y-4"
              style={{ background: "#fff", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", overflow: "hidden", position: "relative" }}
            >
              <div style={{ height: 4, background: "#00C896", borderRadius: "4px 4px 0 0", position: "absolute", top: 0, left: 0, right: 0 }} />
              <div className="flex gap-1 pt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#00C896", fontSize: 16 }}>★</span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(13,31,60,0.75)", fontFamily: "Inter, sans-serif" }}
              >
                "Antes a gente perdia paciente toda semana sem nem saber. Agora cada contato é atendido. A diferença apareceu no caixa logo na primeira semana."
              </p>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                >
                  Pedro · Fripet Veterinária · Nova Friburgo, RJ
                </p>
                <span
                  className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-bold"
                  style={{ background: "rgba(0,200,150,0.12)", color: "#00C896", fontFamily: "Inter, sans-serif" }}
                >
                  RYVEM VET DIRETOR
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-2xl p-8 space-y-4"
              style={{ background: "#fff", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", overflow: "hidden", position: "relative" }}
            >
              <div style={{ height: 4, background: "#3B82F6", borderRadius: "4px 4px 0 0", position: "absolute", top: 0, left: 0, right: 0 }} />
              <div className="flex gap-1 pt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#3B82F6", fontSize: 16 }}>★</span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(13,31,60,0.75)", fontFamily: "Inter, sans-serif" }}
              >
                "A gente não tinha noção de quantos tutores a gente perdia por não responder rápido. Agora a clínica responde em segundos e o movimento aumentou visivelmente."
              </p>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                >
                  Gestor · Clínica veterinária · interior do RJ
                </p>
                <span
                  className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-bold"
                  style={{ background: "rgba(59,130,246,0.12)", color: "#3B82F6", fontFamily: "Inter, sans-serif" }}
                >
                  RYVEM VET AGENTE
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 text-center space-y-2">
            <p
              className="text-2xl font-black"
              style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
            >
              232 tutores atendidos em 7 dias
            </p>
            <p
              className="text-base font-semibold"
              style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}
            >
              R$ 9.600 recuperados no primeiro mês
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(13,31,60,0.35)", fontFamily: "Inter, sans-serif" }}
            >
              ¹ Dados reais — clínica veterinária de médio porte, interior do RJ, março 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BLOCO 6 — FAQ ═══ */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-center mb-8"
            style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
          >
            Perguntas frequentes
          </h2>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(13,31,60,0.10)" }}
              >
                <button
                  onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                >
                  <span
                    className="text-sm font-semibold pr-4"
                    style={{ color: "#0D1F3C", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.p}
                  </span>
                  {faqAberto === i ? (
                    <ChevronUp size={18} color="#0D1F3C" className="flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} color="rgba(13,31,60,0.40)" className="flex-shrink-0" />
                  )}
                </button>
                {faqAberto === i && (
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: "rgba(13,31,60,0.65)", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.r}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOCO 7 — GARANTIA ═══ */}
      <section className="py-16" style={{ background: "#0D1F3C" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                titulo: "Plano AGENTE",
                texto:
                  "Em 60 dias, sua clínica responde qualquer tutor em menos de 10 segundos, 24h por dia — ou cancelamos e devolvemos cada centavo.",
              },
              {
                titulo: "Plano DIRETOR",
                texto:
                  "Em 90 dias, sua clínica recupera pelo menos R$ 5.000 em receita rastreável no painel — ou nossa equipe trabalha sem custo adicional até atingir.",
              },
            ].map((g) => (
              <div
                key={g.titulo}
                className="rounded-2xl p-8 space-y-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Shield size={32} color="#00C896" />
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {g.titulo}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.70)", fontFamily: "Inter, sans-serif" }}
                >
                  {g.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOCO 8 — CTA FINAL ═══ */}
      <section className="py-16 text-center" style={{ background: "#00C896" }}>
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2
            className="text-3xl font-black"
            style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
          >
            Calcule agora quanto sua clínica está perdendo.
          </h2>
          <p
            className="text-base"
            style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}
          >
            30 minutos de diagnóstico. Sem compromisso. Sem cartão.
          </p>
          <button
            onClick={() => {
              blocoHeroRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-white transition-all hover:brightness-90 hover:scale-105 active:scale-95"
            style={{ background: "#0D1F3C", fontFamily: "Montserrat, sans-serif", fontSize: 15 }}
          >
            Fazer meu diagnóstico gratuito
          </button>
        </div>
      </section>

      {/* ═══ BLOCO 9 — FOOTER MÍNIMO ═══ */}
      <footer className="py-8 text-center" style={{ background: "#060f1e" }}>
        <p
          className="text-xs mb-2"
          style={{ color: "rgba(255,255,255,0.30)", fontFamily: "Inter, sans-serif" }}
        >
          © 2026 DMG Serviços Empresariais Ltda — CNPJ 35.416.764/0001-47 · Rua Romualdo Machado, 122 · Nova Friburgo/RJ
        </p>
        <div className="flex items-center justify-center gap-4">
          {[
            { label: "Política de Privacidade", href: "/politica-de-privacidade" },
            { label: "Termos de Uso", href: "/termos-de-uso" },
            { label: "LGPD", href: "/conformidade-lgpd" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:underline"
              style={{ fontSize: 11, color: "rgba(255,255,255,0.20)", fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
