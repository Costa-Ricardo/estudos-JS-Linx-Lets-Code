/**
 * Faça a multiplicação entre dois números usando somente soma.
 */

const prompt = require("prompt-sync")({sigint:true});

const num1 = parseInt(prompt("Digite o primeiro número: "));
const num2 = parseInt(prompt("Digite o segundo número: "));
let soma = 0;

if(isNaN(num1) || isNaN(num2)){
    console.log("Digite apenas números");
}else{
    for(let i=1; i <= num2; i++){
        soma += num1;
    }
    console.log(num1 + " x " + num2 + " = " + soma);
}