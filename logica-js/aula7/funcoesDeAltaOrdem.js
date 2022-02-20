/**
 * a computação funcional vem ganhando muitos adeptos procurar PARADIGMA FUNCIONAL
 *  
 */

const somar = (a, b) => a+b;
const subtrairr = (a, b) => a-b;
const multiplicar = (a, b) => a*b;
const dividir = (a, b) => b > 0 ? a/b : NaN;

const calcular = (operacao, a, b) => operacao(a,b);
const resultado = calcular(somar, 1, 2);

console.log(resultado);


