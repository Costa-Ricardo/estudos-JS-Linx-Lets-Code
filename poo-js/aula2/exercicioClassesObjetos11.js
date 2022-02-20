/**
 * Crie uma classe Fração cujos atributos são numerador (número de cima) 
 * e denominador (número de baixo).
 * Implemente os métodos de adição, subtração, multiplicação, divisão 
 * que retornam objetos do tipo Fração.
 * Implemente também o método _ repr _.
 * Implemente métodos para comparação: igualdade (==) e desigualdades (!=, <=, >=, < e >).
 */

/**
 * Tem um vídeo da Rafaela Ballerini que ela ensina como deixar o readme do perfil mais bonito.
 */

class Fracao{
    constructor(numerador, denominador){
        this.numerador = numerador;
        this.denominador = denominador;
    }

    repr(){
        return console.log(this.numerador, "/", this.denominador);
    }
}

class OperacoesComFracoes extends Fracao{
    constructor (numerador, denominador){
        super(numerador, denominador);
    }

    soma(fracao1, fracao2){
        if(fracao1.denominador === fracao2.denominador){
            return `A soma das frações é ${fracao1.numerador + fracao2.numerador} / ${fracao1.denominador}`
        }else {
            return `A soma das frações é ${(fracao1.numerador * fracao2.denominador) + (fracao2.numerador * fracao1.denominador)} / ${fracao1.denominador * fracao2.denominador}`;
        }
    };

    subtracao(fracao1, fracao2){
        if(fracao1.denominador === fracao2.denominador){
            return `A subtração das frações é ${fracao1.numerador - fracao2.numerador} / ${fracao1.denominador}`
        }else {
            return `A subtração das frações é ${(fracao1.numerador * fracao2.denominador) - (fracao2.numerador * fracao1.denominador)} / ${fracao1.denominador * fracao2.denominador}`;
        }};

    multiplicacao(fracao1, fracao2){
        return `A multiplicação das frações é ${fracao1.numerador * fracao2.numerador} / ${fracao1.denominador * fracao2.denominador}`;
    };

    divisao(fracao1, fracao2){
        return `A divisão das frações é ${fracao1.numerador * fracao2.denominador} / ${fracao1.denominador * fracao2.numerador}`;
    };
}

class ComparacoesFracoes extends Fracao{
    constructor(numerador, denominador){
        super(numerador, denominador);
    }

    saoIguais(fracao1, fracao2){
        if((fracao1.numerador === fracao2.numerador) && (fracao1.denominador === fracao2.denominador)){
            return `As Frações são iguais`;
        }else{
            return  `As frações são diferentes`;
        }
    }
}

const fracao1 = new Fracao(3, 6);
const fracao2 = new Fracao(2, 4);

const operacao = new OperacoesComFracoes(fracao1, fracao2);
const compara = new ComparacoesFracoes(fracao1, fracao2)

console.log(operacao.soma(fracao1, fracao2));
console.log(operacao.subtracao(fracao1, fracao2));
console.log(operacao.multiplicacao(fracao1, fracao2));
console.log(operacao.divisao(fracao1, fracao2));
fracao1.repr();
fracao2.repr();
console.log(compara.saoIguais(fracao1, fracao2));