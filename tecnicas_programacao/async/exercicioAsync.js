function randomNumberBetween(min = 2000, max = 7000) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

/* 
- Criar função que que retorna uma Promise com um número aleatório após 
esperar x milisegundos (criar tempo de espera e número aleatório usando randomNumberBetween)
- Chamar essa função usando then/catch
- Chamar essa função usando async/await com IIFE (Immediately Invoked Function Expression) = (async () => {})()
 */

function randomNumberAsync() {
    const tempoDeEspera = randomNumberBetween();
    console.log(`Vamos esperar ${tempoDeEspera} milisegundos`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatorio = randomNumberBetween();
            console.log(`numero aleatorio gerado resolvido com PROMISE`, aleatorio);
            
            if(aleatorio < 3500) reject('numero muito baixo! Rejeitado com PROMISE');
            else resolve(aleatorio);
        }, tempoDeEspera);
    });    
}

// chamar usando async
(async () => {
  try {
      const aleatorio = await randomNumberAsync();
      console.log(`valor da promise resolvido com ASYNC/AWAIT `, aleatorio);
  } catch (err){
      console.info('algo deu errado valor muito baixo! Rejeitado com ASYNC/AWAIT');
  }
})();
 
// chamar usando then/catch
randomNumberAsync()
    .then((resultado) => {
        console.log(`[then/cacht] then: ${resultado}`);
    })
    .catch((err) => {
        console.info(`[then/cacth] catch: ${err}`);
    });