/**
 * Faça um programa para somar os números compreendidos entre 1 e 1000.
 */

const prompt = require("prompt-sync")({sigint:true});

let continua = true //flag q ser um "controlador" e informará ao programa que deverá sair do looping
let soma =  0;

do {
    const num = parseInt(prompt("Digite um número entre 1 e 1000 para que seja realizado a soma ou qualquer outra tecla para sair: "));
    if(num >= 1 && num <= 1000){
       soma += num;
    }else{
        continua = false;
        console.log("Valor inválido saindo do programa...");
    }
} while(continua);

console.log("A soma dos valores digitados foi: " + soma);