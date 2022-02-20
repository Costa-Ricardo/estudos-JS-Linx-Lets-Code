class NomeDaClasse{
    constructor(){

    }
}

class Pessoa {
    //CONSTRUCTOR é uma palavra reservada é o método de criação de um objeto
    constructor(nome, idade){
        //THIS é informando que a variavel que deve ser utilizada é o atributo da classe Pessoa
        // e o segundo termo é o q é recebido 
        this.nome = nome;
        this.idade = idade;
    }
}

//o objeto só instanciado após o NEW 
const pessoa1 = new Pessoa("Ricardo", 36);

const pessoa2 = new Pessoa("Goku", 1000);

