/**
Crie uma classe Bola cujos atributos são cor e raio. 
Crie um método que imprime a cor da bola. 
Crie um método para calcular a área dessa bola. 
Crie um método para calcular o volume da bola. 
Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.

Obs.:

Área da esfera = 4*3.14*r*r;

Volume da esfera = 4*3.14*r*r*r/3
 */

class Bola {
    constructor(cor, raio){
        this.cor =  cor;
        this.raio = raio;
    }
    
    imprimirCor(){
        return this.cor
    }

    areaBola(){
        return 4*3.14*this.raio*this.raio;
    }

    volumeBola(){
        return (4*3.14*this.raio*this.raio*this.raio)/3
    }
}

const bola = new Bola('branca', 3);
console.log(bola);
console.log(`a area da bola é ${bola.areaBola()}`);
console.log(`o volume da bola é ${bola.volumeBola()}`);