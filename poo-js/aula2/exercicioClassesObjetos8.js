/**
 * Crie uma classe Cliente cujos atributos são nome, idade e e-mail. 
 * Construa um método que imprima as informações tal como abaixo:
 */

class Cliente{
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    dados(){
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nE-mail: ${this.email}`
    }
}

const cliente1 = new Cliente("Fulano de Tal", 40, "fulano@mail.com");
console.log(cliente1.dados());