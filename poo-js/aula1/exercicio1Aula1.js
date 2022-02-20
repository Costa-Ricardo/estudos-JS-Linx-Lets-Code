/**
 * Crie uma classe carro com 10 atributos;
 * crie uma classe casa com 5 atributos;
 */
const prompt = require("prompt-sync")({sigint:true})

// class Carro{
//     constructor(
//         marca, modelo, ano, cor, combustivel, carroceria, estilo, portas, bancos, customizado
//     ){
//         this.marca = marca;
//         this.modelo = modelo; 
//         this.ano = ano;
//         this.cor = cor; 
//         this.combustivel = combustivel;
//         this.carroceria = carroceria;
//         this.estilo = estilo;
//         this.portas = portas; 
//         this.bancos = bancos; 
//         this.customizado = customizado;
//     }
// }

// class Casa{
//     constructor(comodo, janela, porta, garagem, quintal){
//         this.comodo = comodo;
//         this.janela = janela;
//         this.porta = porta;
//         this.garagem = garagem;
//         this.quintal = quintal;
//     }
// }

//Crie uma forma que os atributos base e altura seja sempre números
class Quadrado{
    constructor (base, altura){
        if (isNaN(base) || isNaN(altura)) throw "Digite números";
        this.base = base;
        this.altura = altura;
    }
}


const base = parseFloat(prompt("Digite um valor da base: "));
const altura = parseFloat(prompt("Digite um valor da altura: ")); 
const quadrado = new Quadrado(base, altura);
console.log(quadrado);