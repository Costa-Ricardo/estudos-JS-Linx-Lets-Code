/**
Faça um programa que, dadas duas listas de mesmo tamanho, crie uma nova lista com cada elemento igual a soma dos 
elementos da lista 1 com os da lista 2, na mesma posição.
Exemplo:
Dadas lista1 = [1, 4, 5] e lista2 = [2, 2, 3], então lista3 = [1+2, 4+2, 5+3] = [3, 6, 8]
 */

const arr1 = [1, 5, 8, 6];
const arr2 = [9, 8, 4, 2];
const arrSoma = [];

for(let i=0; i<arr1.length; i++){
    arrSoma.push(arr1[i]+arr2[i]);
}

console.log(arrSoma);