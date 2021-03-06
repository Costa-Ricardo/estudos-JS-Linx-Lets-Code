/**
 * Utilize o método filter para determinar quais restaurantes estão abertos no horário atual.
 * const restaurantes = [
  {
    nome: 'Pizzaria do Mario',
    horario_abertura: 14,
    horario_fechamento: 23
  },
  {
    nome: 'Churrascaria do Ronaldo',
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: 'Bar do Zeca',
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: 'Doceria da Mara',
    horario_abertura: 8,
    horario_fechamento: 20,
  },
]

Dica: utilize new Date().getHours() para retornar o horário atual.

*/

const restaurantes = [
    {
      nome: 'Pizzaria do Mario',
      horario_abertura: 14,
      horario_fechamento: 23
    },
    {
      nome: 'Churrascaria do Ronaldo',
      horario_abertura: 11,
      horario_fechamento: 14,
    },
    {
      nome: 'Bar do Zeca',
      horario_abertura: 12,
      horario_fechamento: 2,
    },
    {
      nome: 'Doceria da Mara',
      horario_abertura: 8,
      horario_fechamento: 20,
    },
]

const horaAtual = new Date().getHours();

function aberto(horaAbertura, horaFechamento){
    if(horaFechamento < horaAbertura){
        if(horaAtual > horaAbertura || horaAtual === 1 || horaAtual === 2){
            return true
        }else{
            return false
        }
    }
    if((horaAtual > horaAbertura && horaAtual < horaFechamento)){
        return true
    }
    return false
}

console.log(restaurantes.filter(restaurante => aberto(restaurante.horario_abertura, restaurante.horario_fechamento)))