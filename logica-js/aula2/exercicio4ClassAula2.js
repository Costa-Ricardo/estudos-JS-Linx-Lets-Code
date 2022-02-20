/**
 * Implemente um código para aprovar empréstimo bancário. O código deve pedir 3 informações: 
 * valor do empréstimo, número de parcelas e salário do solicitante. Aprovar empréstimo caso o 
 * valor das parcelas representem no máximo 30% do salário do solicitante.
 */

const prompt = require ("prompt-sync")({ sigint: true});

const emprestimo = parseFloat(prompt("Digite o valor do empréstimo: R$ "));
const qtdeparcelas = parseInt(prompt("Digite a quantidade de parcelas: "));
const salario = parseFloat(prompt("Digite o salário: R$ "));

const parcela = emprestimo / qtdeparcelas;
const limite= salario * 0.3

if(parcela <= limite){
    console.log("Empréstimo aprovado, valor será pago em ", qtdeparcelas, " pagamentos de R$ ", parcela);
}else {
    console.log("Empréstimo reprovado, valor máximo por parcela é R$ ", limite);
}
