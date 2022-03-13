const { DateTime } = require('luxon');

const hoje = DateTime.now();

// Criar e imprimir o dia de ontem no padrão PT-BR
const ontem = (hoje.minus({day: 1}));
console.log(`Ontem foi: ${ontem.setLocale('pt-BR')
    .toLocaleString(DateTime.DATE_SHORT)}`);

// Criar o dia 5 do mês de julho desse ano às 15h usando o método fromObject
const diaDesejado = DateTime.fromObject(
    {day: 5, month: 7, year: 2022, hour: 15},
    {zone: 'America/Sao_Paulo'},
);
console.log(`${diaDesejado.setLocale('pt-BR')
    .toLocaleString(DateTime.DATETIME_SHORT)}`);

//Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera 
//de natal de 1980.
const vesperaNatal = DateTime.fromObject(
    {day: 24, month: 12, year: 1980},
    {zone: 'Europe/Berlin'}
);

const quinzeDiasAntes = (vesperaNatal
    .setLocale('de')
    .minus({days: 15})
    .toLocaleString({weekday: 'long'})
);

console.log(`${quinzeDiasAntes}`);