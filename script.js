/*ANIMACÃO DE MENU RODAPES */
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menuPrincipal a');
  const animationDiv = document.getElementById('AnimacaoCliquesMenu');
  const img = animationDiv.querySelector('#clickImagem');

  animationDiv.style.display = 'none';

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      animationDiv.style.display = 'block';

      img.style.animation = 'none';       // Reinicia a animação
      img.offsetHeight;
      img.style.animation = 'pop 0.8s ease-out';
      setTimeout(() => {
        window.location.href = this.href;
    }, 800);
  });
});
  img.addEventListener('animationend', () => { // Esconde ao fim da animação
    animationDiv.style.display = 'none';
});
  window.addEventListener('pageshow', () => { // Também esconde caso o usuário volte pelo navegador
    animationDiv.style.display = 'none';
    img.style.animation = 'none';
});
});

document.addEventListener("DOMContentLoaded", ()=> {
  const botao = document.getElementById("botaoVoltar");

  if(botao){
    botao.addEventListener("click", (e) =>{
      e.preventDefault();
      const animacao = document.createElement("img");
      animacao.src = "imagens/icone_end.png";
      animacao.alt = "Imagem em animação...";
      animacao.className = "animacaoVoltar";

  document.body.appendChild(animacao);
  setTimeout(()=>
  {history.back(); }, 1000); });
  }
});

