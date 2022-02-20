//find
//procurar a existencia de um item dentro do array e recebe uma função de callback 
// (função usada como paramentro)e retorna TRUE/FALSE para a sua execução ao encontrar 
// o primeiro valor e traz toda a linha ou retornará FALSE
const contatos = [
    { nome: 'contato1', telefone: '00000000'},
    { nome: 'contato2', telefone: '11111111'},
    { nome: 'contato3', telefone: '22222222'},
    { nome: 'contato4', telefone: '33333333'},
    { nome: 'contato5', telefone: '44444444'},
    { nome: 'contato6', telefone: '55555555'},
];
const contato = contatos.find(contato => contato.nome === "contato3")

//findIndex
// retorna o indice do valor solicitado igual ao conceito do FIND
const nums = [1, 2, 3]
const indexof3 = nums.findIndex(num => num === 3)

console.log(indexOf3);

//forEach
//função que percore o array parecido com o for mas escrevendo menos
const nums1 = [1, 2, 3, 4];
nums.forEach(num => console.log(num*2));

//every
//recebe uma função de callback e pode ter uma função anomima
//ele só retorna TRUE se todos os elementos forem true e 1 for false ele retorna false
const nums2 = [ 10, 20, 30, 40];
const nums3 = [ 11, 20, 30, 40];

const ePar = num => num % 2 === 0;

const nums1SaoPar = nums2.every(ePar) //retorna true
const nums2SaoPar = nums3.every(ePar) //retorna false pois 1 item retorna false

//map
//ele percorre o array e retorna um novo array ele terá o mesmo tamanho e será preenchido
//com o retorno do callback na mesma posição
const nums4 = [ 1, 2, 3]
const numDobro = nums4.map(num => num*2)

console.log(numDobro);

const aplicarDesconto = preco => Math.round((preco - preco*0.1)) //arredondando os valores
//const aplicarDesconto = preco => (preco - (preco*0.1)) //sem arredondar os valores
const carrinho = [9.56, 10.0, 25.90, 12.35 ];

const carrinhoComDesconto = carrinho.map(aplicarDesconto)

//map também funciona com o Matrizes
const contatos1 = [
    { nome: 'contato1', telefone: '00000000'},
    { nome: 'contato2', telefone: '11111111'},
    { nome: 'contato3', telefone: '22222222'},
    { nome: 'contato4', telefone: '33333333'},
    { nome: 'contato5', telefone: '44444444'},
    { nome: 'contato6', telefone: '55555555'},
];

const arrayBoraSerTech = contatos.map(contatos1 => {
    return {
        ...contatos1,
        boraSerTech: true,
    }
})

console.log(contatos1);

const contatos2 = [
    { nome: 'contato1', telefone: '00000000', tech :true},
    { nome: 'contato2', telefone: '11111111'},
    { nome: 'contato3', telefone: '22222222', tech :true},
    { nome: 'contato4', telefone: '33333333'},
    { nome: 'contato5', telefone: '44444444', tech :true},
    { nome: 'contato6', telefone: '55555555'},
];
const arrayBoraSerTech2 = contatos2.map(contato => {
    return contatos2.tech ? {
        ...contatos2,
        boraSerTech: true,
    } : contato;
})

console.log(arrayBoraSerTech2);

//filter
//ele é utilizado para filtrar e retorna um array só que nesse array vai trazer apenas os
//itens qdo forem TRUE ele passar item a item e se o retorno for true ele adiciona ao novo
//array e for false ele passa
const nums5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = nums5.filter(x => nums5 % 2 === 0)
console.log(pares);

//reduce
// a ideia do Reduce é reduzir o array para um item só ele recebe 2 valores o callback e o 
// que será feito, o primeiro parametro será toda a função e o segundo será o item do momento 
//da iteração e fora do parentese o valor inicial 
const nums6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const soma = nums.reduce((somatoria, num) => (
    somatoria + num 
), 0)

console.log(soma);