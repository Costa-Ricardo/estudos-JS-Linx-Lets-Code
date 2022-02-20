/**
 * Crie uma classe ContaCorrente com os atributos cliente 
 * (que deve ser um objeto da classe Cliente) e saldo. 
 * Crie métodos para depósito, saque e transferência. 
 * Os métodos de saque e transferência devem 
 * verificar se é possível realizar a transação.
 */

class Cliente{
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

class ContaCorrente{
    constructor(cliente, saldo){
        if(cliente instanceof Cliente){
            this.cliente = cliente;
            this.saldo = saldo;
        } else {
            throw "Cliente deve ser um cliente"
        }
    }

    deposito(valorDeposito){
        return this.saldo += valorDeposito;
    }

    saque(valorSaque){
        (valorSaque <= this.saldo) ? this.saldo -= valorSaque : console.log(`Saldo insuficiente.`);
    }

    transferencia(valorTransf, conta){
        if(valorTransf <= this.saldo){
            this.saldo -= valorTransf;
            conta.saldo += valorTransf;
        }else {
            console.log("Saldo insuficiente");
        }
    }
}

const cliente1 = new Cliente ("Ricardo", 36, "ricardo@email.com");
const cliente2 = new Cliente ("Jose", 50, "jose@email.com");

const conta1 = new ContaCorrente(cliente1, 5000);
const conta2 = new ContaCorrente(cliente2, 15000);

console.log(conta1);
console.log(conta2);

conta1.transferencia(1000, conta2);
conta1.deposito(100);
conta1.saque(3000);

console.log(conta1);
console.log(conta2);