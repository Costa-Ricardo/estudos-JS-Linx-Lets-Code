/**
 * Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.
 */

const array = [3, 52, 1, 0, 11, 2, 3, 64, 5, 7, 8, 9, 10, -1, -12];

console.log(array.filter(elemento => elemento % 2 === 0));