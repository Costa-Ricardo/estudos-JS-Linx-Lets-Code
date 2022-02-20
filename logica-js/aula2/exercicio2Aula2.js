/**
 * Construa um programa que receba um numero e verifique se ele é par ou impar.
 */

 const prompt = require("prompt-sync")({ sigint: true})

 const valor1 = parseInt(prompt("digite um número: ")); 

 if (valor1 % 2 === 0){
    console.log("O número digitado é par");
} else {
    console.log("O número digitado é ímpar")
}