/**
Faça um programa que pede para o usuário digitar 5 números e, ao final, imprime uma lista com os 5 números digitados 
pelo usuário (sem converter os números para int ou float).
Exemplo: Se o usuário digitar 1, 5, 2, 3, 6, o programa deve imprimir a lista ['1','5','2','3','6']
 */
const prompt = require("prompt-sync")({siginit:true});

const arr = new Array(5);
let numRecebido;

for(let i=0; i < arr.length; i++){
    numRecebido = prompt("Digite um número: ");
    arr[i] = numRecebido;
}

console.log(arr);