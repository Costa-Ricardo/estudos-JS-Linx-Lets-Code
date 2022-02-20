/**
 * Faça um programa que sorteie 10 números entre 0 e 100 e imprima:

a. o maior número sorteado;

b. o menor número sorteado;

c. a média dos números sorteados;

d. a soma dos números sorteados.
 */
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numeroSorteado = new Array(10);
let soma = 0;

for(let i=0; i<numeroSorteado.length; i++){
    const numero = randomIntFromInterval(0, 100);
    numeroSorteado[i] = numero;
    soma+= numero;
}

//console.log(numeroSorteado);
console.log(numeroSorteado.sort()[numeroSorteado.length -1] + " é o maior número sorteado");
console.log(numeroSorteado.sort()[0] + " é o menor número sorteado");
console.log(soma + " a soma dos números sorteado.");
console.log(soma/numeroSorteado.length + " a média dos números sorteados");