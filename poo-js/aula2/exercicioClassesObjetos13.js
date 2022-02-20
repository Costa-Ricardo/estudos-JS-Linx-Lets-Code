/**
 * Nos exercícios 1, 2, 3, 4 e 6, implemente o método 
 * _ repr _ para exibir as informações desejadas de cada uma das classes.
 */
class Bola {
    constructor(cor, raio){
        this.cor =  cor;
        this.raio = raio;
    }

    repr(){
        return console.log(this.cor, this.raio);
    }
}

class Retangulo{
    constructor(a, b){
        this.lado_a = a;
        this.lado_b = b;
    }

    repr(){
        return console.log(this.lado_a, this.lado_b);
    }
}

class Funcionario{
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
        this.horasTrab = {};
        this.salarioHr = {};
    };

    repr(){
        return console.log(this.nome, this.email);
    }
}

class Televisao {
    constructor(fabricante, modelo, canalAtual, volume){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.canalAtual = canalAtual;
        this.volume = volume;
        this.listaCanais = [
            {canal: 2, name: 'TV CULTURA'},
            {canal: 4, name: 'SBT'},
            {canal: 5, name: 'GLOBO'},
            {canal: 7, name: 'RECORD'},
            {canal: 9, name: 'REDE TV'},
            {canal: 13, name: 'BAND'}
            ];
    }

    repr(){
        return console.log(this.fabricante, this.modelo, this.canalAtual, this.volume);
    }
}

class Cronometro{
    constructor(time){
        this.time = time;
    }
}

class Time extends Cronometro{
    constructor(time){
        super(time);
    };

    repr(){
        return console.log(this.time);
    }
}

const bola = new Bola('azul', 3);
bola.repr();

const retangulo = new Retangulo(10, 5);
retangulo.repr();

const funcionario = new Funcionario('Joao', 'joao@email.com');
funcionario.repr();

const tv = new Televisao('LG', 'Smart', 5, 40);
tv.repr();

const relogio = new Time(5);
relogio.repr();