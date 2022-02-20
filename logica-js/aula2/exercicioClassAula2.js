/**
 * Escreva um código que recebe 2 números de entrada(utilize prompt()) e realize todas as operações 
 * aritméticas básicas(+, -, *, /), no final exiba o resultado das 4 operações no console.
 */

const prompt = require ("prompt-sync")({ sigint: true })

const numero1 = parseFloat(prompt("Digite um número: "));
const numero2 = parseFloat(prompt("Digite outro número: "));

let resultadoSoma = numero1 + numero2;
let resultadoSubtracao = numero1 - numero2;
let resultadoMultiplicacao = numero1 * numero2;
let resultadoDivisao = numero1 / numero2;

console.log("------------------------------");
console.log("Calculando....");
console.log("------------------------------");
console.log(numero1 + " mais " + numero2 + " é " + resultadoSoma);
console.log(numero1 + " menos " + numero2 + " é " + resultadoSubtracao)
console.log(numero1 + " vezes " + numero2 + " é " + resultadoMultiplicacao)
console.log(numero1 + " dividido por " + numero2 + " é " + resultadoDivisao);