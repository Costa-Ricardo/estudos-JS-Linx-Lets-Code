/**
Considere dois arrays:

const x = [3,4,7,1,5];
const y = [4,3,1];

Com os dois arrays, utilize a função map para multiplicá-los, elemento a elemento. 
É possível que os arrays tenham tamanhos diferentes, certo? Por isso, o array resultante deverá ter o 
tamanho do menor dos arrays.

Exemplo 01:
Entrada		Saída
[1, 2, 3]		[1, 4, 9]
[1, 2, 3, 4]		

Exemplo 02:
Entrada		Saída
[5, 7, 3]		[10, 14]
[2, 2]		
 */
const x = [3,4,7,1,5];
const y = [4,3,1];
const dobroXTamanhoY = [];
const dobroX = x.map(num => num*2);

for(let i=0; i<y.length; i++){
    dobroXTamanhoY[i] = dobroX[i];
}
console.log(dobroXTamanhoY);