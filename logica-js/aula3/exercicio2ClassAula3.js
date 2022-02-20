/**
 * Escreva um código que simule uma calculadora básica, provendo a leitura de um valor, seguido da operação(+, -, * e /) e do segundo valor.
 */

const prompt = require("prompt-sync")({ sigint: true });

const valor1 = parseFloat(prompt("Digite o primeiro número: "));
const operacao = prompt("Digite a operação matemática: ");
const valor2 = parseFloat(prompt("Digite o segundo número: "));
let resultado; 

// if (operacao === "+"){
//     resultado = valor1 + valor2;
//     console.log("A soma dos valores ", valor1, " e ", valor2, " é ",resultado);
// }else if (operacao === "-"){
//     resultado = valor1 - valor2;
//     console.log("A subtração dos valores ", valor1, " e ", valor2, " é ",resultado);
// }else if (operacao === "x" || operacao === "*"){
//     resultado = valor1 * valor2;
//     console.log("A multiplicação dos valores ", valor1, " e ", valor2, " é ",resultado);
// }else if (operacao === "/"){
//     resultado = valor1 / valor2;
//     console.log("A divisão dos valores ", valor1, " e ", valor2, " é ",resultado);
// }else {
//     console.log("Operação inválida, disponíveis SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO");
// }

switch (operacao){
    case "+":
        resultado = valor1 + valor2;
        console.log("A soma dos valores ", valor1, " e ", valor2, " é ",resultado);
        break;
    case "-":
        resultado = valor1 - valor2;
        console.log("A subtração dos valores ", valor1, " e ", valor2, " é ",resultado);
        break; 
    case "x":
    case "*":
        resultado = valor1 * valor2;
        console.log("A multiplicação dos valores ", valor1, " e ", valor2, " é ",resultado);
        break;
    case "/":
        resultado = valor1 / valor2;
        console.log("A divisão dos valores ", valor1, " e ", valor2, " é ",resultado);
        break;
    default:
        console.log("Operação inválida, disponíveis SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO");
}