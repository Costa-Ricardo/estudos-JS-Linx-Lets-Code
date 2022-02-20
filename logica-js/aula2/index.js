const prompt = require("prompt-sync")({ sigint: true}) //Inicializa o PromptSync

//Código de média de dois números
const valor1 = prompt("digite um número: "); //Recebe o primeiro número
const valor2 = prompt('digite outro número: '); //Recebe o segundo número

const media = (valor1 + valor2)/2.0; //Realiza a concatenação dos valores e divide por 2

console.log(media); //Exibe o resultado


//Concatenação de String

const textoExemplo = "Bora " + "ser " + "tech!";
console.log(textoExemplo);

//Transformando String em number

const numero1 = parseInt("10"); //transforma a String em Inteiro
const numero2 = parseFloat("10");//transforma a String em Float
console.log(numero1);
console.log(numero2);


const numero3 = parseInt("10texto"); //lê apenas os números na String em Inteiro
const numero4 = parseFloat("10");//lê apenas os números na e transforma em Float
console.log(numero3);
console.log(numero4);


//Exercicio calculando a média de dois números
const valor3 = parseFloat (prompt("digite um número: ")); //Recebe o primeiro número
const valor4 = parseFloat (prompt("digite outro número: ")); //Recebe o segundo número

const media1 = (valor3 + valor4)/2.0; //Realiza a concatenação dos valores e divide por 2

console.log("A média é: ", media1); //Exibe o resultado