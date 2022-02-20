/**
 * Faça um programa que imprima o maior número de uma lista, sem usar a função max().
 */
const arr = [ 1, 3, 36, 4, 52, 6, 7, 8, 9];

function compararNumeros(a, b){
    return a - b;
}

console.log(arr.sort(compararNumeros)[arr.length -1]);