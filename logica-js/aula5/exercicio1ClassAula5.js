/**
 * Crie um vetor qualquer e faça um programa que imprima cada elemento do vetor usando o for.
 */

const matriz = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 5, 6],
];

for(let i=0; i < matriz.length; i++){
    for(let x=0; x < matriz[i].length; x++){
        console.log(matriz[i][x]);
    }
}