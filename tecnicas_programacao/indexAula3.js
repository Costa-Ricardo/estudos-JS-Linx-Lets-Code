//Importando o filesystem fs e o path
const fs = require('fs');
const path = require('path');

// __dirname, __filename
const filePath = path.join(__dirname,'anotações.txt');
fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log('Os dados do arquivo são', data);
});

/* const data = fs.readFileSync(filePath, 'utf-8');
console.log('Responsta do readFileSync', data);
console.log('Agora sim é o final');
 */