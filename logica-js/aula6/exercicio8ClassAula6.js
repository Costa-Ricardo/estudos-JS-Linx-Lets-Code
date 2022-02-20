/**
Agora usando a função max() faça um programa que imprima os três maiores números de uma lista.
Dica: Use o método próprio de listas .remove().
 */

const arr = [ 1, 3, 36, 4, 52, 6, 7, 8, 9];
let arrMax=[];

for(let i=0; i<3; i++){
    let buscar = Math.max(...arr);
    let indice = arr.indexOf(buscar);
    while(indice >= 0){
        arrMax[i] = arr.splice(indice, 1);
        indice = arr.indexOf(buscar);
    }  
}
console.log(arrMax)

