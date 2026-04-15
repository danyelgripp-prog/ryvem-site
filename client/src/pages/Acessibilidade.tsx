import LegalLayout from "@/components/ryvem/LegalLayout";

export default function Acessibilidade() {
  return (
    <LegalLayout title="Acessibilidade" lastUpdated="14 de abril de 2026">
      <p>
        A <strong>RYVEM</strong> (DMG Serviços Empresariais Ltda) está comprometida em tornar o site
        <strong> ryvem.com.br</strong> acessível ao maior número possível de pessoas, independentemente
        de suas capacidades ou tecnologias utilizadas.
      </p>
      <p>
        Esta Declaração de Acessibilidade descreve o estado atual de acessibilidade do site, as
        medidas adotadas e como reportar problemas.
      </p>

      <h2>1. Padrões de Acessibilidade</h2>
      <p>
        Buscamos conformidade com as <strong>Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1</strong>,
        nível AA, publicadas pelo World Wide Web Consortium (W3C), bem como com as recomendações do
        <strong> eMAG</strong> (Modelo de Acessibilidade em Governo Eletrônico) para sites brasileiros.
      </p>

      <h2>2. Medidas Adotadas</h2>
      <p>
        Para melhorar a acessibilidade do site, adotamos as seguintes medidas:
      </p>
      <h3>2.1 Design e Estrutura</h3>
      <ul>
        <li>Hierarquia semântica de títulos (H1, H2, H3) para facilitar a navegação por leitores de tela</li>
        <li>Contraste de cores adequado entre texto e fundo (mínimo 4.5:1 para texto normal)</li>
        <li>Tamanho de fonte base de 16px com possibilidade de ampliação sem perda de funcionalidade</li>
        <li>Layout responsivo que se adapta a diferentes tamanhos de tela e dispositivos</li>
        <li>Espaçamento adequado entre elementos interativos para facilitar o uso em dispositivos touch</li>
      </ul>
      <h3>2.2 Navegação</h3>
      <ul>
        <li>Navegação completa por teclado (Tab, Enter, Esc)</li>
        <li>Indicadores visuais de foco para elementos interativos</li>
        <li>Links com texto descritivo (evitamos "clique aqui" sem contexto)</li>
        <li>Estrutura de navegação consistente em todas as páginas</li>
      </ul>
      <h3>2.3 Conteúdo</h3>
      <ul>
        <li>Texto alternativo (alt) em todas as imagens informativas</li>
        <li>Linguagem clara e objetiva</li>
        <li>Formulários com rótulos (labels) associados a cada campo</li>
        <li>Mensagens de erro descritivas e orientações para correção</li>
      </ul>
      <h3>2.4 Tecnologia</h3>
      <ul>
        <li>HTML semântico com uso adequado de elementos ARIA quando necessário</li>
        <li>Compatibilidade com os principais leitores de tela (NVDA, JAWS, VoiceOver)</li>
        <li>Compatibilidade com os principais navegadores modernos</li>
        <li>Sem conteúdo que pisca mais de 3 vezes por segundo</li>
      </ul>

      <h2>3. Estado Atual de Conformidade</h2>
      <p>
        O site <strong>ryvem.com.br</strong> está em <strong>conformidade parcial</strong> com as
        WCAG 2.1 nível AA. Estamos em processo contínuo de melhoria e identificamos as seguintes
        limitações conhecidas:
      </p>
      <ul>
        <li>Alguns elementos visuais complexos (gráficos e infográficos) podem não ter descrições alternativas completas</li>
        <li>Conteúdos de terceiros incorporados (como widgets de chat) podem não estar totalmente em conformidade</li>
        <li>Estamos trabalhando para adicionar legendas a futuros conteúdos em vídeo</li>
      </ul>

      <h2>4. Tecnologias de Suporte</h2>
      <p>
        O site foi testado com as seguintes combinações de tecnologias assistivas e navegadores:
      </p>
      <ul>
        <li>NVDA + Google Chrome (Windows)</li>
        <li>VoiceOver + Safari (macOS e iOS)</li>
        <li>TalkBack + Chrome (Android)</li>
        <li>Navegação por teclado em Chrome, Firefox e Edge</li>
      </ul>

      <h2>5. Como Reportar Problemas de Acessibilidade</h2>
      <p>
        Se você encontrar barreiras de acessibilidade no site ou tiver dificuldades para acessar
        qualquer conteúdo, entre em contato conosco:
      </p>
      <ul>
        <li><strong>E-mail:</strong> <a href="mailto:contato@ryvem.com.br">contato@ryvem.com.br</a></li>
        <li><strong>Assunto:</strong> "Acessibilidade — [descrição do problema]"</li>
      </ul>
      <p>
        Ao reportar um problema, inclua:
      </p>
      <ul>
        <li>URL da página onde encontrou o problema</li>
        <li>Descrição do problema encontrado</li>
        <li>Tecnologia assistiva e navegador utilizados (se aplicável)</li>
      </ul>
      <p>
        Responderemos em até 5 dias úteis e trabalharemos para resolver o problema o mais rápido possível.
      </p>

      <h2>6. Processo de Melhoria Contínua</h2>
      <p>
        A RYVEM está comprometida com a melhoria contínua da acessibilidade do site. Realizamos
        revisões periódicas de acessibilidade e incorporamos feedbacks dos usuários em nosso
        processo de desenvolvimento.
      </p>

      <h2>7. Legislação Aplicável</h2>
      <p>
        Esta declaração está alinhada com:
      </p>
      <ul>
        <li><strong>Lei Brasileira de Inclusão (Lei nº 13.146/2015)</strong> — Estatuto da Pessoa com Deficiência</li>
        <li><strong>Decreto nº 5.296/2004</strong> — Regulamentação das Leis de Acessibilidade</li>
        <li><strong>WCAG 2.1</strong> — Diretrizes de Acessibilidade para Conteúdo Web</li>
        <li><strong>eMAG</strong> — Modelo de Acessibilidade em Governo Eletrônico</li>
      </ul>

      <h2>8. Data de Revisão</h2>
      <p>
        Esta declaração foi revisada em <strong>14 de abril de 2026</strong>. A próxima revisão
        está programada para outubro de 2026.
      </p>
    </LegalLayout>
  );
}
