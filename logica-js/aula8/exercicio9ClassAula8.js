/**
 * Crie uma função para gerar um número inteiro aleatório entre -10 e 10. 
 * Em seguida, utilize a função map e a função criada para construir um array com 
 * 20 números inteiros aleatórios entre -10 e 10.
 */
function randomIntFromInterval(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const numsAleatorios = new Array(20);

//inicia o array 
for(let i=0; i < numsAleatorios.length; i++){
    numsAleatorios[i] = i; 
}

//percorre o array em cada posição e chama o random 
console.log(numsAleatorios.map(x => randomIntFromInterval(-10,10)));


//Uma outra solução para o exercicio

// function randomIntFromInterval(min, max){
//    return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const numsAleatorios = new Array(20);
// numsAleatorios.fill(0);
// const inclui = numsAleatorios.map(() = randomIntFromInterval(-10,10));
// console.log(inclui);