/**
 * Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando listas.
 */

 const prompt = require("prompt-sync")({sigint:true});

 let notas = new Array(4);
 let notaFinal = 0;
 
 for(let i=0; i < notas.length; i++){
     let notaBimestral = parseFloat(prompt("Digite a nota bimestral: "));
     notas[i] = notaBimestral;
 }
 for(let x=0; x < notas.length; x++){
     notaFinal += notas[x];
 }
 
 console.log("Média final foi: " + notaFinal/notas.length);