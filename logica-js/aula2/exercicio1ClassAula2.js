/**
 * Faça um algoritmo que receba a idade do usuário e verifique se ele tem 18 anos ou mais. 
 * Se a resposta for positiva escrever “maior de idade”, senão “menor de idade”.
 */

const prompt = require ("prompt-sync")({ sigint: true });

const idade = parseInt(prompt("Digite a sua idade: "));

if (idade >= 0){
    if (idade >= 18){
        console.log("Você é maoir de idade");
    }else {
        console.log("Você é menor de idade");
    }
}else {
    console.log("Idade inválida");
}