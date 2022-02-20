/**
 * Função são trechos dos codigos que serão utilizado por diversas vezes no programa
 * onde podemos encapsular suas informações 
 * 
 * Funções são CIDADÃO DE PRIMEIRA CLASSE
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
 */

function somar(num1, num2) {
    let validar = isNaN(num1) || isNaN(num2)
    return validar ? NaN : num1 + num2; //ternario CONDICIONAL (TRUE ou FALSE) ? retorno caso seja TRUE : retorno caso seja FALSE
}

console.log(somar(4, 1));

//Funções Anônimas
const show = function(){ //um função pode ser atribuida a uma variavel 
    console.log("mostrando")
}
//Uma função anônima pode ser utilizada como parametro para outra função 
setTimeout(function(){
    console.log("Montrando após 1 segundo");
}, 1000) //em milessegundo;

show(); //podemos chamar a função apenas chamando a variavel;

//Função Imediatamente excutada
(function(){
    console.log("mostrando uma função imediatamente executada após ser declarada")
})(); //a função fica entre parenteses e tem um parenteses vazio no final


//Arrow Functions
