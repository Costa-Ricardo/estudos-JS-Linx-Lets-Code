/**
 * Crie um objeto pessoa com Nome e Sobrenome 
 * e uma função imediatamente executada que retorne o nome completo
 */

 const pessoa = {
    nome: "",
    sobrenome: "", 
};

(function(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`)
})("Ricardo", "Andrade"); 