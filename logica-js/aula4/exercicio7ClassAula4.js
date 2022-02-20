/**
 * Informe, de forma decrescente todos os pares entre N (número fornecido pelo usuário) e -N.
 */

const prompt = require("prompt-sync")({sigint:true});

const numDigitado = parseInt(prompt("Digite um número: "));
let arrayPares = [];
let arrayParesNegativos = [];
let arrayFinal = [];
let num = numDigitado;

//Função que será utilizada para comparar os números do array numAcumulado, pq no array [1, 5, 3, 10, 20] era ordenado [1, 10, 20, 3, 5]
function compararNumeros(a, b){
    return a - b;
}

for(let i=0; i < numDigitado; i++){
        if(num % 2 == 0){
        arrayPares.push(num); //povoa o array de pares positivos
        arrayParesNegativos.push(num*-1); //povoa o array de pares negativoss
    }
    num --;
}

console.log(arrayFinal = arrayPares.concat(arrayParesNegativos).sort(compararNumeros).reverse());