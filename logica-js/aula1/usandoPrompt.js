const prompt = require("prompt-sync")({ sigint: true}) //Inicializa o PromptSync

//Código de média de dois números
const valor1 = prompt("digite um número: "); //Recebe o primeiro número
const valor2 = prompt('digite outro número: '); //Recebe o segundo número

const media = (valor1 + valor2)/2.0; //Realiza a concatenação dos valores e divide por 2

console.log(media); //Exibe o resultado