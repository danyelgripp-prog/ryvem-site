// Configuração da landing do Raio-X RYVEM Saúde (ryvem.com.br/raio-x).
// endpoint: recebe o lead por POST JSON. formato "ipl" = mesmo endpoint de leads usado pela página /campanha.
// Endpoint vazio = a página avisa que o envio não está conectado. Nunca simula sucesso.
window.RYVEM_RAIOX_CONFIG = {
  endpoint: "https://apex.ryvem.com.br/api/ipl/lead",
  formato: "ipl",
  campanha: "raiox-gratuito-outubro-2026",
  origem: "landing-raiox-ryvem-saude",
  timeoutMs: 15000
};
