/**
 * Faça um programa que imprima todos os itens de uma lista usando while e compare com o exercício anterior.
 */

 const vetor = [1, 4, 7, 8, 9, 32, 0, 765, 23, 90, 18];

//Exercicio anterior
// for(let i=0; i< vetor.length; i++){
//     console.log(vetor[i]);
// }

//Exercicio atual
let x = 0;
while(x < vetor.length){
    console.log(vetor[x]);
    x++;
}

/**
 * uma das diferenças entre os dois laços é que o contador é declaro e iniciado e incrementado na própria condicional do FOR enquanto no WHILE ele 
 * deve ser declarado e iniciado fora da condicional e incrementado no "corpo" do WHILE; 
 * 
 * Apesar de que ainda não sei descrever se há muita diferença entre a utilização dos dois;
 * apesar de prefirir o FOR pois neles eu garanto que "fecho" a condicional sem esquecer de sair do laço;
 */