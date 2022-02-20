/**
 * Faça um algoritmo que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0.
 */
 const prompt = require("prompt-sync")({ sigint: true});

 let continua = true;
 
 do {
     let num = parseInt(prompt("Digite qualquer número ou 0 para sair: "));
     if(num === 0){
         continua = false;
         console.log("Digitado 0, saindo do programa...");        
     }else if(isNaN(num)){
         console.log("Valor digitado inválido, digite apenas números");
     }
 } while(continua);