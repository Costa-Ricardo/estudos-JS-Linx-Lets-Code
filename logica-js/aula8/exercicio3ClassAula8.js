/**
Crie um Sistema de Recursos Humanos onde podemos adicionar colaboradores com as seguintes características:

Id(Deve ser único);
Nome;
Idade;
Cargo;
Salário;
Data de admissão(Utilize input do tipo 'date' para facilitar);
O sistema deve ter as seguintes ações:

Adicionar colaborador(Sempre limpar inputs após adicionar);
Remover colaborador;
Busca em tempo real(a cada tecla que colocamos no input) e avançada por id/nome/cargo;
Obs: Sempre atualizar a lista com cada ação que é disparada seja adiconar, remover, etc...
Exiba em alguma lugar na tela as seguintes informações:

Total de colaboradores;
Qual o custo mensal pagando todos esses colaboradores(Soma de todos os salários);
A média da idade dos colaboradores;
A média dos salários dos colaboradores;
Obs: Utilize funções de alta ordem para realizar os cálculos.
 */
const prompt = require("prompt-sync")({sigint:true})
const funcionarios = [
    { id: 1, nome : "Mario de Andrade", idade : 32, cargo: "vendedor", salario: 3000, dataAdmissao: new Date(2020, 12, 08)},
    { id: 2, nome : "João Silva", idade : 40, cargo: "gerente", salario: 5000, dataAdmissao: new Date(2000, 02, 05)},
    { id: 3, nome : "Marta Costa", idade : 25, cargo: "vendedora", salario: 3000, dataAdmissao: new Date(2018, 05, 02)},
    { id: 4, nome : "Paula Souza", idade : 21, cargo: "caixa", salario: 2000, dataAdmissao: new Date(2021, 06, 15)},
    { id: 5, nome : "André Santos", idade : 23, cargo: "caixa", salario: 2000, dataAdmissao: new Date(2020, 07, 05)},
];

const novofuncionarios = (id, nome, idade, cargo, salario) => ({id, nome, idade, cargo, salario, dataAdmissao : Date()})

const idBusca = parseInt(prompt("digite o id do funcionário: "));
const buscaFuncionario = funcionarios.find(c => c.id === idBusca);
let addFuncionario;

if(buscaFuncionario){
    console.log(buscaFuncionario); 
    removeFuncionario = prompt("Funcionário encontrado deseja Remover? [s]/[n] ").toUpperCase(); 
    switch (removeFuncionario){
        case 'S':
            console.log("removendo");
           if(idBusca > -1){
               funcionarios.splice(idBusca, 1);
           }
            break;
        case 'N':
            console.log("Consulta finalizada");
            break;
        default:
            console.log("Opção inválida digite S para adicionar e N para encerrar o programa ");
            break;
    }
}else{
    addFuncionario = prompt("Funcionário não encontrado deseja adicionar? [s]/[n] ").toUpperCase(); 
    switch (addFuncionario){
        case 'S':
            const id = funcionarios.length+1;
            const nome = prompt("Nome: ");
            const idade = parseInt(prompt("idade: "));
            const cargo = prompt("Cargo: ");
            const salario = parseFloat(prompt("Salário em R$ "));
            const novoFuncionario = novofuncionarios(id, nome, idade, cargo, salario, Date());
            funcionarios.push(novoFuncionario)
            console.log(funcionarios); //imprime a nova listagem de funcionarios
            break;
        case 'N':
            console.log("Fechando o programa");
            break;
        default:
            console.log(prompt("Opção inválida digite S para adicionar e N para encerrar o programa "));
    }
}

const mediaIdade = funcionarios.map(x => x.idade);
const mediaSalarial = funcionarios.map(x => x.salario);

console.log("A media de idade dos funcionário é: ", mediaIdade.reduce((soma, item)=>soma + item)/mediaIdade.length);
console.log("A media slarial dos funcionários é: R$", mediaSalarial.reduce((soma, item)=> soma + item)/mediaSalarial.length);
console.log("O custo mensal dos funcionário é: R$ ", mediaSalarial.reduce((soma, item)=> soma + item));