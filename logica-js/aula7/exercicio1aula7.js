/**
 *O usuário vai digitar uma operação (+ - * /) e 2 parâmetros. 
 *Realize o calculo pedido pelo usuário.
 */
const prompt = require("prompt-sync")({sigint:true});

const somar = (a, b) => a+b;
const subtrair = (a, b) => a-b;
const multiplicar = (a, b) => a*b;
const dividir = (a, b) => b > 0 ? a/b : NaN;

const calcular = (operacao, a, b) => operacao(a,b);
const num1 = parseInt(prompt("Digite o primeiro valor: "));
const operacao = prompt("Digite a operação: ");
const num2 = parseInt(prompt("Digite o segundo valor: "));
let resultado = 0;
switch (operacao){
    case '+':
        resultado = calcular(somar, num1, num2);
        break;
    case '-':
        resultado = calcular(subtrair, num1, num2);
        break;
    case 'x':
    case '*':
        resultado = calcular(multiplicar, num1, num2);
        break;
    case '/':
        resultado = calcular(dividir, num1, num2);
        break;
    default:
        console.log("operação inválida");
        break;
}

console.log(resultado);