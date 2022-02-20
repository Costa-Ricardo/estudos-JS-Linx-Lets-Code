/**
 * Uitilize o código que foi disponibilizado na aula e siga as 
 * regras de negócio da lista de exercícios.

Considere que o objeto do aluno contém as seguintes características:

Id (Único)(Number)
Nome(String)
Idade(Number)
Exercicios Adaptados(Boolean)
Professor Responsável(String)
Tem Acesso(Boolean)(Para bloquear entrada caso necessário)
Valor Mensalidade(Number)
No sistema de acadêmia, adicione as seguintes funcionalidades:

Adicionar aluno;
Remover aluno;
Ao adicionar aluno, verifique se ele precisa ter exercícios 
adaptados(Se idade maior que 60) e coloque true ou false para 
essa propriedade no objeto;
O aluno sempre terá um professor responsável, exiba em um select 
a lista de professores que podem ser selecionados como responsáveis 
e grave a informação no objeto.
 */

const prompt = require("prompt-sync")({siginit:true});

const alunos = [
    {id: 1, nome: 'Ricardo', sobrenome: 'Andrade', idade: 36, execicioAdp: false, professor: 'Luis Roberto', temAcesso: true, mensalidade: 100},
    {id: 2, nome: 'Flavia', sobrenome: 'Souza', idade: 25, execicioAdp: false, professor: 'Luis Roberto', temAcesso: true, mensalidade: 100},
    {id: 3, nome: 'Paula', sobrenome: 'Martins', idade: 70, execicioAdp: true, professor: 'Luciana Tavares', temAcesso: true, mensalidade: 70},
    {id: 4, nome: 'Pedro', sobrenome: 'Silva', idade: 18, execicioAdp: false, professor: 'Luis Roberto', temAcesso: true, mensalidade: 150},
    {id: 5, nome: 'Marcos', sobrenome: 'Moura', idade: 66, execicioAdp: true, professor: 'Luciana Tavares', temAcesso: true, mensalidade: 70},
];

const novosAlunos = (id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade) => ({id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade})

const buscaNome = prompt("digite o nome do aluno: ");
const buscaAluno = alunos.find(a => a.nome === buscaNome);
let addAlunos;

if(buscaAluno){
    console.log(buscaAluno); 
    removeAluno = prompt("Aluno encontrado [r] para Remover [s] para Sair: ").toUpperCase(); 
    switch (removeAluno){
        case 'R':
            console.log("removendo");
            alunos.splice(buscaAluno.id - 1, 1);
            break;
        case 'S':
            console.log("Consulta finalizada");
            break;
        default:
            console.log("Opção inválida digite S para adicionar e N para encerrar o programa ");
            break;
    }
}else{
    addAlunos = prompt("Aluno não encontrado deseja adicionar? [s]/[n] ").toUpperCase(); 
    switch (addAlunos){
        case 'S':
            const id = alunos.length+1;
            const nome = prompt("Nome: ");
            const sobrenome = prompt("Sobrenome: ");
            const idade = parseInt(prompt("idade: "));
            const mensalidade = parseFloat(prompt("Mensalidade em R$ "));
            let exercicioAdp = false;
            let professor = "";
            if(idade >= 60){
                exercicioAdp = true;
            }
            const selecionaProf = parseInt(prompt("Selecione o professor 1 - Luis Roberto / 2 - Luciana Tavares: "));
            switch(selecionaProf){
                case 1: 
                professor = "Luis Roberto";
                break;
                case 2:
                    professor = "Luciana Tavares"
                    break;
                default:
                    console.log("Opção inválida. Digite 1 - Luis Roberto / 2 - Luciana Tavares");
                    break;
            }
            const temAcesso = true;
            //Conforme a ordem que é informada dentro do novosAlunos() é o preenchimento do novo objeto Aluno
            const novoAluno = novosAlunos(id, nome, sobrenome, idade, exercicioAdp, professor, temAcesso, mensalidade);
            alunos.push(novoAluno)
            break;
        case 'N':
            console.log("Fechando o programa");
            break;
        default:
            console.log(prompt("Opção inválida digite S para adicionar e N para encerrar o programa "));
    }
}
console.log(alunos);