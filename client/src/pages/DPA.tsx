import LegalLayout from "@/components/ryvem/LegalLayout";

export default function DPA() {
  return (
    <LegalLayout title="DPA" lastUpdated="14 de abril de 2026">
      <p>
        Este <strong>Acordo de Processamento de Dados</strong> (Data Processing Agreement — DPA)
        estabelece os termos sob os quais a <strong>DMG Serviços Empresariais Ltda</strong> (RYVEM),
        inscrita no CNPJ 35.416.764/0001-47, processa dados pessoais em nome de seus clientes
        ("Controladores") no contexto dos produtos <strong>Vetiva</strong> e <strong>Magic SDR</strong>.
      </p>
      <p>
        Este DPA complementa os contratos de serviço celebrados entre a RYVEM e seus clientes e
        prevalece sobre eles em matéria de proteção de dados pessoais.
      </p>

      <h2>1. Definições</h2>
      <ul>
        <li><strong>Controlador:</strong> o cliente que determina as finalidades e os meios do tratamento de dados pessoais</li>
        <li><strong>Operadora:</strong> a RYVEM, que processa dados pessoais em nome do Controlador</li>
        <li><strong>Titular:</strong> a pessoa natural a quem se referem os dados pessoais tratados</li>
        <li><strong>Dados Pessoais:</strong> qualquer informação relacionada a pessoa natural identificada ou identificável</li>
        <li><strong>Tratamento:</strong> qualquer operação realizada com dados pessoais</li>
        <li><strong>Incidente de Segurança:</strong> violação de segurança que resulte em acesso não autorizado, perda, alteração ou divulgação de dados pessoais</li>
      </ul>

      <h2>2. Objeto e Escopo do Tratamento</h2>
      <p>
        A RYVEM processa dados pessoais exclusivamente para fins de prestação dos serviços contratados,
        incluindo:
      </p>
      <h3>2.1 Produto Vetiva</h3>
      <ul>
        <li><strong>Tipos de dados:</strong> nome, telefone, e-mail, histórico de atendimento, dados de agendamento e informações de saúde animal de tutores e pacientes</li>
        <li><strong>Finalidade:</strong> automação de atendimento via WhatsApp, gestão de relacionamento com tutores, integração com ERP Vetus</li>
        <li><strong>Titulares:</strong> tutores de animais clientes da clínica veterinária contratante</li>
      </ul>
      <h3>2.2 Produto Magic SDR</h3>
      <ul>
        <li><strong>Tipos de dados:</strong> dados públicos de empresas, nome e cargo de responsáveis, dados de contato comercial</li>
        <li><strong>Finalidade:</strong> prospecção B2B, avaliação de qualidade de atendimento digital, geração de relatórios comerciais</li>
        <li><strong>Titulares:</strong> representantes de empresas prospectadas pelo cliente contratante</li>
      </ul>

      <h2>3. Obrigações da RYVEM como Operadora</h2>
      <p>A RYVEM se compromete a:</p>
      <ul>
        <li>Processar dados pessoais apenas conforme instruções documentadas do Controlador</li>
        <li>Garantir que pessoas autorizadas a tratar os dados estejam vinculadas a obrigações de confidencialidade</li>
        <li>Implementar medidas técnicas e organizacionais adequadas para garantir a segurança dos dados</li>
        <li>Não subcontratar o tratamento de dados sem autorização prévia e por escrito do Controlador</li>
        <li>Auxiliar o Controlador no cumprimento de obrigações perante titulares (acesso, correção, exclusão)</li>
        <li>Notificar o Controlador sobre incidentes de segurança em até 48 horas após a ciência do evento</li>
        <li>Eliminar ou devolver todos os dados ao término do contrato, conforme instrução do Controlador</li>
        <li>Disponibilizar informações necessárias para demonstrar conformidade com a LGPD</li>
      </ul>

      <h2>4. Obrigações do Controlador</h2>
      <p>O cliente Controlador se compromete a:</p>
      <ul>
        <li>Garantir que possui base legal adequada para o tratamento dos dados fornecidos à RYVEM</li>
        <li>Obter os consentimentos necessários dos titulares antes de compartilhar seus dados</li>
        <li>Fornecer instruções claras e documentadas sobre o tratamento de dados</li>
        <li>Notificar a RYVEM sobre quaisquer alterações nas instruções de tratamento</li>
        <li>Garantir que os dados fornecidos são precisos e atualizados</li>
      </ul>

      <h2>5. Suboperadores</h2>
      <p>
        A RYVEM utiliza os seguintes suboperadores para a prestação dos serviços, todos vinculados
        a obrigações equivalentes de proteção de dados:
      </p>
      <ul>
        <li><strong>Meta Platforms (WhatsApp Business API):</strong> infraestrutura de mensagens</li>
        <li><strong>Provedores de computação em nuvem:</strong> hospedagem e processamento de dados</li>
        <li><strong>Ferramentas de CRM e análise:</strong> gestão de relacionamento e métricas</li>
      </ul>
      <p>
        O Controlador autoriza o uso dos suboperadores listados acima. A RYVEM notificará o
        Controlador sobre quaisquer alterações nos suboperadores com antecedência mínima de 30 dias.
      </p>

      <h2>6. Segurança dos Dados</h2>
      <p>
        A RYVEM implementa as seguintes medidas de segurança:
      </p>
      <ul>
        <li>Criptografia em trânsito (TLS 1.2+) e em repouso (AES-256)</li>
        <li>Controle de acesso baseado em função com princípio do menor privilégio</li>
        <li>Autenticação multifator para acesso a sistemas com dados pessoais</li>
        <li>Monitoramento contínuo de acessos e detecção de anomalias</li>
        <li>Backups regulares com procedimentos de recuperação testados</li>
        <li>Testes periódicos de segurança e avaliações de vulnerabilidade</li>
      </ul>

      <h2>7. Transferência Internacional de Dados</h2>
      <p>
        Quando dados são transferidos para fora do Brasil (ex.: servidores da Meta nos EUA), a RYVEM
        garante que existam salvaguardas adequadas conforme a LGPD, incluindo cláusulas contratuais
        padrão e conformidade com regulamentações equivalentes.
      </p>

      <h2>8. Direitos dos Titulares</h2>
      <p>
        Quando a RYVEM receber solicitações de titulares relacionadas a dados tratados em nome do
        Controlador, encaminhará a solicitação ao Controlador em até 48 horas. A RYVEM auxiliará o
        Controlador na resposta às solicitações dentro dos prazos legais.
      </p>

      <h2>9. Incidentes de Segurança</h2>
      <p>
        Em caso de incidente de segurança envolvendo dados pessoais tratados em nome do Controlador,
        a RYVEM:
      </p>
      <ul>
        <li>Notificará o Controlador em até 48 horas após a ciência do incidente</li>
        <li>Fornecerá informações sobre a natureza, extensão e impacto do incidente</li>
        <li>Tomará medidas imediatas para conter e remediar o incidente</li>
        <li>Cooperará com o Controlador na notificação à ANPD e aos titulares, quando aplicável</li>
      </ul>

      <h2>10. Vigência e Rescisão</h2>
      <p>
        Este DPA vigora pelo mesmo período do contrato de serviço principal. Após a rescisão do
        contrato, a RYVEM eliminará ou devolverá todos os dados pessoais tratados em nome do
        Controlador, conforme sua instrução, no prazo de 30 dias.
      </p>

      <h2>11. Conformidade com a API do WhatsApp Business</h2>
      <p>
        Como parceiro da API do WhatsApp Business da Meta, a RYVEM assegura que:
      </p>
      <ul>
        <li>Todos os clientes que utilizam o Vetiva obtêm opt-in explícito dos usuários finais antes de enviar mensagens via WhatsApp</li>
        <li>As mensagens enviadas cumprem as Políticas de Uso Aceitável do WhatsApp Business</li>
        <li>Dados de mensagens não são utilizados para fins além da prestação do serviço contratado</li>
        <li>Os clientes são informados sobre as responsabilidades de conformidade com as políticas da Meta</li>
      </ul>

      <h2>12. Contato</h2>
      <p>
        Para questões relacionadas a este DPA ou para solicitar a assinatura de um DPA personalizado:
      </p>
      <ul>
        <li><strong>E-mail:</strong> <a href="mailto:contato@ryvem.com.br">contato@ryvem.com.br</a></li>
        <li><strong>Assunto:</strong> "DPA — [nome da empresa]"</li>
        <li><strong>Endereço:</strong> Rua Romualdo Machado, 122, Catarcione, Nova Friburgo/RJ — CEP 28.614-250</li>
      </ul>
    </LegalLayout>
  );
}
