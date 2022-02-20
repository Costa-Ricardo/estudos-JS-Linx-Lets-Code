/**
 * Faça um programa que lê uma indeterminada quantidade de números até que o 0 (zero) seja digitado. Ao final, mostre os três menores de forma decrescente.
 */

const prompt = require("prompt-sync")({ sigint: true});

let continua = true;
let numAcumulado = [];
let arryDecrescente = new Array(3);

//Função que será utilizada para comparar os números do array numAcumulado, pq no array [1, 5, 3, 10, 20] era ordenado [1, 10, 20, 3, 5]
function compararNumeros(a, b){
    return a - b;
}

do {
    let num = parseInt(prompt("Digite qualquer número para que seja armazenado ou 0 para sair: "));
    if(num === 0){
        continua = false;
        console.log("Digitado 0, saindo do programa...");        
    }else if(isNaN(num)){
        console.log("Valor digitado inválido, digite apenas números");
    }else{
        numAcumulado.push(num);
    }
} while(continua);

//Ordena os valores do array utilizando a função compararNumeros
numAcumulado.sort(compararNumeros);

//povoa o novo array apenas com os três menores valores digitados
for(let i=0; i < arryDecrescente.length; i++){
    arryDecrescente[i] = numAcumulado[i];
}
console.log(arryDecrescente.reverse());