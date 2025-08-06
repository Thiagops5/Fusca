// Contador regressivo para 01/07/2025
function atualizarContador() {
    const dataLancamento = new Date("2025-07-01T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;
    const contador = document.getElementById("contador");
  
    if (diferenca <= 0) {
      contador.innerText = "LANÇADO!";
      return;
    }
  
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
  
    contador.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
  
  // Carrossel de imagens da galeria
  // Array com todas as imagens da galeria
const imagens = [
    { src: "fusca1.jpg", legenda: "Vista lateral do Fusca 1979" },
    { src: "fusca3.jpg", legenda: "Interior clássico e espaçoso" },
    { src: "fusca4.jpg", legenda: "Motor boxer com herança aeronáutica" },
    { src: "fusca5.jpg", legenda: "Detalhes retrô que atravessam gerações" }
  ];
  
  let imagemAtual = 0;
  
  function mudarImagem(direcao) {
    // Calcula o próximo índice
    imagemAtual += direcao;
    
    // Volta para o final se passar do início
    if (imagemAtual < 0) {
      imagemAtual = imagens.length - 1;
    }
    
    // Volta para o início se passar do final
    if (imagemAtual >= imagens.length) {
      imagemAtual = 0;
    }
    
    // Atualiza a imagem e legenda
    const img = document.getElementById("carousel-img");
    const legenda = document.getElementById("carousel-caption");
    
    img.src = imagens[imagemAtual].src;
    img.alt = imagens[imagemAtual].legenda;
    legenda.textContent = imagens[imagemAtual].legenda;
  }
  
  // Contador regressivo
  function atualizarContador() {
    const dataLancamento = new Date("2025-07-01T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;
    const contador = document.getElementById("contador");
  
    if (diferenca <= 0) {
      contador.innerText = "LANÇADO!";
      return;
    }
  
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
  
    contador.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
  
  // Inicia o contador quando a página carrega
  setInterval(atualizarContador, 1000);
  atualizarContador();
  
  
  // Inicialização quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', function() {
    // Inicia o contador regressivo
    setInterval(atualizarContador, 1000);
    atualizarContador();
    
    // Configura os botões do carrossel
    const btnEsquerda = document.querySelector(".carousel-btn.left");
    const btnDireita = document.querySelector(".carousel-btn.right");
    
    if (btnEsquerda) {
      btnEsquerda.addEventListener("click", imagemAnterior);
    }
    
    if (btnDireita) {
      btnDireita.addEventListener("click", proximaImagem);
    }
    
    // Exibe a primeira imagem
    mostrarImagem(indiceAtual);
    
    // Navegação por teclado (opcional)
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        imagemAnterior();
      } else if (e.key === 'ArrowRight') {
        proximaImagem();
      }
    });
  });
  