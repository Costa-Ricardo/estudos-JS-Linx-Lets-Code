//const arr = [10, 20, 30, 40, 50];

//FOR-IN ele corre o array e a cada posição do array ele executa o corpo do for (nesse caso traz o index e o valor do array) e armazena o indice da posição
// for(index in arr){
//     console.log(index, arr[index]);
// }

//FOR-OF ele corre o array e a cada posição do array ele executa o corpo do for (nesse caso traz o valor do array) e armazena o valor da posição
// for(value of arr){
//     console.log(value);
// }

//FOR "generico" para essa estrutura terá uma variavel "CONTADOR", "VALIDAÇÃO", "INCREMENTO"
// for(let index=0; index < arr.length; index++){
//     console.log(arr[index]);
// }

// for(let vez=1; vez <= 10; vez++){
//     console.log("Olá, pela "+ vez +"º vez");
// }

//Rolado dados
const prompt = require("prompt-sync")({ sigint: true });

//função que retorna um número random dentro dos parametros informados 
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//rola o dado com o parametro de quantos lados o dado tem
function rolar(dado){
    return randomIntFromInterval(1, dado);
}

function splitiImput(input){
    const splitedInput = input.toUpperCase().split("D"); //pega a String e transforma tudo em maiusculo e quebra apartir da letra D
    const normalizedInput = [
        parseInt(splitedInput[0]),  //pega a string q foi quebrada e transforma em NUMBER pois espera receber 2D6....na primeira posição
        parseInt(splitedInput[1])   //pega a string q foi quebrada e transforma em NUMBER pois espera receber 2D6....na segunda posição
    ];
    return normalizedInput;
}

const input = prompt("Digite a quantidade e o dado no formato XDY, ex. 2D6: ");
const quantidadeEDado = splitiImput(input);
const quantidade = quantidadeEDado[0]; //recebe quantas vezes o dado seja jogado
const dado = quantidadeEDado[1];

let jogadasDoDado = []; //armazena a quantidade de vezes que o dado foi jogado
let total = 0; //armazena o total dos sorteios dos dados

for(let i=0; i < quantidade; i++){
    const resultado = rolar(dado); //chama a função ROLAR passando o dado 
    jogadasDoDado.push(resultado); //e insere um valor no array para armazenar a jogada por rodada
    total += resultado; //soma os sorteios do dado
}

console.log("Rolagens: " + jogadasDoDado + " Total " + total);