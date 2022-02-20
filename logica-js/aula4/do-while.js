/**
 * A diferença do DO WHILE para o WHILE é q antes ele faz e depois eu valida o looping
 * 
 */

const prompt = require("prompt-sync")({ sigint: true });

// function randomIntFromInterval(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const numero = randomIntFromInterval(1, 10);

// do{
//     var apostaUsuario = parseInt(prompt("Digite um número entre 1 e 10: "));
//     if (apostaUsuario !== numero){
//         apostaUsuario = console.log("Tente novamente: ");
//     }
// } while(apostaUsuario !== numero); // só sai do looping se o WHILE for FALSE

// console.log("Parabéns! Você acertou!");



// Um rolador de Dados
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let acabou = false //flag q ser um "controlador" e informará ao programa que deverá sair do looping

do {
    const dado = parseInt(prompt(" Digite a quantidade de lados do Dado (4, 6, 8, 10, 12 ou 20) ou 0 para terminar: "));
    if(dado === 4 || dado === 6 || dado === 8 || dado === 10 || dado === 12 || dado === 20){
       console.log(randomIntFromInterval(1, dado));
    }else if (dado === 0 ){
        acabou = true;
    }else{
        console.log("Valor inválido");

    }
} while(!acabou);