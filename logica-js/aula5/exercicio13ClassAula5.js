/**
 * Crie um objeto que represente um carro
 */

let carro = {
    marca: 'Volkswagen',
    ano: 2005,
    modelo: 'Polo',
    cor: 'Preto',
    dono: 'Ricardo',
    buzina: () => console.log('BI BI'),
    ligar: function(chave){
      console.log(this.dono+' está girando a '+chave)
    }
  }
  
 carro.ligar('chave');
 carro.buzina();