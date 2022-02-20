/**
 * A empresa XKW concedeu um bônus de 20% do valor do salário a todos os funcionários com tempo de
 * trabalho na empresa igual ou superior a 5 anos e de 10% aos demais. Faça um algoritmo que receba o 
 * salário e o tempo de serviço de um funcionário, calcule e mostre o valor do bônus recebido por ele.
 */

const prompt = require ("prompt-sync")({ sigint: true });

const salario = parseFloat(prompt("Digite o salário: R$ "));
const tempoEmpresa = parseInt(prompt("Digite o tempo de empresa (em anos): "));
let bonus;

if (tempoEmpresa >= 5){
    bonus = salario*0.2;
    console.log("O bônus é de 20% e o valor acrescido será R$ ", bonus);
}else {
    bonus = salario*0.10;
    console.log("O bônus é de 10% e o valor acrescido será R$ ", bonus);
}