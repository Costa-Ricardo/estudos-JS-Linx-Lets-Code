/**
 * Faça um algoritmo que receba três números inteiros e mostre o maior.deles. 
 * Considere que os números sempre serão diferentes
 */

const prompt = require ("prompt-sync")({ sigint: true });

const num1 = parseInt(prompt("Digite o primeiro número: "));
const num2 = parseInt(prompt("Digite o segundo número: "));
const num3 = parseInt(prompt("Digite o terceiro número: "));

if (num1 > num2 && num1 > num3){
    console.log("O ", num1, " é o maior número digitado");
}if (num2 > num1 && num2 > num3){
    console.log("O ", num2, " é o maior número digitado");
}if (num3 > num1 && num3 > num2){
    console.log("O ", num3, " é o maior número digitado");
}