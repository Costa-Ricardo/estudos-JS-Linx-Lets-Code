/**
 * Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.
 */

 const arrayNumerico = [ 1, 6, 9, 13, 4, 5, 65, 2, 78, 1, 6, 5, 3];
 console.log(arrayNumerico.filter(elemento => elemento % 2 === 0));