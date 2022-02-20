/**
Criar um programa que receba 3 valores e acrescente eles a uma array
 */

const prompt = require("prompt-sync")({ sigint: true})

const valor1 = prompt("Digite o 1º valor: ");
const valor2 = prompt("Digite o 2º valor: ");
const valor3 = prompt("Digite o 3º valor: ");
const array = [];

array.push(valor1);
array.push(valor2);
array.push(valor3);

console.log(array);
