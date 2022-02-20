/**
 * Crie uma classe Televisor cujos atributos são:

a. fabricante;

b. modelo;

c. canal atual;

d. lista de canais; e

e. volume.

Faça métodos para aumentar/diminuir volume, 
trocar o canal e sintonizar um novo canal, 
que adiciona um novo canal à lista de canais 
(somente se esse canal não estiver nessa lista). 
No atributo lista de canais, devem estar armazenados 
todos os canais já sintonizados dessa TV.

Obs.: O volume não pode ser menor que zero e maior que cem; 
só se pode trocar para um canal que já esteja na lista de canais.
 */

const prompt = require("prompt-sync")({ sigint:true });

class Televisao {
    constructor(fabricante, modelo, canalAtual, volume){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.canalAtual = canalAtual;
        this.volume = volume;
        this.listaCanais = [
            {canal: 2, name: 'TV CULTURA'},
            {canal: 4, name: 'SBT'},
            {canal: 5, name: 'GLOBO'},
            {canal: 7, name: 'RECORD'},
            {canal: 9, name: 'REDE TV'},
            {canal: 13, name: 'BAND'}
            ];
    }

    aumentar(){
        if(this.volume>100){
        this.volume = this.volume+1;
        } else{
            console.log("Volume máximo");
        }
        return
    }

    diminuir(){
        if(this.volume<0){
        this.volume = this.volume-1;
        }else{
            console.log("Volume minímo");
        }
        return
    }

    trocaCanal(novoCanal){
        if(this.listaCanais.find(canal => canal.canal === novoCanal)){
            this.canalAtual = novoCanal;
        }else{
            console.log("Canal não encontrado");
            const sintonizarNovoCanal = prompt("Deseja sintonizar o novo Canal? [s] / [n]: ").toUpperCase();
            switch(sintonizarNovoCanal){
                case 'S':
                    let sintonizaCanal = parseInt(prompt("Digite o número do canal: "));
                    let sintonizaName = prompt("Digite o nome do canal: ").toUpperCase();
                    this.listaCanais.push({canal: sintonizaCanal, name: sintonizaName});
                    this.canalAtual = novoCanal;            
                    break;
                case 'N':
                    break;
                default:
                    console.log("Digite S para sintonizar o novo canal e N para sair. ");
            }
        }
        return 
    }
}

const tv1 = new Televisao("LG", "Smart", 5, 100);
console.log(tv1);
tv1.aumentar();
tv1.trocaCanal(32);
console.log(tv1);