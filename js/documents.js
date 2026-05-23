// Filtro da lista de atos consulares
window.filterServices = function(category){
  document.querySelectorAll('#filter-container .filter-btn').forEach(btn => {
    btn.classList.remove('active','bg-primary','text-white');
    btn.classList.add('bg-white','border','border-border-subtle','text-text-main','font-medium');
  });

  // When called from inline onclick the `event` variable is available; try to use it
  try{
    if (event && event.currentTarget) {
      const activeFilterBtn = event.currentTarget;
      activeFilterBtn.classList.remove('bg-white','border','border-border-subtle','text-text-main','font-medium');
      activeFilterBtn.classList.add('active','bg-primary','text-white','font-semibold');
    }
  }catch(e){}

  document.querySelectorAll('#services-grid .service-card').forEach(card => {
    if (category === 'todos' || card.getAttribute('data-category') === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Simulação do Scanner de Inteligência Artificial
window.simulateOcrScan = function(input, docId){
  const statusDiv = document.getElementById(docId + '-status');
  if (!input.files || input.files.length === 0) return;

  statusDiv.className = "text-xs px-3 py-2 rounded-xl flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200";
  statusDiv.classList.remove('hidden');
  statusDiv.innerHTML = `<span class="material-symbols-outlined text-sm animate-spin">sync</span> Processando arquivo via IA (Análise OCR)...`;

  setTimeout(() => {
    statusDiv.className = "text-xs px-3 py-2 rounded-xl flex items-center gap-2 bg-status-success-bg text-status-success-text border border-emerald-200";
    statusDiv.innerHTML = `<span class="material-symbols-outlined text-sm">verified</span> Documento lido com sucesso! Dados validados de forma inteligente.`;
  }, 2000);
}

// Ações do painel administrativo (Staff)
window.approveRow = function(btn, isApproved){
  const row = btn.closest('tr');
  if (!row) return;
  const statusCell = row.querySelector('td span');
  if (statusCell) {
    if (isApproved) {
      statusCell.className = 'px-2 py-0.5 rounded-full bg-status-success-bg text-status-success-text text-[10px] font-semibold';
      statusCell.innerText = 'Aprovado';
    } else {
      statusCell.className = 'px-2 py-0.5 rounded-full bg-status-danger-bg text-status-danger-text text-[10px] font-semibold';
      statusCell.innerText = 'Recusado';
    }
  }
  row.style.opacity = '0.6';
}
