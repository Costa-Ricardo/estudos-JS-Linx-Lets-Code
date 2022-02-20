/**
 * Com base no exercício anterior, crie um sistema de cadastro e a classe Cliente. 
 * Seu programa deve perguntar se o usuário quer cadastrar um novo cliente, 
 * alterar um cadastro ou sair.
 * Dica: Você pode fazer esse exercício criando uma classe Sistema, 
 * que irá controlar o sistema de cadastros. 
 * Essa classe deve ter o atributo cadastro e os métodos para imprimir 
 * os cadastrados, cadastrar um novo cliente, 
 * alterar um cadastro ou sair.
 */
const prompt = require ("prompt-sync")({ sigint:true });

const consulta = nome => contatos => contatos.nome === nome;

class Cliente{
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.clienteCadastrados = [
                {nome: "RICARDO", idade: 36, email: "ricardo@email.com"},
                {nome: "JOSE", idade: 50, email: "jose@email.com"},
                {nome: "MARCOS", idade: 28, email: "marcos@email.com"},
            ];
        }

    adicionar (nome, idade, email){
        this.clienteCadastrados.push({nome: nome, idade: idade, email: email});
        console.log("Contato adicionado");
    }

    buscar(consultaNome){
        if(this.clienteCadastrados.findIndex(consulta(consultaNome)) > -1){
            let encontrado = this.clienteCadastrados.findIndex(consulta(consultaNome));
            return console.log(this.clienteCadastrados[encontrado]);
        }else{
            return `Contato não encontrado`
        }
    }

    listaTodos(){
        return console.log(this.clienteCadastrados);
    }
}

const sistemaAberto = new Cliente();
let consultaNome = prompt("Digite o nome do cliente: ").toUpperCase();
sistemaAberto.buscar(consultaNome);

const escolheOpcaoSistema = prompt("Escolha uma das opções: \n[t] listar todos os cliente \n[n] cadastrar um novo Cliente \n[a] Alterar um cadastro \n[s] Sair \n").toUpperCase();

//Tem que teclar ENTER para que o sistema entre no SWITCH
switch(escolheOpcaoSistema){
    case 'N':
        let cadastroTelefone = parseFloat(prompt("Digite o número do telefone do cliente: "));
        let cadastroEmail = prompt("Digite o e-mail do cliente: ").toLowerCase();
        sistemaAberto.adicionar(consultaNome, cadastroTelefone, cadastroEmail);   
        sistemaAberto.buscar(consultaNome);               
        break;
    case 'A':
        let alteraEmail = prompt("Digite o novo email: ").toLowerCase();
        sistemaAberto.clienteCadastrados.map(consultaNome => {consultaNome.email = alteraEmail})
        sistemaAberto.buscar(consultaNome);
        break;
    case 'T':
        sistemaAberto.listaTodos();
        break;
    case 'S':
        break;
    default:
        console.log("Digite N para cadastrar um novo client, A para alterar um cadastro ou N para sair. ");
}