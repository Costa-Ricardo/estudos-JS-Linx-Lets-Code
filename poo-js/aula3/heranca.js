/**
 * 
 */

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg){
        super(nome, idade); //esses atributos pertencem a classe pai PESSOA
        this.cpf = cpf;
        this.rg = rg;
    }
}

class Banana{
}

const cidadao = new Cidadao('Ricardo', 36, "0000", "11111")

console.log(cidadao instanceof Cidadao);;
console.log(cidadao instanceof Pessoa);
console.log(cidadao instanceof Banana);