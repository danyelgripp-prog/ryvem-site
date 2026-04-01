import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
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
          Termos de Uso
        </h1>
        <p className="text-white/40 text-sm mb-12" style={{ fontFamily: "Inter, sans-serif" }}>
          Última atualização: 1 de abril de 2026
        </p>

        <div className="space-y-10 text-white/70 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>1. Objeto</h2>
            <p>
              Os presentes Termos de Uso regulam a contratação e utilização dos serviços
              <strong className="text-white/90"> Vetiva Agent</strong> e{" "}
              <strong className="text-white/90">Vetiva Intelligence</strong>, plataformas de atendimento
              automatizado via WhatsApp e inteligência de receita para clínicas veterinárias,
              desenvolvidas e operadas pela Ryvem Tecnologia Ltda.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>2. Partes</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white/90">Contratada:</strong> Ryvem Tecnologia Ltda, inscrita no CNPJ sob
                o nº 35.416.764/0001-47, com sede em Nova Friburgo, RJ, doravante denominada "Ryvem".
              </li>
              <li>
                <strong className="text-white/90">Contratante:</strong> Clínica veterinária ou profissional veterinário
                que contrata os serviços Vetiva, doravante denominado "Cliente".
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>3. Obrigações da Ryvem</h2>
            <p>A Ryvem se compromete a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Disponibilizar o sistema Vetiva em regime de funcionamento 24 horas por dia, 7 dias por semana, ressalvadas manutenções programadas previamente comunicadas;</li>
              <li>Prestar suporte técnico por WhatsApp em horário comercial (segunda a sexta, 9h às 18h);</li>
              <li>Manter a confidencialidade de todos os dados do Cliente e de seus clientes finais (tutores);</li>
              <li>Realizar backups diários automáticos dos dados;</li>
              <li>Notificar o Cliente em caso de incidentes de segurança que possam afetar seus dados;</li>
              <li>Realizar a configuração inicial do agente de atendimento (onboarding) em até 72 horas após a contratação.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>4. Obrigações do Cliente</h2>
            <p>O Cliente se compromete a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Utilizar o sistema de forma adequada, em conformidade com a legislação vigente e com estes Termos;</li>
              <li>Não compartilhar credenciais de acesso com terceiros não autorizados;</li>
              <li>Manter seus dados cadastrais e informações da clínica atualizados no painel;</li>
              <li>Informar a Ryvem sobre alterações em serviços, preços ou protocolos da clínica que afetem o atendimento do agente;</li>
              <li>Obter, quando necessário, o consentimento de seus clientes finais para o tratamento de dados pelo sistema;</li>
              <li>Efetuar o pagamento das mensalidades nas datas acordadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>5. Limitação de Responsabilidade</h2>
            <p>
              <strong className="text-white/90">O agente Vetiva é uma ferramenta de atendimento e relacionamento com o cliente.</strong>{" "}
              Ele não realiza diagnósticos clínicos, não prescreve medicamentos e não substitui a avaliação de um médico veterinário.
            </p>
            <p className="mt-2">
              A Ryvem <strong className="text-white/90">não se responsabiliza</strong> por:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Decisões clínicas tomadas com base em interações com o agente de atendimento;</li>
              <li>Prejuízos decorrentes de informações desatualizadas fornecidas pelo Cliente ao sistema;</li>
              <li>Indisponibilidade do serviço de WhatsApp (Meta Platforms, Inc.) ou de terceiros;</li>
              <li>Perdas indiretas, lucros cessantes ou danos incidentais;</li>
              <li>Uso indevido do sistema pelo Cliente ou por terceiros que tenham obtido acesso às credenciais do Cliente.</li>
            </ul>
            <p className="mt-2">
              A responsabilidade total da Ryvem, por qualquer causa, estará limitada ao valor
              pago pelo Cliente nos últimos 3 (três) meses de serviço.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>6. Garantia de Resultado</h2>
            <p>
              A Ryvem oferece uma garantia de resultado conforme descrita na página comercial do serviço.
              Caso o agente não gere R$ 3.000 em receita automatizada comprovada nos primeiros 30 dias,
              a equipe da Ryvem atuará como consultoria dedicada à operação do Cliente, sem prazo
              e sem custo adicional, até que o resultado seja atingido.
            </p>
            <p className="mt-2">
              A apuração da receita automatizada será feita exclusivamente por meio dos dados
              disponíveis no painel administrativo do Vetiva.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>7. Propriedade Intelectual</h2>
            <p>
              Todo o software, algoritmos, interfaces, marcas, logotipos e conteúdos relacionados
              à plataforma Vetiva são de propriedade exclusiva da Ryvem Tecnologia Ltda.
              A contratação do serviço não confere ao Cliente qualquer direito de propriedade
              intelectual sobre o sistema.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>8. Vigência e Rescisão</h2>
            <p>
              O contrato terá vigência conforme o plano contratado pelo Cliente:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-white/90">Plano mensal:</strong> renova automaticamente a cada 30 dias, podendo ser cancelado a qualquer momento com aviso prévio de 30 dias;</li>
              <li><strong className="text-white/90">Plano semestral:</strong> vigência de 6 meses, com renovação automática por igual período, podendo ser cancelado com aviso prévio de 30 dias antes do término.</li>
            </ul>
            <p className="mt-2">
              Em caso de rescisão, os dados do Cliente serão mantidos por 30 dias para eventual
              migração, após o que serão tratados conforme a Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>9. Confidencialidade</h2>
            <p>
              As partes se comprometem a manter sigilo sobre todas as informações confidenciais
              trocadas durante a vigência do contrato. Essa obrigação persiste por 2 (dois) anos
              após o encerramento da relação contratual.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>10. Foro</h2>
            <p>
              Fica eleito o foro da <strong className="text-white/90">Comarca de Nova Friburgo, Estado do Rio de Janeiro</strong>,
              para dirimir quaisquer controvérsias oriundas destes Termos de Uso, com renúncia
              expressa de qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>11. Disposições Gerais</h2>
            <p>
              A eventual tolerância da Ryvem quanto ao descumprimento de qualquer disposição
              destes Termos não constituirá renúncia ao direito de exigir o cumprimento da
              obrigação. Caso qualquer cláusula destes Termos seja considerada inválida ou
              inexequível, as demais cláusulas permanecerão em pleno vigor e efeito.
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
