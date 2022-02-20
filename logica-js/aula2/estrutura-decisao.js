//Estruturas de Decisão 

/*
* Operadores lógicos e serve para comparação e deve retornar um boleano (true // false)
* 
*/
const a = 1;
const b = 2;

const igualdade = a == b;
const diferenca = a != b;
const maior = a > b;
const maiorOuIgual = a >= b;
const menor = a < b;
const menorOuIgual = a <= b;

const and = igualdade && diferenca;
const or = igualdade || diferenca;


const not = !igualdade; //ela reverte a condição da variável

const igualdadeRestrista = a === b; //verifica o valor e se é o mesmo tipo
const diferencaRestrista = a !== b; //verifica o valor e se é de tipos diferentes 

//valores -> 0, null, undefined, NaN, "", false ---- Serão FALSE qualquer outro valor é verdadeiro TRUTH

console.log(0 == false);

const valor = 0;

if (valor){
    console.log("Estou aqui");
}

//if else não retorna valor e não pode ser utilizado numa variável

let souDev = true;

if (souDev){
    console.log("Bora ser tech");
} else {
    console.log("Não quero");
}


//Operador Ternario é o ? onde ele retorna um valor e pode ser "jogado" numa variável

let serTech = souDev ? "Bora ser tech" : "Não quero" //criei uma variável 'serTech' que receberá o resultado da variável 'souDev' se for true retorna "Bora..." se for false retorna "Não..."
console.log(serTech); 

//Contadores

const num;

num += 2;
num = num + 2;
num -= 2;
num = num -2;
num *= 2;
num = num * 2;
num /= 2;

