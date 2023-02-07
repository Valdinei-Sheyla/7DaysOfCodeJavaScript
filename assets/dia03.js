

const pergunta01 = ("Você deseja seguir para área de Front-End ou seguir para a área de Back-End? Responda com o número 1 para primeira opção ou 2 para segunda opção!");
const pergunta02Front = ("Você quer aprender React ou aprender Vue? Responda com o número 1 para primeira opção ou 2 para segunda opção!");
const pergunta02Back = ("Você quer aprender C# ou aprender Java? Responda com o número 1 para primeira opção ou 2 para segunda opção!");
const perguntaFullstack = ("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Responda com o número 1 para primeira opção ou 2 para segunda opção!");
const perguntaTecnologia = ("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer");


var respostas = [];
var tecnologias = [];


function checarVazio (){
    
    while (resposta == ""){
    alert("O campo está vazio!");
    resposta = prompt(pergunta);
}}

function checarRespostaIgualUmOuDois(){
    while (resposta != 1 && resposta != 2){
        checarVazio();
        alert("Opção inválida, responda 1 ou 2!");
        resposta = prompt(pergunta);
    }
}

let pergunta = pergunta01
let resposta = prompt(pergunta);
checarVazio();
checarRespostaIgualUmOuDois();


if(resposta == 1){
    respostas.push(`Front-End`);
    pergunta = pergunta02Front;
    resposta = prompt(pergunta);
    checarVazio();
    checarRespostaIgualUmOuDois();
    if(resposta == 1){
        respostas.push(`React`);

        checarVazio();
        checarRespostaIgualUmOuDois();}
        else if(resposta == 2){
            respostas.push(`Vue`);

            checarVazio();
            checarRespostaIgualUmOuDois();}

} else if(resposta == 2){
    respostas.push(`Back-End`);
    pergunta = pergunta02Back;
    resposta = prompt(pergunta);
    checarVazio();
    checarRespostaIgualUmOuDois();
    if(resposta == 1){
        respostas.push(`C#`);

        checarVazio();
        checarRespostaIgualUmOuDois();}
        else if(resposta == 2){
            respostas.push(`Java`);

            checarVazio();
            checarRespostaIgualUmOuDois();}
}

pergunta = perguntaFullstack;
resposta = prompt(pergunta);
checarVazio();
checarRespostaIgualUmOuDois();

if(resposta == 1){
    respostas.push(`seguir se especializando na área escolhida`);

}
    else if(resposta == 2){
        respostas.push(`seguir se desenvolvendo para se tornar Fullstack`);

    }



pergunta = perguntaTecnologia;
resposta = prompt(pergunta);
checarVazio();
tecnologias.push(resposta);
tecnologias.push('\n');




while(resposta != null){

    resposta = prompt(pergunta);
    checarVazio();
    tecnologias.push(resposta);
    tecnologias.push('\n');
}


let mensagem = `Você deseja seguir para área de ${respostas[0]} e irá aprender
 ${respostas[1]} e ${respostas[2]}!`;
alert(mensagem + '\n' + tecnologias.toString());

