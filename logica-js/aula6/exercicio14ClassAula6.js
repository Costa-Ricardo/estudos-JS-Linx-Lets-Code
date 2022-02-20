/**
 * Sorteie uma lista de 10 números e imprima:

a. uma lista com os 4 primeiros números;

b. uma lista com os 5 últimos números;

c. uma lista contendo apenas os elementos das posições pares;

d. uma lista contendo apenas os elementos das posições ímpares;

e. a lista inversa da lista sorteada (isto é, uma lista que começa com o último elemento da lista sorteada e termina com o primeiro);

f. uma lista inversa dos 5 primeiros números;

g. uma lista inversa dos 5 últimos números.
 */

//Onde os números serão sorteados
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numeroSorteado = new Array(10);
const arrPrimeiroNum = new Array(4);
const arrUltimoNum = new Array(5);
const arrPar = [];
const arrImpar = [];
const arrPrimeiroReverso = [];
const arrUltimoReverso = [];

//Preenche o vetor com os números que foram sorteados e os vetores com os 4 primeiros e os 5 últimos, desafio A e B
for(let i=0; i<numeroSorteado.length; i++){
    const numero = randomIntFromInterval(0, 100);
    numeroSorteado[i] = numero;
    if(i < 4){
        arrPrimeiroNum[i]=numero;
    }else if(i >= 4 && i < 9){ //resolve o problema mas ainda não estou feliz com o código acredito que possa melhorar ****REFATORAR****
        arrUltimoNum[i-4] = numeroSorteado[i]; 
     }
    
}
//Preenches os vetores com as posições pares e impares, desafio C e D
for(let j=0; j<numeroSorteado.length; j++){
    if(j % 2 === 0){
        arrPar.push(numeroSorteado[j]);
    }else{
        arrImpar.push(numeroSorteado[j]);
    }
}
//Inverte o vetor dos números sorteados, desafio E
const arrReverso = numeroSorteado.slice().reverse();
//Preenche os vetores com os 5 primeiros e 5 últimos invertidos, desafio F e G
for(let x=0; x<arrReverso.length; x++){
    if(x < 5){
        arrPrimeiroReverso[x]=arrReverso[x];
    }else{
        arrUltimoReverso[x-5]=arrReverso[x];
    }
}

//Imprime conforme o enunciado
console.log(`${numeroSorteado} números sorteados ORIGINALMENTE`);
console.log(`${arrPrimeiroNum} vetor com as 4 primeiras posições`);
console.log(`${arrUltimoNum} vetor com as 5 últimas posições`);
console.log(`${arrPar} vetor com as posições pares`);
console.log(`${arrImpar} vetor com as posições impares`);
console.log(`${arrReverso} vetor com o sorteio invertido`);
console.log(`${arrPrimeiroReverso} vetor com as 5 primeiras posições do sorteio invertido`);
console.log(`${arrUltimoReverso} vetor com as 5 últimas posições do sorteio invertido`);