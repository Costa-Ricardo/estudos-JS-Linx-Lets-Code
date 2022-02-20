/**
 * Objetos são a melhor forma de manipular dados complexos em programação;
 * 
 * o objeto sempre inicia por { depois vem os seus valores;
 */

const obj = {
    nome: "Ricardo", //separado por virgula
    idade: 36, //e pode conter qualquer valor
    sangue: "O+", //para fazer atribuição devemos utilizar : ;
    tech: true, 
};

//Para utilizar alguma informação do objeto basta chamar o objeto e colocar ponto
console.log(obj.nome); //imprime o valor que está em nome;
console.log(obj.idade); 

const agenda =  [
    {nome: "Contato1", telefone: "111111111", endereco: "Endereço x"},
    {nome: "Contato2", telefone: "222222222"},
    {nome: "Contato3", telefone: "111111111", endereco: "Endereço x"},
]

for(contato of agenda){
    console.log(contato.nome, contato.telefone, contato.endereco || ""); //qdo um objeto não tem informação ele não imprime
}

//contato.endereco ? contato.endereco : "";

// //construtor
// const criarContato = (nome, telefone, endereco) => ({
//     nome: nome,
//     telefone: telefone,
//     endereco: endereco || "",
// });

const contato1 = criarContato1("Contato1", "11111111");
console.log(contato1);

