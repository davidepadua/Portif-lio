const clicado = document.querySelector('.mapa');
clicado.addEventListener('click', () => { clicado.classList.toggle('mapa-onclick'); });

/* const artigo = document.querySelector('.artigo');
artigo.addEventListener('click', () => { artigo.classList.toggle('article-animation'); });*/

function articleClick(x) {
  const animacao = document.getElementById(x);
  animacao.style.animationPlayState = 'running';
}

function articledblclick(x) {
  const animacao2 = document.getElementById(x);
  animacao2.classList.toggle('article-animation-return');
}
