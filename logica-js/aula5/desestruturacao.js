/**
 * Desestruturação é pegar valor por valor da matriz e criando uma nova
 */

 const tabela = [
    [1, 2, 3], //separado por virgula
    [4, 5, 6],
    [7, 5, 6],
];

//const tabela2 = tabela; // isso apenas referência o mesmo espaço da memória  pois uma matriz/array são objetos
const tabela2 =[...tabela]; //agora é uma cópia da tabela os tres pontos chamam-se SPREAD 

//Usando o spread operator para fazer copias
const arr1 = [1, 2, 3, 4, 5];
const copiaArr1 = [...arr1]; //copia o array
const arr2 = [4, 5, 6, ...arr1, 7, 8, 9]; // além da copia ele adiciona os outros valores
console.log(arr1);
console.log(arr2);

// const a = arr1 [0];
// const b = arr1 [1];
// const c = arr1 [2];

const [a, b, c] = arr1;
console.log(a);
console.log(b);
console.log(c);

//destructuring ou desestruturação
const [a, b, c] = arr1;
const [a, b, c, ...resto] = arr1;

console.log(a);
console.log(b);
console.log(c);
console.log(resto);