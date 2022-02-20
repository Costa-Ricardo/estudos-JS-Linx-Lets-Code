/**
 * Pegue o vetor gerada no exercício anterior e transforme cada um dos itens desse vetor em um number.
 *
 * OBS: Não é para alterar o programa anterior, mas sim o vetor gerado por ele.
 */

const arr = [1, 5, 6, 8, 64, 100, 7, 9, 10, 1, 2];
const arrNumber = [];

 for(let i=0; i<arr.length; i++){
    arrNumber[i] = parseInt(arr[i]);
 }

 //console.log(typeof arrNumber[0]); //verifica se o tipo é Number
 console.log(arrNumber);