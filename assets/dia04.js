const numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
const pergunta = "Vamos brincar de adivinhar?\nDiga um número de 1 a 10!";
const mensagemVitoria = `Parabéns, você acertou, o número escolhido era ${numeroAleatorio}!`;
const mensagemDerrota = "Infelizmente você errou!";

let tentativas = 3;
let resposta;

function verificarVazio() {
  while (resposta === "") {
    alert("O campo está vazio!");
    resposta = prompt(pergunta);
  }
}

function verificarIntervaloResposta() {
  while (resposta < 1 || resposta > 10) {
    verificarVazio();
    alert("Opção inválida, responda 1 a 10!");
    resposta = prompt(pergunta);
  }
}

while (tentativas > 0) {
  resposta = prompt(pergunta);
  verificarVazio();
  verificarIntervaloResposta();
  if (resposta === numeroAleatorio) {
    alert(mensagemVitoria);
    break;
  } else {
    tentativas--;
    alert(mensagemDerrota);
    if (tentativas > 0){
        alert(`Você ainda tem ${tentativas} tentativa(s)!`);
    }
    
    if (tentativas === 0) {
        alert(`Suas tentativas acabaram!`)
        alert(`O número era ${numeroAleatorio}!`);
    }
  }
}

