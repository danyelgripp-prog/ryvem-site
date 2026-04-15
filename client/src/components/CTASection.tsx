import { useState } from "react";
import { ArrowRight, CheckCircle, Shield, Clock, Zap } from "lucide-react";

const LOGO_DARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/vetiva_logo_dark_37189109.png";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    revenue: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="diagnostico"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(0, 200, 150, 0.08) 0%, transparent 60%), linear-gradient(135deg, #0D1F3C 0%, #0f2847 100%)",
      }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,150,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Value Proposition */}
          <div className="space-y-8">
            <div className="space-y-4">
              <img
                src={LOGO_DARK_URL}
                alt="Vetiva"
                className="h-10 w-auto object-contain mb-2"
                style={{ maxWidth: "160px" }}
              />
              <div className="vetiva-badge w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] inline-block" />
                Diagnóstico Gratuito
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Descubra Quanto Você
                <br />
                <span style={{ color: "#00C896" }}>Está Deixando na Mesa.</span>
              </h2>
              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Em uma sessão de 30 minutos, analisamos os dados da sua clínica e mostramos
                exatamente quanto você pode recuperar — com números reais, sem compromisso.
              </p>
            </div>

            {/* What you get */}
            <div className="space-y-4">
              <p
                className="text-white/50 text-xs uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                O que você recebe no diagnóstico
              </p>
              {[
                "Mapeamento completo da receita oculta da sua clínica",
                "Identificação dos 3 maiores vazamentos de receita",
                "Projeção de crescimento para os próximos 90 dias",
                "Plano de ação personalizado com as primeiras 5 ações",
                "Comparativo com clínicas do mesmo porte e região",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} style={{ color: "#00C896", marginTop: "2px", flexShrink: 0 }} />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "100% Gratuito e Sem Compromisso" },
                { icon: Clock, text: "30 Minutos de Sessão" },
                { icon: Zap, text: "Resultados em Tempo Real" },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto"
                    style={{ background: "rgba(0,200,150,0.12)" }}
                  >
                    <item.icon size={18} style={{ color: "#00C896" }} />
                  </div>
                  <p
                    className="text-white/50 text-xs leading-snug"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div
              className="rounded-2xl p-8"
              style={{
                background: "white",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ background: "rgba(0,200,150,0.12)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#00C896" }} />
                  </div>
                  <h3
                    className="text-2xl font-black"
                    style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                  >
                    Diagnóstico Agendado!
                  </h3>
                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Nossa equipe entrará em contato em até 24 horas para confirmar o horário
                    do seu diagnóstico gratuito. Verifique seu e-mail e WhatsApp.
                  </p>
                  <div
                    className="rounded-xl p-4 text-sm"
                    style={{
                      background: "rgba(0,200,150,0.08)",
                      border: "1px solid rgba(0,200,150,0.2)",
                      color: "#0D1F3C",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Enquanto aguarda, explore os resultados de outras clínicas na seção acima.
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6 space-y-1">
                    <h3
                      className="text-xl font-black"
                      style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                    >
                      Agende Seu Diagnóstico Gratuito
                    </h3>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Preencha os dados abaixo. Nossa equipe entrará em contato em até 24h.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                        >
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr(a). Seu Nome"
                          className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all"
                          style={{
                            border: "1px solid rgba(13,31,60,0.15)",
                            fontFamily: "Inter, sans-serif",
                            color: "#0D1F3C",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#00C896")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(13,31,60,0.15)")}
                        />
                      </div>

                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all"
                          style={{
                            border: "1px solid rgba(13,31,60,0.15)",
                            fontFamily: "Inter, sans-serif",
                            color: "#0D1F3C",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#00C896")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(13,31,60,0.15)")}
                        />
                      </div>

                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                        >
                          WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all"
                          style={{
                            border: "1px solid rgba(13,31,60,0.15)",
                            fontFamily: "Inter, sans-serif",
                            color: "#0D1F3C",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#00C896")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(13,31,60,0.15)")}
                        />
                      </div>

                      <div className="col-span-2">
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                        >
                          Nome da Clínica *
                        </label>
                        <input
                          type="text"
                          name="clinic"
                          required
                          value={formData.clinic}
                          onChange={handleChange}
                          placeholder="Clínica Veterinária..."
                          className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all"
                          style={{
                            border: "1px solid rgba(13,31,60,0.15)",
                            fontFamily: "Inter, sans-serif",
                            color: "#0D1F3C",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#00C896")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(13,31,60,0.15)")}
                        />
                      </div>

                      <div className="col-span-2">
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: "#0D1F3C", fontFamily: "Montserrat, sans-serif" }}
                        >
                          Faturamento Mensal Aproximado
                        </label>
                        <select
                          name="revenue"
                          value={formData.revenue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all appearance-none"
                          style={{
                            border: "1px solid rgba(13,31,60,0.15)",
                            fontFamily: "Inter, sans-serif",
                            color: formData.revenue ? "#0D1F3C" : "#9CA3AF",
                          }}
                        >
                          <option value="">Selecione uma faixa</option>
                          <option value="15-30k">R$ 15.000 – R$ 30.000</option>
                          <option value="30-60k">R$ 30.000 – R$ 60.000</option>
                          <option value="60-100k">R$ 60.000 – R$ 100.000</option>
                          <option value="100k+">Acima de R$ 100.000</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-cta w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0D1F3C]/30 border-t-[#0D1F3C] rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Quero Meu Diagnóstico Gratuito
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <p
                      className="text-center text-xs text-gray-400"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Seus dados estão protegidos. Não enviamos spam.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
