/**
Faça um programa que, dadas dois vetores de mesmo tamanho, crie um novo vetor com cada elemento igual 
a soma dos elementos do vetor 1 com os do vetor 2, na mesma posição.

Exemplo:

Dadas vetor1 = [1, 4, 5] e vetor2 = [2, 2, 3], então vetor3 = [1+2, 4+2, 5+3] = [3, 6, 8]
 */
const arr1 = [1, 5, 8, 6];
const arr2 = [9, 8, 4, 2];
const arrSoma = [];

for(let i=0; i<arr1.length; i++){
    arrSoma.push(arr1[i]+arr2[i]);
}

console.log(arrSoma);