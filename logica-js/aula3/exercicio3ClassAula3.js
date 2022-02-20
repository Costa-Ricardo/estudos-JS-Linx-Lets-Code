/**
Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.
Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente
 */

const prompt = require("prompt-sync")({ sigint: true });

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
let media;

if ((nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10) && (nota3 >= 0 && nota3 <= 10)){
    media = (nota1 + nota2 + nota3) / 3.0;
    if(media >= 5) {
        console.log("Aluno aprovado");
    } else{
        console.log("Aluno Reporvado");
    }
}else{
    console.log("As notas deve estar entre 0 - 10, nota digitada errado comece novamente");
}


/*
********************** T E S T E ****************************

Validando nota por nota e em caso de não cumprimento das regras o programa encerra, perguntar ao professor sobre se isso é uma boa prática e se há uma outra forma de fazer


let nota1=parseFloat(prompt("Digite a primeira nota: "));
let nota2;
let nota3;
let media;


if(nota1 >= 0 && nota1 <= 10){
    nota2=parseFloat(prompt("Digite a primeira nota: "));

    if(nota2>= 0 && nota2 <= 10){
        nota3=parseFloat(prompt("Digite a primeira nota: "))
        media = (nota1 + nota2 + nota3) / 3.0;

        if(nota3 >= 0 && nota3 <= 10){
            
            if(media >= 5) {
                console.log("Aluno aprovado");
            } else{
                console.log("Aluno Reporvado");
            }
        }else{
            console.log("As notas deve estar entre 0 - 10, nota digitada errado comece novamente");
        }
    } else{
        console.log("As notas deve estar entre 0 - 10, nota digitada errado comece novamente");
    }
}else{
    console.log("As notas deve estar entre 0 - 10, nota digitada errado comece novamente");
}

*/