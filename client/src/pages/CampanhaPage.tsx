import { useState, useRef } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";
import FrustracoesSection from "@/components/FrustracoesSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import GuaranteeSection from "@/components/GuaranteeSection";

const CALENDLY = "https://calendly.com/raioxvet/diagnostico-pro-scale?month=2026-06";
const API_IPL = "https://apex.ryvem.com.br/api/ipl/lead";
const KANBAN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/kanban_mockup_faf3f42e.jpg";

type Etapa = "calculadora" | "formulario" | "confirmacao";

function formatarReais(v: number) {
  return v.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

const inputLight =
  "w-full rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-[#00C896]/40 transition-all";
const inputLightStyle = {
  background: "#fff",
  border: "1px solid rgba(13,31,60,0.15)",
  color: "#0D1F3C",
  fontFamily: "Inter, sans-serif",
};

export default function CampanhaPage() {
  const [atendimentos, setAtendimentos] = useState("");
  const [ticket, setTicket] = useState("");
  const [perdaMensal, setPerdaMensal] = useState<number | null>(null);
  const [etapa, setEtapa] = useState<Etapa>("calculadora");
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const formularioRef = useRef<HTMLElement>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);
  const confirmacaoRef = useRef<HTMLDivElement>(null);

  function scrollParaFormulario() {
    formularioRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function calcular() {
    const a = parseInt(atendimentos);
    const t = parseInt(ticket);
    if (!a || a <= 0 || !t || t <= 0) {
      setErro("Preencha atendimentos e ticket médio.");
      return;
    }
    setErro(null);
    setPerdaMensal(a * t * 0.3 * 22);
    setEtapa("formulario");
    setTimeout(() => resultadoRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
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
          auto_avaliacao: `ticket_medio:R$${ticket};perda_estimada:R$${perdaMensal}`,
        }),
      });
      if (!resp.ok) throw new Error("status " + resp.status);
      setEtapa("confirmacao");
      setTimeout(() => confirmacaoRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    } catch {
      setErro("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ─── HEADER MÍNIMO ─────────────────────────────────────────── */}
      <header
        className="w-full flex items-center justify-between px-6"
        style={{ background: "#0D1F3C", height: 64 }}
      >
        <img src="/ryvem_vet_logo_dark.png" alt="RYVEM VET" style={{ height: 56 }} />
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
          (22) 98104-7666
        </span>
      </header>

      {/* ─── 1. HERO ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(0,200,150,0.08) 0%, transparent 60%), linear-gradient(135deg, #0D1F3C 0%, #0f2847 100%)",
        }}
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,200,150,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,200,150,0.12) 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Coluna esquerda */}
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                Para donos de clínica veterinária
              </div>

              <div className="space-y-4">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
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
                  ].map((s) => (
                    <div key={s.label} className="space-y-1">
                      <div className="text-2xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>{s.value}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-white/40" style={{ fontSize: 11, fontFamily: "Inter, sans-serif" }}>
                  ¹ Dados reais — clínica veterinária de médio porte, interior do RJ — semana 24–31/03/2026.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollParaFormulario}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-[#0D1F3C] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                  style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
                >
                  <MessageCircle size={20} />
                  Calcular quanto estou perdendo
                </button>
                <a
                  href="#solucao"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white border border-white/20 hover:border-[#00C896]/50 hover:bg-white/5 transition-all duration-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Ver como funciona
                </a>
              </div>
            </div>

            {/* Coluna direita — Kanban screenshot */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg overflow-hidden max-h-[500px]">
                <img
                  src={KANBAN_IMG}
                  alt="Kanban de atendimentos RYVEM VET em tempo real"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", maxHeight: 480 }}
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "#EF4444", fontFamily: "Montserrat, sans-serif" }}
                >
                  94 aguardando resposta
                </div>
                <div
                  className="absolute top-12 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-[#0D1F3C]"
                  style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif" }}
                >
                  Resposta em 7s
                </div>
                <div
                  className="absolute bottom-16 left-4 px-4 py-3 rounded-xl shadow-xl"
                  style={{ background: "#0D1F3C", border: "1px solid rgba(0,200,150,0.3)" }}
                >
                  <div className="text-3xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>232</div>
                  <div className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>tutores atendidos</div>
                  <div className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>em 7 dias · clínica interior RJ</div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 rounded-b-2xl"
                  style={{ background: "linear-gradient(to top, rgba(13,31,60,0.95), transparent)" }}
                >
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

      {/* ─── 2. FRUSTRAÇÕES ─────────────────────────────────────────── */}
      <FrustracoesSection />

      {/* ─── 3. PROBLEMA ────────────────────────────────────────────── */}
      <ProblemSection />

      {/* ─── 4. SOLUÇÃO ─────────────────────────────────────────────── */}
      <SolutionSection />

      {/* ─── 5. CALCULADORA + FORMULÁRIO ────────────────────────────── */}
      <section
        id="formulario"
        ref={formularioRef}
        className="py-24"
        style={{ background: "#F5F7FA" }}
      >
        <div className="max-w-2xl mx-auto px-6">

          {/* ── ETAPA: calculadora ── */}
          {etapa === "calculadora" && (
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D1F3C]/20 bg-[#0D1F3C]/5 text-[#0D1F3C] text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                  Diagnóstico gratuito
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-black text-[#0D1F3C] leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Você já está convicto.<br />
                  <span style={{ color: "#00C896" }}>Agora veja o número real.</span>
                </h2>
                <p className="text-[#0D1F3C]/60 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Preencha os dois campos abaixo e descubra quanto sua clínica pode estar deixando de faturar todo mês.
                </p>
              </div>

              <div
                className="rounded-3xl p-8 space-y-6"
                style={{ background: "#fff", boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(13,31,60,0.60)", fontFamily: "Inter, sans-serif" }}
                  >
                    Calcule sua perda mensal
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}>
                      Atendimentos por dia
                    </label>
                    <input
                      type="number" min={1} max={200} placeholder="Ex: 15"
                      value={atendimentos} onChange={(e) => setAtendimentos(e.target.value)}
                      className={inputLight} style={inputLightStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}>
                      Ticket médio da consulta (R$)
                    </label>
                    <input
                      type="number" min={50} max={2000} placeholder="Ex: 250"
                      value={ticket} onChange={(e) => setTicket(e.target.value)}
                      className={inputLight} style={inputLightStyle}
                    />
                  </div>
                </div>

                {erro && <p className="text-xs" style={{ color: "#EF4444" }}>{erro}</p>}

                <button
                  onClick={calcular}
                  className="w-full py-4 rounded-xl font-bold text-[#0D1F3C] transition-all hover:brightness-110 hover:scale-[1.01] active:scale-95"
                  style={{ background: "#00C896", fontFamily: "Montserrat, sans-serif", fontSize: 15 }}
                >
                  Calcular minha perda mensal →
                </button>

                <p className="text-center" style={{ fontSize: 11, color: "rgba(13,31,60,0.35)", fontFamily: "Inter, sans-serif" }}>
                  Cálculo baseado em dados reais de clínicas veterinárias brasileiras.
                </p>
              </div>
            </div>
          )}

          {/* ── ETAPA: formulário (após calcular) ── */}
          {etapa === "formulario" && (
            <div ref={resultadoRef} className="space-y-6">

              {/* Card resultado */}
              <div
                className="rounded-3xl p-8 text-center space-y-4"
                style={{ background: "#fff", boxShadow: "0 4px 32px rgba(0,0,0,0.10)" }}
              >
                <p className="text-sm" style={{ color: "rgba(13,31,60,0.60)", fontFamily: "Inter, sans-serif" }}>
                  Com {atendimentos} atendimentos/dia e ticket R$ {ticket}, sua clínica pode estar perdendo:
                </p>
                <div className="text-5xl font-black" style={{ color: "#EF4444", fontFamily: "Montserrat, sans-serif" }}>
                  R$ {perdaMensal !== null ? formatarReais(perdaMensal) : "—"}
                </div>
                <p className="text-xs" style={{ color: "rgba(13,31,60,0.60)", fontFamily: "Inter, sans-serif" }}>
                  por mês em atendimentos não realizados¹
                </p>
                <p className="text-xs" style={{ color: "rgba(13,31,60,0.30)", fontFamily: "Inter, sans-serif" }}>
                  ¹ Estimativa baseada em 30% de perda de contatos não respondidos e 22 dias úteis. Dado real — clínica veterinária de médio porte, interior do RJ, março 2026.
                </p>
                <hr style={{ borderColor: "rgba(13,31,60,0.08)" }} />
                <p className="text-lg font-bold" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>
                  Quer saber o número exato da sua clínica?
                </p>
                <p className="text-sm" style={{ color: "rgba(13,31,60,0.60)", fontFamily: "Inter, sans-serif" }}>
                  Preencha abaixo para receber seu diagnóstico gratuito em até 24h.
                </p>
              </div>

              {/* Campos */}
              <div className="space-y-4">
                {([
                  { label: "Nome completo", type: "text", placeholder: "Dr. João Silva", value: nome, onChange: setNome },
                  { label: "Cargo", type: "text", placeholder: "Proprietário, Sócio, Diretor...", value: cargo, onChange: setCargo },
                  { label: "WhatsApp", type: "tel", placeholder: "(22) 99999-9999", value: whatsapp, onChange: setWhatsapp },
                ] as const).map((f) => (
                  <div key={f.label}>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type} placeholder={f.placeholder} value={f.value}
                      onChange={(e) => f.onChange(e.target.value)}
                      className={inputLight} style={inputLightStyle}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}>
                    Atendimentos por dia
                  </label>
                  <input
                    type="number" value={atendimentos} onChange={(e) => setAtendimentos(e.target.value)}
                    className={inputLight} style={inputLightStyle}
                  />
                </div>

                {erro && <p className="text-xs" style={{ color: "#EF4444" }}>{erro}</p>}

                <button
                  onClick={submeter} disabled={loading}
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:brightness-110 hover:scale-[1.01] active:scale-95 disabled:opacity-60"
                  style={{ background: "#00C896", color: "#0D1F3C", fontFamily: "Montserrat, sans-serif", fontSize: 15 }}
                >
                  <MessageCircle size={20} />
                  {loading ? "Enviando..." : "Quero meu diagnóstico gratuito"}
                </button>

                <a
                  href={CALENDLY} target="_blank" rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-semibold flex items-center justify-center transition-all hover:bg-[#0D1F3C]/5"
                  style={{ border: "1px solid rgba(13,31,60,0.20)", color: "#0D1F3C", fontFamily: "Inter, sans-serif", fontSize: 14 }}
                >
                  Prefiro agendar direto
                </a>

                <p className="text-center" style={{ fontSize: 12, color: "rgba(13,31,60,0.40)", fontFamily: "Inter, sans-serif" }}>
                  30 minutos. Sem compromisso. Sem cartão.
                </p>
              </div>
            </div>
          )}

          {/* ── ETAPA: confirmação ── */}
          {etapa === "confirmacao" && (
            <div ref={confirmacaoRef} className="text-center space-y-6 py-8">
              <CheckCircle size={64} color="#00C896" className="mx-auto" />
              <h2 className="text-3xl font-black" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>
                Diagnóstico recebido.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(13,31,60,0.65)", fontFamily: "Inter, sans-serif" }}>
                Nossa equipe vai entrar em contato pelo WhatsApp em até 24 horas com o diagnóstico completo da sua clínica.
              </p>
              <a
                href={CALENDLY} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all hover:bg-[#00C896]/10"
                style={{ border: "1px solid rgba(0,200,150,0.40)", color: "#00C896", fontFamily: "Inter, sans-serif" }}
              >
                Prefiro agendar agora
              </a>
            </div>
          )}

        </div>
      </section>

      {/* ─── 6. PROVA SOCIAL ANÔNIMA ────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0D1F3C" }}>
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16 space-y-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 text-[#00C896] text-sm font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
              Resultados documentados
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Nossos clientes têm seus dados protegidos.<br />
              <span style={{ color: "#00C896" }}>Mas os resultados são documentados.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Todos os dados abaixo são de clínicas reais. Os nomes foram omitidos a pedido dos proprietários.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto">
            {[
              { value: "232", label: "tutores atendidos" },
              { value: "R$ 9.600", label: "receita preservada/mês" },
              { value: "7 dias", label: "para aparecer no resultado" },
            ].map((s) => (
              <div key={s.label} className="text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#00C896", fontFamily: "Montserrat, sans-serif" }}>
                  {s.value}
                </div>
                <div className="text-xs text-white/50 leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/25 -mt-12 mb-16" style={{ fontFamily: "Inter, sans-serif" }}>
            ¹ Dados reais — clínica veterinária de médio porte, interior do RJ, março 2026.
          </p>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                texto: "Antes a gente perdia paciente toda semana sem nem saber. Agora cada contato é atendido. A diferença apareceu no caixa logo na primeira semana.",
                autor: "Pedro L.",
                cargo: "Proprietário · interior do RJ",
                plano: "RYVEM VET DIRETOR",
                cor: "#00C896",
              },
              {
                texto: "A gente não tinha noção de quantos tutores a gente perdia por não responder rápido. Agora a clínica responde em segundos e o movimento aumentou visivelmente.",
                autor: "Gestor",
                cargo: "Clínica veterinária · interior do RJ",
                plano: "RYVEM VET AGENTE",
                cor: "#3B82F6",
              },
            ].map((d) => (
              <div
                key={d.plano}
                className="rounded-2xl p-8 relative overflow-hidden space-y-5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: d.cor }} />

                <div className="flex gap-1 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={d.cor}>
                      <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z" />
                    </svg>
                  ))}
                </div>

                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
                  "{d.texto}"
                </p>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>{d.autor}</p>
                    <p className="text-xs text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>{d.cargo}</p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                    style={{ color: d.cor, background: `${d.cor}22`, fontFamily: "Inter, sans-serif" }}
                  >
                    {d.plano}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 7. GARANTIA ────────────────────────────────────────────── */}
      <GuaranteeSection />

      {/* ─── 8. CTA FINAL ───────────────────────────────────────────── */}
      <section className="py-24 text-center" style={{ background: "#00C896" }}>
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}>
            Calcule agora quanto sua clínica está perdendo.
          </h2>
          <p className="text-base" style={{ color: "rgba(13,31,60,0.70)", fontFamily: "Inter, sans-serif" }}>
            30 minutos de diagnóstico. Sem compromisso. Sem cartão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollParaFormulario}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-white transition-all hover:brightness-90 hover:scale-105 active:scale-95"
              style={{ background: "#0D1F3C", fontFamily: "Montserrat, sans-serif", fontSize: 15 }}
            >
              <MessageCircle size={20} />
              Fazer meu diagnóstico gratuito
            </button>
            <a
              href={CALENDLY} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold transition-all hover:bg-[#0D1F3C]/10"
              style={{ border: "1px solid rgba(13,31,60,0.30)", color: "#0D1F3C", fontFamily: "Inter, sans-serif", fontSize: 15 }}
            >
              Prefiro agendar direto
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. FOOTER MÍNIMO ───────────────────────────────────────── */}
      <footer className="py-8 text-center" style={{ background: "#060f1e" }}>
        <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.30)", fontFamily: "Inter, sans-serif" }}>
          © 2026 DMG Serviços Empresariais Ltda — CNPJ 35.416.764/0001-47 · Rua Romualdo Machado, 122 · Nova Friburgo/RJ
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {[
            { label: "Política de Privacidade", href: "/politica-de-privacidade" },
            { label: "Termos de Uso", href: "/termos-de-uso" },
            { label: "LGPD", href: "/conformidade-lgpd" },
          ].map((l) => (
            <a
              key={l.href} href={l.href}
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
