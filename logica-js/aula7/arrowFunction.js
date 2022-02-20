/**
 * Arrow Function é construida sem utilizar a palavra reservada FUNCTION 
 * 
 */

//Forma convencional de declarar uma Arrow Function 
const somar = (num1, num2) => { 
    return num1, num2;
}

//Forma mais simples quando a função não for muito complexa
const somar = (num1, num2) => num1 + num2;

//se estiver assim e não tiver a palavra RETURN tudo o que estiver dentro do 
//parenteses será o retorno
const somar = (num1, num2) => (
    num1 + num2
    );