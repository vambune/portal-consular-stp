# Portal Consular STP — Frontend

Breve repositório frontend para o portal consular (Embaixada / Consulado-Geral - Bélgica).

## Alterações recentes
- Refactor: modularização do CSS e JS — extração do CSS inline para `css/styles.css` e split dos scripts em `js/navigation.js`, `js/chat.js`, `js/documents.js`, `js/payment.js`, `js/app.js`.

## Estrutura
- `index.html` — página principal (markup + tailwind config)
- `css/styles.css` — estilos customizados extraídos do HTML
- `js/` — módulos JavaScript por responsabilidade

## Execução local
Opções rápidas para desenvolvimento:

1) Servidor estático simples (sem live-reload):

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

2) Servidor com live-reload (BrowserSync):

```bash
npx browser-sync start --server --files "index.html, css/*.css, js/*.js" --no-open --port 3000
# abrir http://localhost:3000
```

## Notas
- O projeto usa Tailwind via CDN para prototipagem. Considerar uma configuração local para produção.
- As funções JS atuais são simuladas (chat automático, OCR simulado, pagamento simulado). Integrar backends para produção.
