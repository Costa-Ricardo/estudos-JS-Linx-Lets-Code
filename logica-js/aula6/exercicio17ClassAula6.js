/**
Desafio 1 - Faça um programa que peça para o usuário digitar o nome e a idade de um aluno e o número de provas que esse aluno fez. 
Depois, o programa deve pedir para o usuário digitar as notas de cada prova do aluno. Ao final o programa deve imprimir uma lista contendo:
a. Nome do aluno na posição 0;
b. Idade do aluno na posição 1;
c. Uma lista com todas as notas na posição 2;
d. A média do aluno na posição 3;
e. True ou False, caso a média seja maior que 5 ou não, na posição 4.
Dica: Use o que você fez nos exercícios anteriores para criar esse programa.
 */
const prompt = require("prompt-sync")({sigint:true});

const qtdadeAlunos = parseInt(prompt("Digite a quantidade de alunos: "));
let alunos = new Array(qtdadeAlunos);
const provas = parseInt(prompt("Informe o número de provas: "));
const segundaNota = [];
let media = [];
let notasAluno5 = [];
let somaNotas = 0;
let aprovado = false;

for(let i=0; i < alunos.length; i++){
    alunos[i] = new Array(provas+3);
    alunos[i][0] = prompt(`Digite o nome ${i+1}º aluno: `);
    alunos[i][1] = parseInt(prompt(`Digite a idade do ${i+1}º aluno: `));
    alunos[i][2] = provas;
    for(let j=0; j < provas; j++){
        alunos[i][j+3] = parseInt(prompt(`Digite a ${j+1}ª nota: `)); 
    }
}
for(let i=0; i < alunos.length; i++){
    segundaNota[i] = alunos[i][4];
}

media = alunos[3].slice(3, alunos[3].length);

notasAluno5 = alunos[4].slice(3, alunos[3].length);
for(let i=0; i < notasAluno5.length; i++){
    somaNotas += notasAluno5[i];
}
if((somaNotas/provas) > 5){
    aprovado = true;
}


console.log(`O nome do primeiro aluno é ${alunos[0][0]}`);
console.log(`A idade do 2º aluno é ${alunos[1][1]}`);
console.log(`A segundas notas foram ${segundaNota}`);
console.log("A média das notas 3º aluno é ", media.reduce((somatoria, num) => (
    somatoria + num 
), 0)/provas);
console.log("O 5º aluno está aprovado? ", aprovado);

