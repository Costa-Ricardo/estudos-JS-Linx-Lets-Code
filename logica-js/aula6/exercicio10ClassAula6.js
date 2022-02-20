/**
Faça um programa que dadas duas listas de mesmo tamanho, imprima o produto escalar entre elas.
OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i da lista1 
pelo número na posição i da lista2, com i variando de 0 ao tamanho da lista.
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