// //Utilizando a função MAP() desta forma irá multiplicar cada elemento do vetor por ele mesmo
// let vetor = [1, 2, 3, 4, 5];

// //x é o que irá percorrer o vetor a => indica o que será feito a cada posição do vetor.
// let vetor2 = vetor.map(x=>x*x);
// console.log(vetor2);

// let vetor1 = [1, 2, 3, 4, 5];
// let vetor2 = [5, 2, 4, 3, 1];
// //soma dos vetores termo a termo
// let resultado = vetor1.map((valor, indice)=>valor+vetor2[indice]);
// console.log(resultado);

// let vetor = [5, 4, 3, 2, 1];

// //let produto =(indice, valor) => valor*10;  [0,10,20,30,40]
// //let produto = (x) => x*10; [50,40,30,20,10]
// //let produto = function (x){return x*10};[50,40,30,20,10]
// //let produto = (valor, indice, arr) => arr[indice]*10;[50,40,30,20,10]
// //let produto = (indice, valor) => indice*10;[50,40,30,20,10]
// let resultado = vetor.map(produto);

// console.log(resultado);

// let vetor1 = [1, 2, 3, 4, 5];
// let funcao = (valor, indice, vetor) => vetor[vetor.length-indice-1];

// let vetor2 = vetor1.map(funcao);
// console.log(vetor2);