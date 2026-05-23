// Controla a troca de formulários de pagamento
window.switchPayMethod = function(method){
  document.getElementById('pay-form-cc')?.classList.add('hidden');
  document.getElementById('pay-form-sepa')?.classList.add('hidden');
  document.getElementById('pay-form-home')?.classList.add('hidden');

  // Update label styles: find the label that wraps the input
  const input = document.querySelector(`input[name="pay-method"][value="${method}"]`);
  if (input) {
    input.closest('.grid')?.querySelectorAll('label')?.forEach(lbl => {
      lbl.className = "border border-border-subtle p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center cursor-pointer hover:bg-slate-50 transition-all select-none";
    });
    const chosenLabel = input.closest('label');
    if (chosenLabel) chosenLabel.className = "border-2 border-primary bg-slate-50/50 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center cursor-pointer hover:bg-slate-50 transition-all select-none";
  }

  const form = document.getElementById('pay-form-' + method);
  if (form) form.classList.remove('hidden');
}

window.executePaymentSim = function(){
  alert("Simulação: Pagamento processado com sucesso em ambiente de teste! Seu pedido foi encaminhado para a fila de triagem consular.");
  if (window.navigate) navigate('page-novo-pedido');
}
