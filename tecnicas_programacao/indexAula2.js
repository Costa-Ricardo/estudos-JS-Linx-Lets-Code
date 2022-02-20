const readline = require('redline')
const figlet = require('figlet')

function verificaIdade(idade){
    return Number.parseInt(idade)>= 18;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js?', (answer) => {
    
    // TODO: Log the answer in a database
    console.log('Thank you for your valuable feedback:', $(answer));

    rl.close();
})