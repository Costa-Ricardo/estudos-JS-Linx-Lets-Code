/**
 * Criar uma função que diz qual foi o valor de 10% de desconto 
 * para um produto passando o seu preço. desconto(preco)
 */
 const somar = (a, b) => a+b;
 const subtrair = (a, b) => a-b;
 const multiplicar = (a, b) => a*b;
 const dividir = (a, b) => b > 0 ? a/b : NaN;

 const precoComDesconto = (preco) => calcular(subtrair, preco, calcular(multiplicar, preco, 0.1));
 
 const ValorProduto = 1000
 const valorFinal = precoComDesconto(ValorProduto)
 console.log(valorFinal)
 console.log(resultado)