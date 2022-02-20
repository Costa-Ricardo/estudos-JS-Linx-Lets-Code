/**
 * Faça uma classe ContaVip que difere da ContaCorrente 
 * por ter cheque especial (novo atributo) e é filha da 
 * classe ContaCorrente. Você precisa implementar os 
 * métodos para saque, transferência ou depósito?
 */

class ContaCorrente{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valorDeposito){
        return this.saldo =+ valorDeposito;
    }

    saque(valorSaque){
        if(this.saldo > valorSaque){
            this.saldo = this.saldo - valorSaque;
        }else{
            console.log("Saldo insuficiente");
        }
        return
    }

    consultaSaldo(){
        return this.saldo;
    }
}

// const conta = new ContaCorrente(0);
// conta.deposito(100);
// console.log(conta.consultaSaldo());
// conta.saque(150);
// console.log(conta.consultaSaldo());

class ContaVip extends ContaCorrente{
    constructor(saldo, chequeEspecial){
        super(saldo);
        this.chequeEspecial = chequeEspecial;
    }
    
    saqueChequeEspecial(valorSaque){
        if((this.saldo + this.chequeEspecial) >= valorSaque){
            this.saldo = this.saldo - valorSaque;
            this.chequeEspecial = this.chequeEspecial + this.saldo;
        }else{
            console.log("Saque saldo insuficiente");
        }
    }

    saldoChequeEspecial(){
        return this.chequeEspecial;
    }
}

const conta = new ContaVip(0, 100);
conta.deposito(50);
console.log(conta.consultaSaldo());
console.log(conta.saldoChequeEspecial());
conta.saqueChequeEspecial(140);
console.log(conta.saldo);
console.log(conta.chequeEspecial);