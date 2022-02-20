const { maiorDeIdade, imprimeIdade } = require ('./verificadorIdade');

const args = process.argv;
const idade = args[2]

imprimeIdade(idade);
console.log(maiorDeIdade(idade));