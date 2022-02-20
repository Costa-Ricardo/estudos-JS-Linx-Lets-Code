/**
 * Matriz é um array de array, onde tb tem um indice 
 *
 */

const tabela = [
    [1, 2, 3], //separado por virgula
    [4, 5, 6],
    [7, 5, 6],
];

// console.log(tabela[0][0]); //trazendo um valor especifico o primeiro indice é o da linha e o segundo indice é o da coluna
                           //para trazer a linha inteira basta digitar apenas o primeiro valor;

// //Imprime toda a matriz;
// console.log(tabela[0][0]);
// console.log(tabela[0][1]);
// console.log(tabela[0][2]);

// console.log(tabela[1][0]);
// console.log(tabela[1][1]);
// console.log(tabela[1][2]);

// console.log(tabela[2][0]);
// console.log(tabela[2][1]);
// console.log(tabela[2][2]);

console.log(tabela.join("\n")) //transforma o array em string e quebra por linha 