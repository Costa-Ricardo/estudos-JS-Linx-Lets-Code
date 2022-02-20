/**
 * Crie uma classe ControleRemoto cujo atributo é televisão 
 * (isso é, recebe um objeto da classe do exercício 4). 
 * Crie métodos para aumentar/diminuir volume, trocar o canal 
 * e sintonizar um novo canal, que adiciona um novo canal à 
 * lista de canais (somente se esse canal não estiver nessa lista).
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
}

class ControleRemoto extends Televisao{
    constructor(fabricante, modelo, canalAtual, volume){
        super(fabricante, modelo, canalAtual, volume);
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
 
 const tv1 = new ControleRemoto("LG", "Smart", 5, 100);
 console.log(tv1);
 tv1.aumentar();
 tv1.trocaCanal(32);
 console.log(tv1);