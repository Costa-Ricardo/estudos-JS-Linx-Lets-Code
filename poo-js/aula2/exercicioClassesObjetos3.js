/**
 * Crie uma classe Funcionario cujos atributos são nome e e-mail. 
 * Guarde as horas trabalhadas em um dicionário cujas chaves são 
 * o mês em questão e, em outro dicionário, guarde o salário por 
 * hora relativo ao mês em questão. Crie um método que retorna o 
 * salário mensal do funcionário.
 */

class Funcionario{
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
        this.horasTrab = {};
        this.salarioHr = {};
    };

    salarioMensal(){
        Object.keys(this.horasTrab, this.salarioHr).forEach((item) => {
            console.log("Salário de " + item + " = " + this.horasTrab[item]*this.salarioHr[item]);
        })
        return
    };
}

const funcionario = new Funcionario('Ricardo', 'ricardo@email.com');
funcionario.horasTrab["jan"] = 168;
funcionario.horasTrab["fev"] = 150;
funcionario.salarioHr["jan"] = 10;
funcionario.salarioHr["fev"] = 15;

console.log(funcionario);
funcionario.salarioMensal();