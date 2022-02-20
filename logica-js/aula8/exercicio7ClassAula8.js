/**
Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, 
de acordo com a regra abaixo:

5% para produtos abaixo de R$ 200,00

10% para produtos abaixo de R$ 400,00

15% para produtos abaixo de R$ 2000,00

20% para produtos acima de R$ 2000,00

Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais 
adquiridos pelos clientes e guarde-os em um array.

Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, 
criar um array com o preço após os descontos.
 */
const prompt = require("prompt-sync")({sigint:true})

const produtos = new Array(10);
let prdDesc = [];

for(let i=0; i < produtos.length; i++){
    produtos[i]=parseFloat(prompt(`Digite o valor ${i+1}º do produto: `));
}

if (produtos < 200){
    prdDesc = produtos.map(x => x*0.95 );
}else if (produtos >= 200 && produtos < 400){
    prdDesc = produtos.map(x => x*0.9)
}else if (produtos >= 400 && produtos < 2000){
    prdDesc = produtos.map(x => x*0.85)
}else{
    prdDesc = produtos.map(x => x*0.8);
}
console.log(prdDesc); //retorna os preços com desconto
//console.log(produtos); //retorna o array com os preços originais