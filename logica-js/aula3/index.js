//Switch
let sinal = 'verde';

switch (sinal) {
    case "verde":
        console.log("Pode passar");        
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
    case "preto":
        console.log("Pare");
        break;
}

//Vetores no JS é como uma lista
//os vertores recebem qualquer valor sendo separados por vírgula e dentro dos colchetes e para localiza-los utilizamos os indices começando por zero;
const array = [5, 4, 3.5, 4, "Banana", null, undefined, "chuva"]; 

console.log(array); //imprime todo o array
console.log(array[0]); //imprime o primeira posição do array;
console.log(array[3]); //imprime a quarta posição do array

array[0] = 15; //está atribuindo um valor na posição informada dentro dos colchetes neste exemplo a primeira posição;

console.log(array.length); //apresenta o tamanho do array 
console.log(array[array.length -1]); //imprime o último item do array

array.push("maça"); //insere um item ao final do array e retorna o novo tamanho do array
console.log(array.length);
console.log(array);

array.unshift("pera"); //insere um item no ínicio do array e retorna o novo tamanho do array
novoTamanho = array.unshift("pera");
console.log(novoTamanho);
console.log(array)

console.log(array.indexOf("Banana")); //Busca de valores dentro do array, se o valor não estiver no array retorna -1, igual ao tipo que foi informado;
console.log(array.lastIndexOf(4)); //Retorna o último valor que foi informado caso ele encontre 2 repetidos ele trás o último igual ao tipo que foi informado 4 <> "4";

console.log(array.indexOf("4") > -1); //se o item existe dentro do array trazendo true ele existe no array;
console.log(array.lastIndexOf(4) > -1);

console.log(array.includes("Banana")); //função que consulta se existe o item no array;
console.log(array.includes("Banana"), 6); //com esse segundo parametro ele verifica apartir de um indice especifico;

console.log(array.pop()); //remove o último item do array, retornando o item que foi removido;
console.log(array.shift()); //remove o primeiro item do array, retornando o item que foi removido;
let itemRemovido = array.pop();
console.log(itemRemovido); //removido o último
itemRemovido = array.shift();
console.log(itemRemovido); //removido o primeiro item

console.log(array.splice()); //remove um item especifico e dependendo da qtde de parametros ele vai se comportar de uma forma diferente;
const response = array.splice(3); //itens apartir do 3 com ele incluido (3, 4, 5, ...);
const response2 = array.splice(3, 2); //corta apartir do 3 incluindo ele mas o segundo parametro limita a qtde do que foi retirado do array (3, 4) se for retirar apenas o item 3 splice (3, 1) recebe também valores negativos e desta forma corre o array de trás pra frente
const response3 = array.splice(3, 2, "limão", "abacaxi", "manga"); //corta apartir do 3 limitado ao segundo parametro e tudo que estiver na sequência será incluido no array nesse intervalo 

const arr = new Array(10); //Constroi um array de 10 posições;
arr.fill("x") //Preenche o array todo com o valor informado dentro dos parametros;
arr.fill("x", 3, 5); //preenche do valor informado iniciando no segundo parametro e parando no terceiro e esse último parametro não conta exemplo -> preenche 3 e o 4;

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); //concatena os dois arrays sem desfazer os outros arrays 
const arrFinal = arr1.concat(arr2).concat(arr3); //pode incluir diversos arrays com CONCAT();
arrFinal = [].concat(arr1, arr2, arr3);

const arrReverso = [1,2,3,4];
arrReverso.reverse(); // inverte o array
console.log(arrReverso); //ele altera o array original;

const arrOrdenado = [5,9,2,7,4];
const arrOrdenadoString = ["Zambia", "André", "Cris", "Maria"];
arrOrdenado.sort(); //ele ordena o array e altera o array original;
arrOrdenadoString.sort(); //ordena alfabeticamente o array;

//fonte de consulta para alguns métodos 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

//conseguindo manipular o array mesmo sendo CONST mas não pode ser atribuido diretamente arr = [1,2,3,4] dará erro pois o JS entende que é um novo array e não uma manipulação;