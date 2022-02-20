/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
 * 
 */

function Quadrado(base, altura){

    //se tiver o this é considerado como publico
    this.base = base;
    this.altura = altura;

    //let/const seria algo como um atributo privado
    let cor = 'blue';
}

const quadrado = new Quadrado(3, 5);

console.log(quadrdo);
console.log(quadrado.cor); //retorna undefined
quadrdo.cor = 'green'; //não altera a cor do obj

//factory function é uma função que constroi algo
function createQuadrado(base, altura){
    let cor = 'blue';

    return {
        base,
        altura,
        getCor: function(){ return cor;},
    }
}

const quadrado = createQuadrado(3, 5);
console.log(quadrado);
console.log(quadrado.cor);
console.log(quadro.getCor());

class Quadrado{
    constructor(base, altura){
        let cor = 'blue';
        this.base = base;
        this.altura = altura;
        this.getCor = function(){ return cor; };
        this.setCor = function(novaCor){ cor = novaCor; };
    }
}


function createQuadrado(base, altura){
    if (isNaN(base) || isNaN(altura)) throw "Valores inválidos";
    
    let _cor = undefined;

    return {
        base,
        altura,
        get cor() { return _cor },
        set cor(cor) {
            if(cor !== 'red' && cor !== 'blue' && cor !== 'green') throw "Cor inválida";
            _cor = cor;
        }
    }
}

const quadrado = createQuadrado(3, 5);
console.log(quadrado);
console.log(quadrado.cor);
quadrado.cor = 'green';
console.log(quadrado.cor);
console.log(quadrado._cor);