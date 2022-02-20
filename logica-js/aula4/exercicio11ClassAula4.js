/**
*  Faça um programa que peça para o usuário digitar a idade, o salário e o sexo de uma pessoa até que as entradas digitadas sejam válidas:
* 1 - Idade: entre 0 e 150;
* 2 - Salário: maior que 0;
* 3 - Gênero: M, F ou Outro.
*/

const prompt = require("prompt-sync")({sigint:true});

let salario;
let genero; 
let continuar = true;

do{
    let idade = parseInt(prompt("Digite a sua idade : "));
    if (idade >= 0 && idade <= 150){
        salario = parseFloat(prompt("Digite o seu salário: R$ "));
        if(salario >= 0){
            genero = prompt("Digite o seu Gênero F (feminino), M (masculino) ou O (outro) ");
            switch(genero.toUpperCase()){
                case "F":
                    console.log("A sua idade é " + idade + " o seu salário é R$ " + salario + " e o seu gênero é Feminino");
                    continuar = false;
                    break;
                case "M":
                    console.log("A sua idade é " + idade + " o seu salário é R$ " + salario + " e o seu gênero é Masculino");
                    continuar = false;
                    break;
                case "O":
                    console.log("A sua idade é " + idade + " o seu salário é R$ " + salario + " e o seu gênero é Outro");
                    continuar = false;
                    break;
                default:
                    console.log("Informe o gênero entre as opções F (feminino), M (masculino) ou O (outro)");
                    break;
            }
        }else{
            console.log("Salário inválido");
        }
    }else{
        console.log("Idade inválida");
    }
}while (continuar);