// Lógica de envio e respostas automáticas do Chat IA
window.sendChat = function(chatId){
  const input = document.getElementById('chat-input-' + chatId);
  const container = document.getElementById('chat-messages-' + chatId);
  if (!input || !input.value.trim()) return;

  const userText = input.value.trim();

  const userDiv = document.createElement('div');
  userDiv.className = 'flex flex-col gap-1 items-end ml-auto max-w-[85%]';
  userDiv.innerHTML = `<div class="bg-primary text-white p-3 rounded-2xl rounded-tr-none leading-relaxed text-xs">${userText}</div><span class="text-[10px] text-text-muted mr-1">agora</span>`;
  container.appendChild(userDiv);
  input.value = '';
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    let reply = "Entendi sua mensagem. Para processar pedidos de passaportes ou vistos, certifique-se de carregar a documentação correta e efetuar o pagamento da taxa emolumentar correspondente diretamente no portal.";
    const lowerText = userText.toLowerCase();

    if (lowerText.includes('visto') || lowerText.includes('turismo')) {
      reply = "Para o Visto de Turismo de Curta Duração (até 90 dias), você precisará do Passaporte válido por mais de 6 meses, Fotografia tipo passe, Reserva de voo de ida/volta e comprovativo de alojamento.";
    } else if (lowerText.includes('passaporte') || lowerText.includes('renovar')) {
      reply = "A renovação do Passaporte Ordinário tem uma taxa de €110,00. Através do nosso sistema de inteligência artificial, se carregar uma foto regulamentar e o seu BI atualizado, a triagem documental é feita instantaneamente.";
    } else if (lowerText.includes('preço') || lowerText.includes('valor') || lowerText.includes('cust')) {
      reply = "Os valores atuais são: Passaporte Ordinário (€110,00), Visto de Turismo (€60,00) e Procurações Consulares (€50,00). O pagamento pode ser feito por Cartão ou Transferência Bancária SEPA.";
    }

    const botDiv = document.createElement('div');
    botDiv.className = 'flex flex-col gap-1 max-w-[85%]';
    botDiv.innerHTML = `<div class="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-text-main leading-relaxed">${reply}</div><span class="text-[10px] text-text-muted ml-1">agora</span>`;
    container.appendChild(botDiv);
    container.scrollTop = container.scrollHeight;
  }, 900);
}
