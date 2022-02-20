/**
 * Faça um código que imprima todos os valores da matriz
 */

 const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for(let i=0; i < matriz.length; i++){
    for(let x=0; x < matriz[i].length; x++){
        console.log(matriz[i][x]);
    }
}