/**
 * Crie uma modelagem de classes para uma agenda 
 * capaz de armazenar contatos. Através dessa agenda é 
 * possível incluir, remover, buscar e listar contatos já cadastrados.
 */

const consulta = nome => contatos => contatos.nome === nome;

class Agenda{
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.listaContatos = [];
    }

    adicionar (nome, telefone, email){
        this.listaContatos.push({nome: nome, telefone: telefone, email: email});
        console.log("Contato adicionado");
    }

    remover(removePorNome){
        if(this.listaContatos.findIndex(consulta(removePorNome)) > -1){
            return this.listaContatos.splice(this.listaContatos.findIndex(consulta(removePorNome)), 1);
        }else{
            return `Contato não encontrado`
        }
    }

    buscar(buscaNome){
        if(this.listaContatos.findIndex(consulta(buscaNome))> -1){
            let encontrado = this.listaContatos.findIndex(consulta(buscaNome));
            return console.log(this.listaContatos[encontrado]);
        }else{
            return `Contato não encontrado`
        }
    }

    listarTodos(){
        return console.log(this.listaContatos);
    }
}

const agenda = new Agenda();

agenda.adicionar("Ricardo", 88888888, "ricardo@email.com");
agenda.adicionar("Jose", 33333333, "jose@email.com");
agenda.adicionar("Marcos", 22222222, "marcos@email.com");
agenda.listarTodos();
agenda.buscar("Jose");
agenda.remover("Ricardo");
agenda.listarTodos();