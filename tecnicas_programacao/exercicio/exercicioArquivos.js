const fs = require('fs');
const path = require('path');

fs.readFile('file.txt', 'utf-8', function(err, data){
    fs.writeFile('fileResultado.txt', data, function(err){
        if(err){
            console.log('erro');
        }
        console.log('Arquivo criado')
        //fs.unlink('./tecnicas_programacao/exercicio/file.txt');
    })
});

fs.r