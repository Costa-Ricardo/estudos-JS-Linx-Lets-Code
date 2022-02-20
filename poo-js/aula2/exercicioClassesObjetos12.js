/**
 * Crie uma classe Data cujos atributos são dia, mês e ano. 
 * Implemente métodos _ repr _ e para 
 * comparação: igualdade (==) e desigualdades (!=, <=, >=, < e >).
 */

class Data{
    constructor(dia, mes, ano){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    repr(){
        return console.log(this.dia, "/", this.mes, "/", this.ano);
    }
}

class ComparaData extends Data{
    constructor(dia, mes, ano){
        super(dia, mes, ano);
    }

    mesmaData(){
        if((dia1.dia === dia2.dia) && (dia1.mes === dia2.mes) && (dia1.ano === dia2.ano)){
            return 'Mesma data';
        }else{
            return 'Datas diferentes'
        }
    }
}

const dia1 = new Data(19, 12, 2021);
const dia2 = new Data(19, 12, 2022);

const compara = new ComparaData(dia1, dia2);

dia1.repr();
dia2.repr();
console.log(compara.mesmaData())