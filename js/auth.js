// ==========================================================
// CONTROLO DE AUTENTICAÇÃO E AGENTES INTELIGENTES (PERFIS)
// ==========================================================

// Configuração Básica de Exibição do Modal
function openLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
}

// Direcionamento Dinâmico com base no Perfil de Login Selecionado
function selectLoginProfile(profileType) {
    closeLoginModal();
    const sidebar = document.getElementById('sidebar-main');
    const navLinks = document.getElementById('sidebar-nav-links');
    const avatar = document.getElementById('user-avatar');
    const displayName = document.getElementById('user-display-name');
    const displayRole = document.getElementById('user-display-role');
    const authZone = document.getElementById('topbar-auth-zone');

    sidebar.classList.remove('hidden');

    // Configuração dos menus baseados estritamente nas regras da imagem
    if (profileType === 'cidadao') {
        displayName.innerText = "Endson dos Santos";
        displayRole.innerText = "Cidadão Regitado";
        avatar.className = "w-8 h-8 rounded-full bg-emerald-100 text-primary flex items-center justify-center font-bold text-xs";
        avatar.innerText = "ES";

        navLinks.innerHTML = `
            <button onclick="navigate('page-home')" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-primary bg-slate-100">
                <span class="material-symbols-outlined text-sm">home</span> Início
            </button>
            <button onclick="navigate('page-perfil-cidadao')" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-text-muted hover:bg-slate-50">
                <span class="material-symbols-outlined text-sm">account_circle</span> Meu Perfil Consular
            </button>
        `;
        navigate('page-home');
    } 
    else if (profileType === 'staff' || profileType === 'admin') {
        displayName.innerText = profileType === 'admin' ? "Direção de TI" : "Carlos Delgado (Staff)";
        displayRole.innerText = profileType === 'admin' ? "Administrador" : "Funcionário";
        avatar.className = "w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs";
        avatar.innerText = profileType === 'admin' ? "AD" : "CD";

        navLinks.innerHTML = `
            <button onclick="navigate('page-backoffice')" class="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-amber-900 bg-amber-50">
                <span class="material-symbols-outlined text-sm">admin_panel_settings</span> Fila de Triagem IA
            </button>
        `;
        navigate('page-backoffice');
    }

    // Altera o botão do topo para indicar sessão ativa
    authZone.innerHTML = `
        <span class="text-xs font-semibold text-text-muted hidden sm:inline">Sessão Segura Ativa</span>
        <button onclick="logoutSystem()" class="bg-slate-100 text-text-main border border-border-subtle text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-200 transition-all">Sair</button>
    `;
}

// Reset do Sistema (Logout)
function logoutSystem() {
    document.getElementById('sidebar-main').classList.add('hidden');
    document.getElementById('topbar-auth-zone').innerHTML = `
        <button onclick="openLoginModal()" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">login</span> Aceder à Área Privada
        </button>
    `;
    navigate('page-public-hub');
}

// Interatividade do Agente Inteligente IA de Triagem na Home Pública
function triggerAIAgent() {
    const query = document.getElementById('ai-agent-input').value.trim();
    const replyBox = document.getElementById('ai-agent-reply');
    
    if (!query) return;

    replyBox.classList.remove('hidden');
    replyBox.innerText = "A analisar viabilidade processual com a base jurídica regional...";

    setTimeout(() => {
        replyBox.className = "text-[11px] bg-emerald-900/30 text-emerald-100 p-3 rounded-xl border border-emerald-500/30 font-medium animate-fade-in space-y-1";
        replyBox.innerHTML = `
            <p class="font-bold flex items-center gap-1 text-secondary"><span class="material-symbols-outlined text-xs">gpp_good</span> Verificação Preliminar Concluída:</p>
            <p>Com base na sua descrição, o serviço é **viável**. Para submeter e correr a verificação OCR instantânea de documentos, por favor clique em <strong>'Aceder à Área Privada'</strong> acima e efetue o seu login.</p>
        `;
    }, 1200);
}

// Navegação Genérica entre Secções (Single Page Application)
function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active');
    });
    
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.remove('hidden');
        activePage.classList.add('active');
    }
}

// Expose core functions to global scope for inline handlers
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.selectLoginProfile = selectLoginProfile;
window.logoutSystem = logoutSystem;
window.triggerAIAgent = triggerAIAgent;
window.navigate = navigate;
