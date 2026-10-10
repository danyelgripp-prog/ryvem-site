(function () {
  var cfg = window.RYVEM_RAIOX_CONFIG || {};
  var form = document.getElementById('leadform');
  var result = document.getElementById('result');
  var botao = document.getElementById('enviar');
  if (!form) return;

  var CONSENTIMENTO =
    'Autorizo o contato sobre esta solicitação. O acesso às conversas dependerá de autorização específica posterior.';

  function utms() {
    var p = new URLSearchParams(location.search), o = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
      if (p.get(k)) o[k] = p.get(k);
    });
    return o;
  }

  function montarPayload(d) {
    return {
      nome: (d.get('nome') || '').trim(),
      clinica: (d.get('clinica') || '').trim(),
      especialidade: d.get('area'),
      volume_conversas_mes: d.get('volume'),
      decisor: d.get('decisor'),
      whatsapp: (d.get('whatsapp') || '').replace(/\D/g, ''),
      consentimento_contato: d.get('consentimento_contato') === 'sim',
      consentimento_texto: CONSENTIMENTO,
      consentimento_em: new Date().toISOString(),
      autorizacao_acesso_whatsapp: 'pendente',
      origem: cfg.origem || 'landing-raiox-ryvem-saude',
      campanha: cfg.campanha || '',
      pagina: location.href.split('#')[0],
      utm: utms()
    };
  }

  // Formato do endpoint de leads já usado pelo site (apex.ryvem.com.br/api/ipl/lead)
  function paraIPL(p) {
    return {
      clinica: p.clinica,
      cidade: 'não informado',
      nome: p.nome,
      cargo: 'Responsável pela decisão: ' + p.decisor,
      wpp_pessoal: p.whatsapp,
      atendimentos_dia: p.volume_conversas_mes,
      auto_avaliacao:
        'origem:' + p.origem + ';campanha:' + p.campanha + ';especialidade:' + p.especialidade +
        ';volume_conversas_mes:' + p.volume_conversas_mes + ';decisor:' + p.decisor +
        ';consentimento_contato:sim;consentimento_em:' + p.consentimento_em +
        ';autorizacao_acesso_whatsapp:pendente' +
        Object.keys(p.utm).map(function (k) { return ';' + k + ':' + p.utm[k]; }).join('')
    };
  }

  function texto(p) {
    return [
      'Solicitação de Raio-X RYVEM Saúde',
      'nome: ' + p.nome,
      'clinica: ' + p.clinica,
      'especialidade: ' + p.especialidade,
      'volume: ' + p.volume_conversas_mes,
      'decisor: ' + p.decisor,
      'whatsapp: ' + p.whatsapp
    ].join('\n');
  }

  function mostrar(tipo, html, copia) {
    result.hidden = false;
    result.className = 'result' + (tipo ? ' ' + tipo : '');
    result.innerHTML = html;
    if (copia) {
      var pre = document.createElement('pre');
      pre.textContent = copia;
      result.appendChild(pre);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'cta';
      b.textContent = 'Copiar informações';
      b.onclick = function () {
        (navigator.clipboard ? navigator.clipboard.writeText(copia) : Promise.reject())
          .then(function () { b.textContent = 'Copiado ✓'; })
          .catch(function () { b.textContent = 'Selecione o texto acima para copiar'; });
      };
      result.appendChild(b);
    }
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var d = new FormData(form);
    if ((d.get('site') || '').trim()) return; // proteção simples contra robôs
    var p = montarPayload(d);
    if (p.whatsapp.length < 10) {
      var w = document.getElementById('whatsapp');
      w.setCustomValidity('Informe o WhatsApp com DDD.');
      w.reportValidity();
      w.addEventListener('input', function () { w.setCustomValidity(''); }, { once: true });
      return;
    }

    if (!cfg.endpoint) {
      mostrar('erro',
        '<b>Envio ainda não conectado</b><p>Os dados não foram enviados. O formulário ainda não está ligado ao CRM. Copie as informações abaixo.</p>',
        texto(p));
      return;
    }

    botao.disabled = true;
    var rotulo = botao.textContent;
    botao.textContent = 'Enviando...';
    var ctrl = 'AbortController' in window ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, cfg.timeoutMs || 15000) : null;

    fetch(cfg.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cfg.formato === 'ipl' ? paraIPL(p) : p),
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        form.reset();
        mostrar('ok',
          '<b>Solicitação recebida</b><p>Nossa equipe vai entrar em contato pelo WhatsApp para confirmar a disponibilidade da sua vaga. O acesso às conversas da clínica só acontece depois de uma autorização específica, em etapa separada.</p>');
      })
      .catch(function () {
        mostrar('erro',
          '<b>Não conseguimos enviar agora</b><p>Sua solicitação não foi registrada. Tente novamente em instantes ou copie as informações abaixo.</p>',
          texto(p));
      })
      .then(function () {
        if (timer) clearTimeout(timer);
        botao.disabled = false;
        botao.textContent = rotulo;
      });
  });
})();
