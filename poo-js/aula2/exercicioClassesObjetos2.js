/**
 * Crie uma classe Retângulo cujos atributos são 
 * lado_a e lado_b. Crie um método para calcular a área desse retângulo. 
 * Crie um objeto dessa classe e calcule a área e a imprima em seguida.
 * 
 */

class Retangulo{
    constructor(a, b){
        this.lado_a = a;
        this.lado_b = b;
    }

    areaRetangulo(){
        return this.lado_a*this.lado_b
    }
}

const retangulo = new Retangulo(30, 22);
console.log(retangulo.areaRetangulo());