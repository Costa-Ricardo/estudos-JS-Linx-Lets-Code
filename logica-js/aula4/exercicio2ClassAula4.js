/**
 * Faça um programa que escreva todos os números múltiplos de 7 entre 1 e N, sendo N um valor introduzido pelo usuário. Por exemplos: 7, 14, 21, 28, 35.
 */

const prompt = require("prompt-sync")({sigint:true});

let count = 1;
const num = parseInt(prompt("Digite um número: "));
if(!isNaN(num)){
    while(count <= num){
        console.log(count*7);
        count++;
    }
}else{
    console.log("Digite apenas números.");
}