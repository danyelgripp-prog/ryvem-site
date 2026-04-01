import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "#0B1426" }}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:opacity-80" style={{ color: "#00C896", fontFamily: "Inter, sans-serif" }}>
            <ArrowLeft size={16} />
            Voltar ao site
          </a>
        </Link>

        <h1 className="text-3xl lg:text-4xl font-black text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Política de Privacidade
        </h1>
        <p className="text-white/40 text-sm mb-12" style={{ fontFamily: "Inter, sans-serif" }}>
          Última atualização: 1 de abril de 2026
        </p>

        <div className="space-y-10 text-white/70 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>1. Controlador dos Dados</h2>
            <p>
              <strong className="text-white">Ryvem Tecnologia Ltda</strong><br />
              CNPJ: 35.416.764/0001-47<br />
              E-mail: contato@ryvem.com.br
            </p>
            <p className="mt-2">
              A Ryvem é a controladora dos dados pessoais coletados por meio da plataforma Vetiva,
              nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>2. Dados Coletados</h2>
            <p>No contexto da prestação de serviço, podemos coletar:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-white/90">Dados do representante da clínica:</strong> nome, telefone WhatsApp, e-mail;</li>
              <li><strong className="text-white/90">Dados dos tutores (clientes finais):</strong> nome, número de telefone WhatsApp, histórico de conversas com o agente de atendimento;</li>
              <li><strong className="text-white/90">Dados dos pets:</strong> nome, espécie, raça, idade, histórico de vacinas, consultas e procedimentos — conforme integrado pelo ERP da clínica;</li>
              <li><strong className="text-white/90">Dados de uso:</strong> logs de interação, horários de atendimento, métricas de desempenho do agente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>3. Finalidade do Tratamento</h2>
            <p>Os dados são tratados para as seguintes finalidades:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Prestação do serviço de atendimento automatizado via WhatsApp;</li>
              <li>Agendamento de consultas e procedimentos veterinários;</li>
              <li>Envio de lembretes de vacinas, retornos e campanhas de saúde animal;</li>
              <li>Geração de relatórios gerenciais para a clínica contratante;</li>
              <li>Melhoria contínua da qualidade do atendimento do agente de IA.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>4. Base Legal</h2>
            <p>
              O tratamento de dados pessoais se fundamenta na <strong className="text-white/90">execução de contrato</strong> ou
              de procedimentos preliminares relacionados a contrato do qual o titular seja parte
              (art. 7º, inciso V, da LGPD).
            </p>
            <p className="mt-2">
              Para dados sensíveis de saúde animal, o tratamento se justifica pelo legítimo interesse
              na prestação do serviço veterinário contratado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>5. Compartilhamento de Dados</h2>
            <p>Os dados poderão ser compartilhados com os seguintes operadores, estritamente para viabilizar o serviço:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-white/90">Anthropic, Inc.</strong> — processamento de inteligência artificial (geração de respostas do agente);</li>
              <li><strong className="text-white/90">Railway Corp.</strong> — infraestrutura de hospedagem e armazenamento de dados.</li>
            </ul>
            <p className="mt-2">
              Ambos atuam como operadores de dados, nos termos da LGPD, e estão sujeitos a
              cláusulas contratuais de proteção de dados. Não compartilhamos dados com terceiros
              para fins de marketing ou publicidade.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>6. Prazo de Retenção</h2>
            <p>
              Os dados pessoais serão armazenados enquanto durar a relação contratual com a clínica.
              Após o encerramento do contrato, os dados serão mantidos por até <strong className="text-white/90">5 (cinco) anos</strong> para
              cumprimento de obrigações legais e regulatórias, incluindo eventual exercício regular de
              direitos em processo judicial ou administrativo.
            </p>
            <p className="mt-2">
              Após esse prazo, os dados serão anonimizados ou excluídos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>7. Direitos do Titular</h2>
            <p>Nos termos da LGPD, o titular dos dados tem direito a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos dados pessoais;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
              <li>Eliminação dos dados tratados com consentimento;</li>
              <li>Revogação do consentimento, quando aplicável.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail:{" "}
              <a href="mailto:contato@ryvem.com.br" className="underline" style={{ color: "#00C896" }}>
                contato@ryvem.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>8. Encarregado de Dados (DPO)</h2>
            <p>
              O encarregado pelo tratamento de dados pessoais pode ser contatado pelo e-mail:{" "}
              <a href="mailto:contato@ryvem.com.br" className="underline" style={{ color: "#00C896" }}>
                contato@ryvem.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>9. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais
              contra acesso não autorizado, destruição, perda, alteração ou qualquer forma de
              tratamento inadequado. Isso inclui criptografia AES-256 para dados sensíveis,
              conexões seguras (HTTPS/TLS), controle de acesso por tenant e backups automáticos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>10. Alterações nesta Política</h2>
            <p>
              Esta política poderá ser atualizada periodicamente. Notificaremos as clínicas
              contratantes sobre alterações significativas por e-mail ou pelo painel administrativo.
              A versão mais recente estará sempre disponível nesta página.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-white/20 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            Ryvem Tecnologia Ltda — CNPJ 35.416.764/0001-47
          </p>
        </div>
      </div>
    </div>
  );
}
