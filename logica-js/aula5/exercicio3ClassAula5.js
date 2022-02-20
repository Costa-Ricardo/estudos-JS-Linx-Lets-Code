/**
 * Faça um programa que olhe todos os itens de um vetor e diga quantos deles são pares.
 */
const arr = [1, 2, 3, 5, 10, 12, 6, 8, 63, 78];
let par = 0;
let arrPar = [];

for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        par++;
        arrPar.push(arr[i]);  
    }
}
console.log(par + " elementos são pares");
console.log("Os valores pares são: " + arrPar); //imprime apenas os valores que são pares que estavam dentro do array par;