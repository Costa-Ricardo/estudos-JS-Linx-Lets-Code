/**
 * Dado um array numérico x, 
 * crie um novo array com os elementos do array x que são maiores do que 5.
 */

const array = [3, 52, 1, 0, 11, 2, 3, 64, 5, 7, 8, 9, 10, -1, -12];
const arrayMaior5 = array.filter(elemento => elemento > 5);

console.log(arrayMaior5);

//Maneira que eu faria mas no enunciado pede um Novo array
console.log(array.filter(elemento => elemento > 5));