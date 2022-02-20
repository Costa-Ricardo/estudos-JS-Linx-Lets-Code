/**
 * Crie um objeto chamado cachorro através de uma função construtora. 
 * As propriedades desse objeto devem ser nome, apelido, raça, idade e isVacinado. 
 * Ofereça um valor padrão para chaves inexistentes.
 */

const cachorro = (nome, apelido, raca, idade, isVacinado) => ({
    nome: nome,
    apelido: apelido,
    raca: raca,
    idade: idade,
    isVacinado: isVacinado || false
})

//let odysseu = cachorro("Odysseu", "Ody", "Labrador", 1, true);

//console.log(`${odysseu.nome} ou melhor ${odysseu.apelido} é um ${odysseu.raca} de ${odysseu.idade} ano e as vacinas estão em dia ${odysseu.isVacinado}`)