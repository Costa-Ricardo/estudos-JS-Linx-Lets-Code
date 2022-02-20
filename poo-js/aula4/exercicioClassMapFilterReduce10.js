/**
 * Dado um vetor de vetores, transforme-me o em vetor um único que contém todos os elementos:
 * [["1", "2", "3"],[true], [4, 5, 6]] -> ["1", "2", "3", true, 4, 5, 6]
 */

const array = [["1", "2", "3"],[true], [4, 5, 6]] 

// const novoArray = array.reduce((acumulador, elemento)=>{
//     return acumulador.concat(elemento)
//     }, 
//     []
// )
console.log(array.reduce((acumulador, elemento)=>{
    return acumulador.concat(elemento)
    }, 
    []
));

