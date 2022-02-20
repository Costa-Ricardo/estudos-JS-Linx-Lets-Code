/**
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
https://github.com/felipe-augusto/clean-code-javascript
 */

//fila
const criarFila = () =>{
    let fila = [];

    return{
        adicionar:(elemento) =>{
            fila = [...fila, elemento]
        },
        remover: () =>{
            const [primeiro, ...resto] = fila;
            fila = resto;
            return primeiro;
        } 
    }
}

const fila = criarFila();

fila.adicionar(100);
fila.adicionar(400);

const removido = fila.remover();
console.log(removido);

const removido2 = fila.remover();
console.log(removido2);

const removido3 = fila.remover();
console.log(removido3);

//queue = enfileirar
//dequeue = desenfileirar