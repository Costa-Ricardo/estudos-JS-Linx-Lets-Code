/**
* Construa um algoritmo que leia o código de um determinado produto e mostre a sua classificação. Utilizando ifs e usando switch
*
* Código Classificação
* 1 - Alimento não-perecível
* 2, 3 ou 4 - Alimento perecível
* 5 ou 6 - Vestuário
* 7 - Higiene pessoal
* 8, 9, 10 - Utensílios domésticos
* Qualquer outro código Inválido
 */

 const prompt = require("prompt-sync")({ sigint: true });

 const codProduto = parseInt(prompt("Digite o código: "));

//Utilizando IF / ELSE IF / ELSE

//  if (codProduto === 1){
//      console.log("1 - Alimento não-perecível");
//  } else if (codProduto === 2 || codProduto === 3 || codProduto === 4){
//      console.log("2, 3 ou 4 - Alimento perecível");
//  }else if (codProduto === 5 || codProduto === 6){
//      console.log("5 ou 6 - Vestuário");
//  }else if (codProduto === 7){
//      console.log("7 - Higiene pessoal");
//  }else if (codProduto === 8 || codProduto === 9 || codProduto === 10){
//      console.log("8, 9 ou 10 - Utensílios domésticos")
//  }else {
//      console.log("Código inválido")
//  }

//Utilizando SWITCH

switch (codProduto){
    case 1:
      console.log("1 - Alimento não-perecível");
      break;
    case 2:
    case 3:
    case 4:
      console.log("2, 3 ou 4 - Alimento perecível");
      break;
    case 5:
    case 6:
      console.log("5 ou 6 - Vestuário");
      break;
    case 7:
      console.log("7 - Higiene pessoal");
      break;
    case 8:
    case 9:
    case 10:
      console.log("8, 9 ou 10 - Utensílios domésticos")
      break;
    default:
      console.log("Código inválido");
      break;
}
