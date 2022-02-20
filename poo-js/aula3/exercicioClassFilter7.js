/**
 * Dado:
 * const numeros = [1,2,3,2,1,3,3,5,4,6]
 * 
 * Utilize filter para retornar um novo array sem números repetidos.
 */

 const numeros = [1,2,3,2,1,3,3,5,4,6];

 console.log(numeros.filter((num, i) => numeros.indexOf(num) === i));