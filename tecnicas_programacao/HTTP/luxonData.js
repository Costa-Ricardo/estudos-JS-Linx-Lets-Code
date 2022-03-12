// Criar e imprimir o dia de ontem
// Criar o dia 5 do mês de julho desse ano às 15h usando o método fromObject
//Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980

const { DateTime } = require('luxon');

const dt = DateTime.local(2017, 5, 15, 8, 30);

console.log(dt);