// Configuração da landing do Raio-X RYVEM Saúde (ryvem.com.br/raio-x).
// endpoint: recebe o lead por POST. formato "planilha" = grava na planilha Google "Leads Raio-X RYVEM Saúde" (aba Leads).
// Endpoint vazio = a página avisa que o envio não está conectado. Nunca simula sucesso.
window.RYVEM_RAIOX_CONFIG = {
  endpoint: "https://script.google.com/macros/s/AKfycbwl8q0M97ELYhiWym42si1ES_jyWGqU-v297dAByep8-MR45cI_BlD5BFC6IMw6l4i1/exec",
  formato: "planilha",
  campanha: "raiox-gratuito-outubro-2026",
  origem: "landing-raiox-ryvem-saude",
  timeoutMs: 15000
};
