/**
 * Faça um programa que imprima o maior número de um vetor.
 */
const arr = [1, 5, 6, 8, 64, 100, 7, 9, 10, 1, 2];

function compararNumeros(a, b){
    return a - b;
}

console.log(arr.sort(compararNumeros)[arr.length -1]);