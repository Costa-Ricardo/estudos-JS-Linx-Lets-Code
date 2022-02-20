/**
 * Criar uma função media de 2 números utilizando apenas a função calcular; media(a,b)
 */
 const prompt = require("prompt-sync")({sigint:true});
 
 const somar = (a, b) => a+b;
 const subtrair = (a, b) => a-b;
 const multiplicar = (a, b) => a*b;
 const dividir = (a, b) => b > 0 ? a/b : NaN;

 const num1 = parseInt(prompt("Digite o primeiro valor: "));
 const num2 = parseInt(prompt("Digite o segundo valor: "));
 const media = (a,b) => calcular(dividir, calcular(somar, a,b), 2);

 console.log(media);