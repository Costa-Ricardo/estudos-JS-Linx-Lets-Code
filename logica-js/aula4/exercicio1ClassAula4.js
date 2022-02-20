/**
 * Faça um programa para perguntar 10 números e informar a soma total destes números.
 */

const prompt = require("prompt-sync")({ sigint:true});

let total = 0;

for(let i=1; i <= 10; i++){
    let num = parseInt(prompt("Digite um número: "));
    if(!isNaN(num)){  //valida se o valor digitado foi um número
        total += num;
    }else {
        console.log("Digite apenas números.");
        i--; //força que o looping seja executado com 10 valores válidos
    }
}

console.log("O valor total dos números digitados é: " + total);