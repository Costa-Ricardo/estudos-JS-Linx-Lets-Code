/**
 * Dado um vetor de strings, filtre os elementos do vetor 
 * para conter apenas strings com 5 caractéres ou menos.
 */

const arrayString = ["faca", "casal", "tapete", "ovo", "banana", "manga", "pera", "laranja"];

console.log(arrayString.filter(elemento => elemento.length <= 5));
