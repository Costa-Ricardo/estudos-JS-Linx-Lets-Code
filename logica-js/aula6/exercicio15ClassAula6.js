/**
 * Faça um programa que sorteia 10 números entre 0 e 100 e conte quantos números sorteados são maiores que 50.
 */
 function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numeroSorteado = new Array(10);
let numMais50 = 0;

for(let i=0; i<numeroSorteado.length; i++){
    const numero = randomIntFromInterval(0, 100);
    numeroSorteado[i] = numero;
    if(numeroSorteado[i] > 50){
        numMais50++;
    }
}

console.log(numeroSorteado);
console.log(numMais50 + " números são maiores que 50.");