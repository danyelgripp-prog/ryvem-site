# Guia de Replicação — Vetiva Website
## Para uso com Claude AI (Anthropic)

---

## 1. VISÃO GERAL DO PROJETO

**Nome do projeto:** Vetiva — Agente de IA para Clínicas Veterinárias  
**Tipo:** Landing page de conversão (produto SaaS)  
**Público-alvo:** Donos de clínicas veterinárias no Brasil  
**Objetivo:** Converter visitantes em leads via WhatsApp (diagnóstico gratuito)

---

## 2. STACK TECNOLÓGICA

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Frontend | React | 19 |
| Estilização | Tailwind CSS | 4 |
| Componentes UI | shadcn/ui | latest |
| Backend | Express | 4 |
| API | tRPC | 11 |
| Banco de dados | MySQL (Drizzle ORM) | latest |
| Build tool | Vite | latest |
| Linguagem | TypeScript | latest |
| Runtime | Node.js | 22 |

---

## 3. PALETA DE CORES E IDENTIDADE VISUAL

```css
/* Cores principais — definidas em client/src/index.css */
--vetiva-navy: #0D1F3C;      /* Fundo principal, sidebar */
--vetiva-green: #00C896;     /* Cor de destaque, CTAs, links */
--vetiva-light: #F5F7FA;     /* Fundo de seções claras */
--vetiva-dark-bg: #0a1628;   /* Fundo hero e seções escuras */
--vetiva-card-dark: #112240; /* Cards em fundo escuro */
--vetiva-border: #1e3a5f;    /* Bordas em fundo escuro */
```

**Fontes:**
- Títulos: `Montserrat` (Google Fonts, weights: 700, 800, 900)
- Corpo: `Inter` (Google Fonts, weights: 400, 500, 600)

**Tema:** Dark (fundo escuro `#0D1F3C` com texto branco e destaque verde `#00C896`)

---

## 4. ESTRUTURA DE ARQUIVOS DO PROJETO

```
vetiva_website/
├── client/
│   ├── index.html                    ← Google Fonts importadas aqui
│   └── src/
│       ├── index.css                 ← Variáveis CSS, tema, fontes globais
│       ├── main.tsx                  ← Providers (ThemeProvider, tRPC)
│       ├── App.tsx                   ← Roteamento (wouter)
│       ├── pages/
│       │   └── Home.tsx              ← Monta todas as seções em ordem
│       └── components/
│           ├── Navbar.tsx            ← Navegação fixa com CTA WhatsApp
│           ├── HeroSection.tsx       ← Headline + mockup Kanban + métricas
│           ├── ProblemSection.tsx    ← Dados de receita perdida + calculadora
│           ├── SolutionSection.tsx   ← 4 pilares + "O que o Agente não faz"
│           ├── TestimonialSection.tsx← Depoimento Pedro Fripet + 4 métricas
│           ├── HowItWorksSection.tsx ← 4 passos com prazos reais
│           ├── ComparisonSection.tsx ← Chatbot Genérico vs Agente Vetiva
│           ├── AnchorPricingSection.tsx ← Custo de inação vs preço Vetiva
│           ├── PricingSection.tsx    ← 2 planos: Agent + Intelligence
│           ├── GuaranteeSection.tsx  ← Garantia com mecanismo verificável
│           ├── FAQSection.tsx        ← 6 objeções técnicas (accordion)
│           ├── FinalCTASection.tsx   ← CTA final com urgência
│           └── Footer.tsx            ← Links, contato, copyright
├── drizzle/
│   └── schema.ts                     ← Schema do banco (tabela users)
├── server/
│   ├── routers.ts                    ← Procedures tRPC
│   └── db.ts                         ← Helpers de banco de dados
└── REPLICACAO.md                     ← Este arquivo
```

---

## 5. ORDEM DAS SEÇÕES NA HOME (client/src/pages/Home.tsx)

A landing page segue este funil de conversão, nesta ordem exata:

1. `<Navbar />` — fixa no topo
2. `<HeroSection />` — headline + prova social visual
3. `<ProblemSection />` — dor + custo de inação
4. `<SolutionSection />` — produto + transparência técnica
5. `<TestimonialSection />` — prova social com dados reais
6. `<HowItWorksSection />` — processo de implementação
7. `<ComparisonSection />` — diferenciação competitiva
8. `<AnchorPricingSection />` — ancoragem por custo de inação
9. `<PricingSection />` — planos e preços
10. `<GuaranteeSection />` — eliminação de risco
11. `<FAQSection />` — remoção de objeções
12. `<FinalCTASection />` — conversão final
13. `<Footer />` — rodapé

---

## 6. ASSETS (IMAGENS CDN)

Todas as imagens estão hospedadas em CDN. Use estas URLs diretamente:

| Asset | URL CDN | Usado em |
|-------|---------|----------|
| Logo dark | `https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/vetiva_logo_dark_37189109.png` | Navbar, Footer, CTASection, ResultsSection |
| Kanban mockup | `https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/kanban_mockup_faf3f42e.jpg` | HeroSection |
| Atendimento mockup | `https://d2xsxph8kpxj0f.cloudfront.net/310519663061774247/VACwyab7ptYEtM7zHnvqz6/atendimento_mockup_b139fbae.jpg` | SolutionSection |

**IMPORTANTE:** Não armazene imagens localmente no projeto. Use sempre as URLs CDN acima.

---

## 7. VARIÁVEIS DE AMBIENTE NECESSÁRIAS

Para replicar com funcionalidade completa (banco de dados, autenticação):

```env
DATABASE_URL=mysql://...          # String de conexão MySQL
JWT_SECRET=...                    # Segredo para cookies de sessão
VITE_APP_ID=...                   # ID do app OAuth
OAUTH_SERVER_URL=...              # URL do servidor OAuth
VITE_OAUTH_PORTAL_URL=...         # URL do portal de login
```

**Para apenas a landing page estática** (sem autenticação), nenhuma variável de ambiente é necessária — a página funciona sem backend.

---

## 8. CONTATO WHATSAPP (número comercial da Vetiva)

```
Número: (22) 99717-8962
Formato wa.me: 5522997178962
```

URLs de WhatsApp usadas nos CTAs:
- Diagnóstico gratuito: `https://wa.me/5522997178962?text=Quero%20fazer%20o%20diagn%C3%B3stico%20gratuito%20da%20Vetiva`
- Contratar Agent: `https://wa.me/5522997178962?text=Quero%20contratar%20o%20Vetiva%20Agent`
- Contratar Intelligence: `https://wa.me/5522997178962?text=Quero%20saber%20mais%20sobre%20o%20Vetiva%20Intelligence`
- Dúvida geral: `https://wa.me/5522997178962?text=Tenho%20uma%20d%C3%BuvIda%20sobre%20o%20Vetiva`

---

## 9. DADOS E MÉTRICAS USADOS NO SITE

Todos os dados abaixo são reais, extraídos do Relatório Semanal Vetiva — Fripet Clínica Veterinária, Nova Friburgo (RJ), semana 24–31/03/2026:

| Métrica | Valor | Contexto |
|---------|-------|---------|
| Tutores atendidos | 232 | Em 7 dias (semana 1) |
| Mensagens enviadas | 1.820 | Pelo Agente Vetiva |
| Tempo de resposta | 7 segundos | vs 10,7 min humano |
| Economia de mão de obra | R$ 1.077 | Na semana 1 |
| Atendimentos noturnos | 45 | Que seriam perdidos |
| Autonomia do Agente | 18% | Fase inicial |
| Receita noturna preservada | R$ 9.600/mês | Projeção com ticket R$ 200 |
| Projeção autonomia plena | R$ 8.975/mês | Em produtividade equivalente |

**Cliente de referência:** Pedro — Fripet Clínica Veterinária, Nova Friburgo (RJ)

---

## 10. PREÇOS DOS PRODUTOS

| Produto | Preço | Condições |
|---------|-------|-----------|
| Vetiva Agent | R$ 697/mês | Contrato 6 meses |
| Vetiva Agent | R$ 997/mês | Plano mensal |
| Vetiva Intelligence | Sob consulta | Diagnóstico necessário |
| Âncora (custo separado) | R$ 3.957/mês | Se montasse separado |

**Garantia:** R$ 3.000 em receita automatizada no primeiro mês ou devolução do investimento.

---

## 11. ANCORAGEM DE PREÇO (AnchorPricingSection)

Tabela de custo de inação usada na seção de ancoragem:

| Item | Custo |
|------|-------|
| CRM veterinário separado | R$ 500/mês |
| Chatbot genérico | R$ 497/mês |
| Plataforma de automação | R$ 200/mês |
| 1 cliente perdido/dia (ticket R$ 200) | R$ 4.400/mês |
| Recepcionista 24h | Inviável |
| **Total do problema** | **R$ 5.597+/mês** |
| **Vetiva Agent** | **R$ 697/mês** |

---

## 12. COMPARATIVO TÉCNICO (ComparisonSection)

10 critérios comparados entre Chatbot Genérico e Agente Vetiva:

1. Configurado com tabela de preços da clínica
2. Conhece escala médica e horários reais
3. Kanban nativo para monitorar atendimentos
4. Escala para a equipe quando necessário
5. Relatório diário de performance com dados reais
6. Limites de autonomia definidos pelo dono
7. Treinado para triagem veterinária
8. Responde perguntas básicas
9. Disponível 24h por dia
10. Integração com WhatsApp

Chatbot Genérico: ✓ apenas nos itens 8, 9, 10  
Agente Vetiva: ✓ em todos os 10 itens

---

## 13. FAQ — 6 OBJEÇÕES TÉCNICAS

1. "E se o Agente passar uma informação errada para o tutor?"
2. "O tutor vai perceber que está falando com uma IA?"
3. "Como eu sei que o Agente está funcionando corretamente?"
4. "Preciso trocar meu sistema atual para usar o Vetiva?"
5. "Quanto tempo leva para o Agente estar funcionando?"
6. "O que acontece se eu quiser cancelar?"

---

## 14. INSTRUÇÕES PARA O CLAUDE AI REPLICAR O PROJETO

### Passo 1 — Criar o projeto
Use um template React + TypeScript + Vite + Tailwind CSS 4 + shadcn/ui.

### Passo 2 — Configurar o tema
Em `index.css`, adicione as variáveis CSS da seção 3 deste documento e configure o tema dark como padrão.

### Passo 3 — Importar fontes
Em `index.html`, adicione:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Passo 4 — Criar os componentes
Crie cada componente listado na seção 5, na ordem indicada. Os arquivos `.tsx` completos estão incluídos neste ZIP.

### Passo 5 — Montar a Home
Em `pages/Home.tsx`, importe e monte todos os componentes na ordem da seção 5.

### Passo 6 — Usar as URLs CDN
Substitua qualquer referência a imagens locais pelas URLs CDN da seção 6.

### Passo 7 — Configurar os CTAs
Substitua os links de WhatsApp pelos da seção 8.

### Passo 8 — Verificar os dados
Confirme que os dados e métricas da seção 9 estão corretos em todos os componentes.

---

## 15. CONFORMIDADE LGPD

**IMPORTANTE:** Este site não deve conter nenhum dado pessoal real de clientes ou pacientes.

- As imagens do Kanban e do painel de Atendimento são mockups fictícios (Tutor A, Tutor B, etc.)
- Nenhum nome, telefone, e-mail ou trecho de conversa real de cliente pode aparecer no site
- O único número de telefone no site é o número comercial da Vetiva: (22) 99717-8962

---

## 16. COMPONENTES SHADCN/UI UTILIZADOS

Os seguintes componentes shadcn/ui são usados no projeto:

- `Accordion` — FAQSection (objeções expansíveis)
- `Button` — CTAs em todas as seções
- `Badge` — Labels de destaque
- `Card` — Cards de pricing, métricas, passos
- `Separator` — Divisores visuais

Para instalar: `npx shadcn@latest add accordion button badge card separator`

---

## 17. DECISÕES DE DESIGN

- **Tema escuro** foi escolhido para transmitir seriedade técnica ao veterinário cético
- **Verde #00C896** como cor de destaque cria contraste forte e remete a saúde/tecnologia
- **Sem animações complexas** — o público veterinário valoriza clareza sobre efeitos visuais
- **Dados com footnote** — toda métrica tem referência à fonte (Fripet, semana 24–31/03/2026)
- **Seção "O que o Agente não faz"** — transparência técnica gera mais confiança que promessas
- **Ancoragem de preço por custo de inação** — mais eficaz que ancoragem por preço anterior
- **CTA principal = "Diagnóstico gratuito"** — menos ameaçador que "Contratar" para o veterinário cético
