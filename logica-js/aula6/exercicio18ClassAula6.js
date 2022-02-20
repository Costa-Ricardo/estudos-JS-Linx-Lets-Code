/**
Desafio 2 - Faça um programa como o do item anterior, porém que imprima a média sem considerar a maior e menor nota do aluno 
(nesse caso o número de provas precisa ser obrigatoriamente maior que dois).
Dica: crie uma cópia com a lista de todas as notas antes de fazer a média.
 */
const prompt = require('prompt-sync')({ sigint: true });
const alunos = [];
const notas = [];

alunos[0] = ((prompt("Digite o nome do aluno: ")));
alunos[1] = ((prompt("Digite a idade do aluno: ")));


const provas = (parseInt(prompt("Digite quantas provas o aluno fez? ")));

if (provas > 2) {
    for (let i = 0; i < provas; i++) {
        notas[i] = (parseFloat(prompt("Digite a " + (i + 1) + "ª nota do aluno ")));
    };
    
    alunos[2] = notas.concat();
    notas.sort();
    notas.pop();
    notas.shift();
    console.log(notas);

    const media = notas.reduce((a, b) => a + b) / notas.length;
    media.toFixed(2);
    alunos[3] = media;
    if (media >= 5) {
        alunos[4] = true;
    } else {
        alunos[4] = false;
    };

    console.log('O aluno ' + alunos[0] + ', idade ' + alunos[1] + ', com as notas ' + alunos[2] + 
    ', e a média de ' + alunos[3] + '. Foi aprovado? ' + alunos[4]);

} else {
    console.log("A quantidade de provas insuficiente precisam ter mais que 2 notas válidas.");
}