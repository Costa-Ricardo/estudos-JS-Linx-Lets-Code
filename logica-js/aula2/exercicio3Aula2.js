/**
 * Faça um algoritmo para calcular a média final da disciplina de Programação, mostrar essa média final e 
 * também uma mensagem informando se o aluno foi aprovado (média >= 7) * ou reprovado. Considere duas avaliações.
 */



// if ( lider.brilhante === true && time.brilhante === true){
//     console.log(resultados++)
// }

// if ( lider.brilhante === true && time.brilhante === true ) {
//     resultados++;
// }
// if ( lider.fantastico === true && time.incrivel === true ) {
//     resultados++;
// }
// if ( lider.fantastico === true && time.incrivel === true ) {
//     console.log("AU AU AU VAMOS SER LÍDERES!!");
// }

const prompt = require ("prompt-sync")({ sigint: true })

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

const media = (nota1+nota2)/2.0;
console.log("A média foi " + media)

console.log("---------------------------")

if (media >= 7 ){
    console.log("Aluno aprovado");
}else {
    console.log("Aluno reprovado")
}

console.log("---------------------------")