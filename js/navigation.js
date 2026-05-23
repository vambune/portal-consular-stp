// Gerencia a troca de páginas (SPA) e o Modo Staff
window.navigate = function(pageId){
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const targetPage = document.getElementById(pageId);
  if (targetPage) targetPage.classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active','text-primary','bg-slate-100','font-semibold');
    btn.classList.add('text-text-muted');
  });

  const activeBtn = document.querySelector(`button[onclick="navigate('${pageId}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active','text-primary','bg-slate-100','font-semibold');
    activeBtn.classList.remove('text-text-muted');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.toggleStaffView = function(checkbox){
  const navGroupBackoffice = document.getElementById('nav-group-backoffice');
  if (!navGroupBackoffice) return;
  if (checkbox && checkbox.checked) {
    navGroupBackoffice.classList.remove('hidden');
    navigate('page-backoffice');
  } else {
    navGroupBackoffice.classList.add('hidden');
    navigate('page-novo-pedido');
  }
}
