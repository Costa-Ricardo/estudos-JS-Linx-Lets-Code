/**
 * Extrapolar o conceito de ACCESSORS para os atributos
 * base e altura
 */

 class Quadrado{
    constructor(base, altura){
        this._cor = undefined;
        this._base = base;
        this._altura = altura;
    }
    get cor() { return this._cor; };
    set cor(cor) {
        if(cor !== 'red' && cor !== 'green' && cor !== 'blue'){
            throw 'O valor da propriedade cor deve ser "red, "green" ou "blue"';        
        }
        this._cor = cor;
    };

    get base(){ return this._base; }
    set base(novaBase){
        if(isNaN(novaBase)) throw 'informe um número';
        this._base = novaBase
    }

    get altura(){ return this._altura; }
    set altura(novaAltura){
        if(isNaN(novaAltura)) throw 'informe um número';
        this._altura = novaAltura
    }
}

const quadrado = new Quadrado(3, 5);
console.log(quadrado);
quadrado._base = 6;
console.log(quadrado);
quadrado._altura = 10;
console.log(quadrado);