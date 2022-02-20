/**
Desafio 3 - Faça um programa que pede para o usuário digitar o CPF e verifica se ele é válido. Para isso, 
primeiramente o programa deve multiplicar cada um dos 9 primeiros dígitos do CPF pelos números de 10 a 2 e 
somar todas as respostas. O resultado deve ser multiplicado por 10 e dividido por 11. O resto dessa divisão 
deve ser igual ao primeiro dígito verificador (10º dígito). Em seguida, o programa deve multiplicar cada um 
dos 10 primeiros dígitos do CPF pelos números de 11 a 2 e repetir o procedimento anterior para verificar o 
segundo dígito verificador.
Exemplo:
Se o CPF for 286.255.878-87 o programa deve fazer primeiro:
x = (2*10 + 8*9 + 6*8 + 2*7 + 5*6 + 5*5 + 8*4 + 7*3 + 8*2)
Em seguida, o programa deve testar se x*10%11 == 8 (o décimo número do CPF). Se sim, o programa deve calcular:
x = (2*11 + 8*10 + 6*9 + 2*8 + 5*7 + 5*6 + 8*5 + 7*4 + 8*3 + 8*2)
e verificar se x*10%11 == 7 (o décimo primeiro número do CPF).
 */
const prompt = require('prompt-sync')({ sigint: true });

const cpf = [];
somaCPF = 0;
let numeroCpf = prompt("Digite o CPF: ");
//aqui ele quebra a String em array

for (let index = 0; index < numeroCpf.length; index++) {
    cpf[index] = parseInt(numeroCpf[index])
};

index = 10;
//aqui ele faz a primeira validação onde ele multiplica e soma os 9 primeiros digitos 

console.log(cpf);
for (let cont = 0; cont < 9; cont++) {
    somaCPF += cpf[cont] * index;
    console.log(cpf[cont] + 'x' + index);
    index--;

}

console.log(somaCPF + ' soma 1');
index = 11;
//validação se o restante da conta é = o penultimo digito do CPF
if ((somaCPF * 10) % 11 === cpf[9]) {
    somaCPF = 0;
//aqui ele faz a segunda validação onde ele multiplica e soma os 10 primeiros digitos 

    for (cont = 0; cont < 10; cont++) {
        somaCPF += cpf[cont] * index;
        console.log(cpf[cont] + 'x' + index);
        index--;
    }
    console.log(somaCPF + ' soma 2');
} else {
    console.log("CPF inválido na V1");
}; //validação se o restante da conta é = o ultimo digito do CPF

if ((somaCPF * 10) % 11 === cpf[10]) {
    console.log("CPF válido");
}else{
    console.log("CPF inválido na v2");
};