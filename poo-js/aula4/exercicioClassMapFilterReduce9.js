/**
 * Dado um vetor de produtos que tem interesse em comprar, 
 * calcule quanto custaria comprar todos os produtos a vista.
 * const products = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]; 
 */

const products = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let soma = products.reduce(function(acumulador, valorAtual){
    return acumulador + valorAtual.price;
  }, 0)

console.log(soma);