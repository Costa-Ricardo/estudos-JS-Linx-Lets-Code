/**
 *Faça um algoritmo que mostre a tabuada de qualquer número escolhido pelo usuário (considerar tabuada do número 1 ao 10).
 */

const prompt = require("prompt-sync")({ sigint: true });

const numero = parseInt(prompt("Digite um número: "));
let count = 1;

if (numero <= 10 && numero > 0){
console.log("---------------------");
console.log("   A TABUADA DO ",numero);
console.log("---------------------");
while(count <= 10){
  console.log(count, " x ", numero, " = ", count*numero);
  count++;
  };
}else {
    console.log("Número inválido");
}
