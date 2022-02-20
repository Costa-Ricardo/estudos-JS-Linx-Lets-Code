/**
 * Faça um programa, usando loops, que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0. Ao final imprima a soma de todos os números digitados
 */

const prompt = require("prompt-sync")({sigint:true});

let continua = true //flag q ser um "controlador" e informará ao programa que deverá sair do looping
let soma =  0;

//O programa conforme o enunciado não pede uma validação se o valor digitado é um número mas se for digitado uma letra por exemplo a SOMA retorna NaN.
do {
    const num = parseInt(prompt("Digite qualquer número para que seja realizado a soma ou 0 para sair: "));
    if(num !== 0){
        soma += num;
    }else{
        continua = false;
        console.log("Valor inválido saindo do programa...");
    }
} while(continua);
        
console.log("A soma dos valores digitados foi: " + soma);

//Se o programa realizar a validação do valor a soma sempre retorna um número não tendo a inconsistência na soma

// let continua = true //flag q ser um "controlador" e informará ao programa que deverá sair do looping
// let soma =  0;
        
// do {
//     const num = parseInt(prompt("Digite qualquer número para que seja realizado a soma ou 0 para sair: "));
//     if(num !== 0 && !isNaN(num)){
//         soma += num;
//     }else{
//         continua = false;
//         console.log("Valor inválido saindo do programa...");
//     }
// } while(continua);
        
// console.log("A soma dos valores digitados foi: " + soma);