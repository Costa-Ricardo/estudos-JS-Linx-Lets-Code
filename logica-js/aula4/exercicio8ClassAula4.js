/**
* Faça um programa para simular uma situação simples de depósito, retirada e consulta em um banco. Exiba o seguinte menu com as opções:
*
* 1 - Depósito
* 2 - Retirada
* 3 - Saldo
* 4 - Sair do algoritmo
* Se a escolha do usuário for depósito ou retirada, o algoritmo deverá pedir o valor da operação e atualizar automaticamente o valor existente na conta. 
* O algoritmo deverá ser utilizado até que o usuário escolha a opção sair do algoritmo.
 */
const prompt = require("prompt-sync")({sigint:true});

let saldo = 0;
let continuar = true;

do{
    console.log("************************");
    console.log("    Digite uma opção");
    console.log("************************"); 
    console.log("  1 - Depósito");
    console.log("  2 - Retirada");
    console.log("  3 - Saldo");
    console.log("  4 - Sair do algoritmo");
    console.log("************************");
    let opcao = parseInt(prompt("Digite uma das opções: "));
        switch(opcao){
            case 1:
                let deposito = parseFloat(prompt("Digite o valor do Depósito R$ "));
                saldo += deposito;
                console.log("Seu saldo atual é R$: "+ saldo);
                break;
            case 2:
                let retirada = parseFloat(prompt("Digite o valor do saque R$ "));
                if (saldo > retirada){
                    saldo -= retirada;
                }
                console.log("Seu saldo atual é R$: "+ saldo);
                break;
            case 3:
                console.log("Seu saldo é R$ " + saldo);
                break;
            case 4:
                console.log("Fechando sistema...");
                continuar = false;
                break;
            default:
                console.log("Este não é uma opção válida");
                break;
        }; //perguntar se é possivel pausar a execução do código para aguardando teclar algo
}while (continuar);