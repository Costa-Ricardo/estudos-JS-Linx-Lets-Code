/**
 * O módulo time possui a função time.sleep(x), que faz seu programa “dormir”
 * por x segundos. Utilizando essa função, crie uma classe Cronômetro e faça 
 * um programa que cronometre o tempo.
 */

class Cronometro{
    constructor(time){
        this.time = time;
    }
}

class Time extends Cronometro{
    constructor(time){
        super(time);
    };

    sleep(time){
        setTimeout(function(){
            console.log("Acordou");
        }, time * 1000)
    }
}

const cronometro = new Time();
console.log("Dormindo");
cronometro.sleep(10);