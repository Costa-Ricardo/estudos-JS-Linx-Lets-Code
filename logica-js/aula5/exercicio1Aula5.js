/**
 * Imprimir apenas uma coluna da matriz
 */
const prompt= require("prompt-sync")({sigint:true});

const coluna = parseInt(prompt("Digite um número: ") - 1);

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
if(coluna <= matriz.length){
    for(let i=0; i < matriz.length; i++){
        console.log(matriz[i][coluna]);
    }
}