/**
Faça um programa que dados dois vetores de mesmo tamanho, imprima o produto escalar entre eles.

OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i do vetor1 
pelo número na posição i do vetor2.
 */

const arr1 = [1, 5, 8, 6];
const arr2 = [9, 8, 4, 2];
const arrPrdEscalar = [];
let somaArray = 0;

for(let i=0; i<arr1.length; i++){
    arrPrdEscalar.push(arr1[i]*arr2[i]);
}

for(let j=0; j < arrPrdEscalar.length; j++){
    somaArray += arrPrdEscalar[j]; 
}

console.log(somaArray);