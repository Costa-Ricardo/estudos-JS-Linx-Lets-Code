const fs = require('fs');
const path = require('path');

const filesPath = [path.join(__dirname, 'file.txt'), path.join(__dirname, 'file2.txt'), path.join(__dirname, 'file3.txt')];
let data = '';

filesPath.forEach((file) => {
    data = data.concat(`${fs.readFileSync(file, 'utf-8')}\n`);
})
console.log('Arquivos lidos.\n');

fs.writeFileSync('fileResultado.txt', data, function(err){
        if(err){
            console.log('erro');
        }
        console.log('Arquivo criado')
        
});

filesPath.forEach((file) => {
    fs.unlinkSync(file);
});
console.log(`Arquivos originais apagados.\n`);