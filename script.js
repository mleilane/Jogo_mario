//mapeando os elementos HTML que vamos usar
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const restar = document.querySelector(".restart");
const clouds = document.querySelector(".clouds");

//criando um novo elemento HTML e armazenando na variavel gameOverText
const gameOverText = document.createElement("div");

gameOverText.innerText = "Game Over"; //define o conteudo do texto do elemento
gameOverText.classList.add("game-over-text"); // definindo o nome da classe do elemento para game-over-text
document.body.appendChild(gameOverText); //crucial para tornar o texto "Game over" visivel, anexa o elemento gameOverText ao elemtno <body> do HTML</body>

//criando a funçao showGameOver para exibir o texto "game over"
const showGameOver = () => {
  //declaração da função showGameOver
  gameOverText.style.display = "block"; //definindo a propriedade do elemento gameOverText como "block", o que torna o elemento visivel
};

//criando a função "jump" que simula a ação de pular do Mario
const jump = () => {
  //declaração da função jum
  mario.classList.add("jump"); //adicionando  a classe jump ao elemento Mario

  setTimeout(() => {
    //a função setTimeout é responsavel por tornar a ação do pulo "temporaria", ela espera meio segundo (500 milissegundos) e depois remove a a classe jump
    mario.classList.remove("jump"); //remove a classe jump do elemento Mario, finalizando a ação do pulo
  }, 500);
};

//criando a função que vai parar a animação das nuvens quando perder o jogo
const stopClouds = () => {
  //declarando a função stopClouds
  clouds.style.animation = "none"; //interrompe a animação que esta atribuida a classe clouds
};

/* bloco loop para  observar quando o mario colidir com o tubo */
const loop = setInterval(() => {
  //criando a função loop / e definindo um intervalo de tempo regular de 10milissegundos com a função setInterval
  const pipePosition = pipe.offsetLeft; //obtém a posição horizontal do tubo em relação ao lado esquerdo da tela.

  //colocando o + na frente da string ele tenta converter para numero
  const marioPosition = +window //obtem a posição vertical do elemento Mario em relaçã a parte inferior da tela
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  //console.log(typeof marioPosition);

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none"; //Remove a animação do tubo, tornando-o estático
    pipe.style.left = `${pipePosition}px`; //Define a posição horizontal do tubo com base na posição atual do tubo (pipePosition)

    mario.style.animation = "none"; // Remove a animação do Mario, tornando-o estático
    mario.style.bottom = `${marioPosition}px`; //Define a posição vertical do Mario com base na posição atual do Mario (marioPosition)

    mario.src = "./assets/game-over.png"; //Altera a imagem do Mario para a imagem de "Game Over".
    mario.style.width = "160px"; //define  alargura do Mario como 200 pixels
    mario.style.marginLeft = "23px"; //define a  margem esquerda como 23 pixels

    clearInterval(loop); //Interrompe a execução do loop, impedindo que ele continue verificando a colisão entre o Mario e o tubo.
    stopClouds(); // Chama a função stopClouds(), que interrompe a animação das nuvens.
    showGameOver(); // Chama a função showGameOver(), que torna visível o texto "Game Over" na tela.
  }
}, 10);

//criando a função para recarregar a pagina ao clicar no botão restart
restar.addEventListener("click", () => {
  //adicionando ouvinte de eventos (clique) no botão restar
  location.reload(true); //chamento a função que irá recarrega a pagina
});

//adicionando ouvintes de eventos ao documento html
document.addEventListener("keydown", jump); //Quando uma tecla é pressionada, a função jump é chamada.
document.querySelector(".restart").addEventListener("click", restartGame); //selecionando o elemento com class "restart", adicionamos ouvinte para o "clique no botão", ao clicar a função restartGame é executada
