// main.js – tema e acessibilidade (usado em todas as páginas)
const raiz = document.documentElement;
const btnTema = document.getElementById('btn-tema');

function salvar(chave, valor) {
  try { localStorage.setItem(chave, valor); } catch (e) {}
}

// ---- Modo claro/escuro ----
function aplicarTema(tema) {
  raiz.setAttribute('data-tema', tema);
  const escuro = tema === 'escuro';
  btnTema.textContent = escuro ? 'Modo claro' : 'Modo escuro';
  btnTema.setAttribute('aria-pressed', String(escuro));
  salvar('tema', tema);
}

btnTema.addEventListener('click', () => {
  aplicarTema(raiz.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro');
});
aplicarTema(raiz.getAttribute('data-tema') || 'claro');

// ---- Tamanho da fonte (de 90% a 150%) ----
let fonte = parseInt(raiz.style.fontSize) || 100;

function mudarFonte(delta) {
  fonte = Math.min(150, Math.max(90, fonte + delta));
  raiz.style.fontSize = fonte + '%';
  salvar('fonte', fonte);
}

document.getElementById('btn-fonte-mais').addEventListener('click', () => mudarFonte(10));
document.getElementById('btn-fonte-menos').addEventListener('click', () => mudarFonte(-10));