/**
 * Faça um programa que olhe todos os itens de uma lista e diga quantos deles são pares.
 */

const arr = [ 1, 3, 36, 4, 52, 6, 7, 8, 9];
let pares = 0;

for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        pares++;
    }
}
console.log(pares)