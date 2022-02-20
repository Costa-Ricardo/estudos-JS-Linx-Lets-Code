/**
 * Crie um código que leia 10 valores inteiros e:
    • Encontre e mostre o maior valor
    • Encontre e mostre o menor valor
    • Calcule e mostre a média dos números lidos
 */

const prompt = require("prompt-sync")({ sigint:true });
let numerosDigitados = []; 
let media = 0;

for(let i=0; i < 10; i++){
    let num = parseInt(prompt("digite o número: "));
    if (isNaN(num)){   //valida se o valor digitado é um número pois se não for o PARSEINT retorna NOT A NUMBER (NAN)
        console.log("Digite apenas números");
        i--;  //tira 1 do contador para forçar que o array tenha 10 valores validos
    } else {
        numerosDigitados.push(num);
    }
}
for(value of numerosDigitados){
    media += value;
}

//console.log(numerosDigitados); //imprime o array que foi digitado
console.log("O maior valor digitado foi: " + numerosDigitados.sort()[numerosDigitados.length -1]);
console.log("O menor valor digitado foi: " + numerosDigitados[0]);
console.log("a media dos valores digitados foi: " + (media / numerosDigitados.length));