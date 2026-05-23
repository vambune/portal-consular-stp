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

// Simulação Avançada do Scanner de Inteligência Artificial com Integração ao Backoffice
window.simulateOcrScan = function(input, docId) {
    const statusDiv = document.getElementById(docId + '-status');
    if (!input.files || input.files.length === 0) return;

    const fileName = input.files[0].name;

    statusDiv.classList.remove('hidden', 'bg-status-success-bg', 'text-status-success-text', 'bg-status-danger-bg', 'text-status-danger-text');
    statusDiv.className = "text-xs px-3 py-2 rounded-xl flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 animate-pulse";
    statusDiv.innerHTML = `<span class="material-symbols-outlined text-sm animate-spin">sync</span> A ler metadados do ficheiro "${fileName}" via IA (Processamento OCR)...`;

    setTimeout(() => {
        statusDiv.className = "text-xs px-3 py-2 rounded-xl flex items-center gap-2 bg-status-success-bg text-status-success-text border border-emerald-200";
        statusDiv.innerHTML = `<span class="material-symbols-outlined text-sm">verified</span> Validação concluída com sucesso! Dados sincronizados com o Backoffice Consular.`;
        
        let atoSimulado = "Passaporte Ordinário";
        let nomeSimulado = "Endson dos Santos";
        let correspondencia = "97% Match (Seguro)";
        let badgeRisco = '<span class="w-2 h-2 rounded-full bg-emerald-500"></span>';

        if (docId === 'doc-2') {
            atoSimulado = "Visto de Turismo";
            nomeSimulado = "Taynara de Oliveira";
            correspondencia = "91% Validação Facial OK";
        }

        const idAleatorio = Math.floor(1000 + Math.random() * 9000);
        const tabelaBody = document.querySelector("#admin-table-processes tbody");
        if (tabelaBody) {
            const novaLinha = document.createElement("tr");
            novaLinha.className = "hover:bg-slate-50/80 transition-all row-processo bg-emerald-50/30 font-medium";
            novaLinha.innerHTML = `
                <td class="p-3">
                    <span class="font-mono text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-text-muted font-bold">#STP-${idAleatorio}</span>
                    <p class="font-bold class-nome mt-1 text-slate-900">${nomeSimulado}</p>
                </td>
                <td class="p-3 font-medium">${atoSimulado}</td>
                <td class="p-3">
                    <div class="flex items-center gap-1.5">
                        ${badgeRisco}
                        <span class="font-semibold text-emerald-700">${correspondencia}</span>
                    </div>
                </td>
                <td class="p-3"><span class="status-badge px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">Pendente</span></td>
                <td class="p-3 text-right space-x-1 whitespace-nowrap">
                    <button onclick="approveRowAdvanced(this, 'Aprovado')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shadow-sm">Aprovar</button>
                    <button onclick="approveRowAdvanced(this, 'Recusado')" class="bg-rose-600 hover:bg-rose-700 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shadow-sm">Recusar</button>
                </td>
            `;
            tabelaBody.insertBefore(novaLinha, tabelaBody.firstChild);
        }

        // INJEÇÃO NA PÁGINA PRINCIPAL DO CIDADÃO (HOME)
        const homeTableBody = document.querySelector("#user-process-list");
        if (homeTableBody) {
            const novaLinhaHome = document.createElement("tr");
            novaLinhaHome.className = "hover:bg-slate-50/50 transition-all bg-emerald-50/20";
            novaLinhaHome.innerHTML = `
                <td class="p-3 font-mono text-[11px] font-bold text-text-muted">#STP-${idAleatorio}</td>
                <td class="p-3 font-semibold">Pedido de ${atoSimulado}</td>
                <td class="p-3 text-text-muted">Hoje</td>
                <td class="p-3">
                    <span class="home-status-badge px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">Pendente</span>
                </td>
            `;
            homeTableBody.insertBefore(novaLinhaHome, homeTableBody.firstChild);
        }

        const kpiPendentes = document.getElementById("kpi-pendentes-count");
        if (kpiPendentes) {
            let atuais = parseInt(kpiPendentes.innerText, 10);
            if (!Number.isNaN(atuais)) {
                kpiPendentes.innerText = atuais + 1;
            }
        }

        logAdminAction("SISTEMA", `Novo upload detetado ("${fileName}"). Processo #STP-${idAleatorio} criado na fila de triagem.`);

    }, 2500);
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

window.searchAdminTable = function(){
  const query = document.getElementById('admin-search').value.toLowerCase();
  const rows = document.querySelectorAll('#admin-table-processes tbody tr');
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

window.filterAdminTable = function(){
  const filter = document.getElementById('filter-status-admin').value;
  const rows = document.querySelectorAll('#admin-table-processes tbody tr');
  rows.forEach(row => {
    const statusText = row.querySelector('td:nth-child(4) span')?.innerText || '';
    const matches = filter === 'todos' || statusText === filter;
    const searchQuery = document.getElementById('admin-search').value.toLowerCase();
    const matchesSearch = row.innerText.toLowerCase().includes(searchQuery);
    row.style.display = matches && matchesSearch ? '' : 'none';
  });
}

window.confirmAttendance = function(button){
  const card = button.closest('div');
  if (!card) return;
  button.classList.remove('bg-white', 'text-emerald-600', 'border-border-subtle');
  button.classList.add('bg-emerald-600', 'text-white', 'border-emerald-700');
  button.innerHTML = '<span class="material-symbols-outlined text-sm">done</span>';
  button.title = 'Presença Confirmada';
  const badge = document.createElement('span');
  badge.className = 'text-[10px] bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-semibold';
  badge.innerText = 'Confirmado';
  if (!card.querySelector('.attendance-status')) {
    badge.classList.add('attendance-status');
    card.querySelector('.space-y-1').appendChild(badge);
  }
}

window.approveRowAdvanced = function(btn, finalStatus) {
  const row = btn.closest('tr');
  if (!row) return;
  const badge = row.querySelector('.status-badge');
  const utenteNome = row.querySelector('.class-nome')?.innerText || 'Utente';
  
  if (!badge) return;

  if (finalStatus === 'Aprovado') {
    badge.className = 'status-badge px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold';
    badge.innerText = 'Aprovado';
    row.style.opacity = '0.7';
    logAdminAction('STAFF', `Processo de ${utenteNome} foi deferido e assinado digitalmente.`);
    
    const kpiAprovados = document.getElementById('kpi-concluidos');
    if (kpiAprovados) {
      let current = parseInt(kpiAprovados.innerText, 10);
      if (!Number.isNaN(current)) {
        kpiAprovados.innerText = current + 1;
      }
    }
  } else {
    badge.className = 'status-badge px-2.5 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-[10px] font-bold';
    badge.innerText = 'Recusado';
    row.style.opacity = '0.7';
    logAdminAction('STAFF', `Processo de ${utenteNome} indeferido por inconformidade técnica.`);
  }

  row.querySelectorAll('button').forEach(b => b.classList.add('opacity-40', 'pointer-events-none'));
}

// ==========================================================
// NOVAS FUNCIONALIDADES: PAINEL ADMINISTRATIVO AVANÇADO (BACKOFFICE)
// ==========================================================

// 1. Pesquisa Inteligente de Processos na Tabela
function searchAdminTable() {
    const input = document.getElementById("admin-search");
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll("#admin-table-processes .row-processo");

    rows.forEach(row => {
        const textElement = row.querySelector(".class-nome");
        if (textElement) {
            const txtValue = textElement.textContent || textElement.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    });
}

// 2. Filtro por Estado (Pendente, Em Revisão, Aprovado)
function filterAdminTable() {
    const select = document.getElementById("filter-status-admin");
    const chosenStatus = select.value;
    const rows = document.querySelectorAll("#admin-table-processes .row-processo");

    rows.forEach(row => {
        const badge = row.querySelector(".status-badge");
        if (badge) {
            const rowStatus = badge.innerText.trim();
            if (chosenStatus === "todos" || rowStatus === chosenStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    });
}

// 3. Confirmar Atendimento/Presença no Calendário Dinâmico
function confirmAttendance(btn) {
    const card = btn.closest('.p-3');
    card.style.transition = "all 0.4s ease";
    card.style.opacity = "0.5";
    card.style.backgroundColor = "#ecfdf5"; // emerald-50 de sucesso
    btn.innerHTML = `<span class="material-symbols-outlined text-sm">done</span>`;
    btn.className = "bg-emerald-600 text-white p-1.5 rounded-lg shadow-sm pointer-events-none";
    
    // Adicionar log na auditoria em tempo real
    const nomeUtente = card.querySelector('h5').innerText;
    logAdminAction("STAFF", `Presença confirmada para o utente ${nomeUtente} no balcão consular.`);
}

// 4. Inserção de Logs de Auditoria Dinâmicos (Rastreabilidade)
function logAdminAction(userType, text) {
    const container = document.getElementById("audit-log-container");
    if (!container) return;

    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];

    const logDiv = document.createElement("div");
    logDiv.className = "flex items-center gap-2 border-b border-slate-50 pb-1.5 text-emerald-900 font-medium animate-fade-in";
    logDiv.innerHTML = `
        <span class="text-slate-400 font-mono">${timeString}</span>
        <span class="bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-bold uppercase text-[9px]">${userType}</span>
        <span>${text}</span>
    `;
    
    // Insere no início da lista de logs
    container.insertBefore(logDiv, container.firstChild);
}

// Função para simular a gravação de alterações de perfil com auditoria
window.saveProfileChanges = function() {
    alert("Alterações de residência e contactos guardadas com sucesso no ecossistema consular!");
    
    // Regista o log da alteração no backoffice para rastreabilidade
    if (typeof logAdminAction === "function") {
        logAdminAction("UTENTE", "Endson dos Santos atualizou os dados de contacto e residência na Bélgica.");
    }
}

// Função para simular a gravação de alterações de perfil com auditoria
function saveProfileChanges() {
    alert("Alterações de residência e contactos guardadas com sucesso no ecossistema consular!");
    
    // Regista o log da alteração no backoffice para rastreabilidade
    if (typeof logAdminAction === "function") {
        logAdminAction("UTENTE", "Endson dos Santos atualizou os dados de contacto e residência na Bélgica.");
    }
}