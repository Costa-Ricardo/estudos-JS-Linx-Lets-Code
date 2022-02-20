/**
 * Crie uma classe Quadrado, filha da classe Retângulo do exercício 2.
 */

class Retangulo{
    constructor(lado_a, lado_b){
        this.lado_a = lado_a;
        this.lado_b = lado_b;
    }

    areaRetangulo(){
        return this.lado_a*this.lado_b
    }
}

class Quadrado extends Retangulo{
    constructor(lado_a){
        super(lado_a)
    }
    
    areaQuadrado(){
        return this.lado_a*this.lado_a
    }
}

const retangulo = new Retangulo(30, 22);
console.log(retangulo.areaRetangulo());

const quadrado = new Quadrado(20);
console.log(quadrado.areaQuadrado());