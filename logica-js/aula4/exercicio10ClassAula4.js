/**
 *  Peça ao usuário para digitar um número n e some todos os números de 1 a n.
 */

const prompt = require("prompt-sync")({ sigint: true});

let numDigitado = parseInt(prompt("Digite um número: "));
let soma = 0;

for(let i=0; i <= numDigitado; i++){
    soma += i; 
}

console.log("A soma de todos os número de 1 até " + numDigitado + " é " + soma);