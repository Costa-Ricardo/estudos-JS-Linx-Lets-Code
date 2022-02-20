/**
 * Peça ao usuário para digitar um número e imprima o fatorial de n.
 */
const prompt = require("prompt-sync")({sigint:true});

const num = parseInt(prompt("Digite um número: "));
let fatorial = 1;

for(let i=1; i<=num; i++){
    fatorial *= i;
}
console.log(fatorial);
