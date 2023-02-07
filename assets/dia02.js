

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`;
alert(msg);

const gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

const msg2 = "Muito bom! Continue estudando e você terá muito sucesso.";
const msg3 = "Ahh que pena... Já tentou aprender outras linguagens?";

if(gostaDeEstudar == 1){
    alert(msg2)
} else if(gostaDeEstudar == 2){
    alert(msg3)
};

alert("Agora você já sabe\ncomo pular linha\nnos métodos: \nalert, confirm e prompt!");

