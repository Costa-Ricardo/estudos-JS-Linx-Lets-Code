/**
 * Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. 
 * A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que 
 * o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados 
 * nas variáveis.
 */

let valorA = 10;
let valorB = 20;
let transferindo = valorA;

console.log("Valor da variável A: " + valorA);
console.log("Valor da variável B: " + valorB);
console.log("-----------------------------");
console.log("Transferindo....");
valorA = valorB;
valorB = transferindo;
console.log("-----------------------------");
console.log ("Novo valor da variável A: " + valorA);
console.log ("Novo valor da variável B: " + valorB);

