/* Exercício:

- Criar uma pasta com os seguintes arquivos dentro:
    -   index.js
    -filePath.txt
- Adicionar algum conteúdo no filePath.txt
- Ler o conteúdo do arquivo usando o módulo fs 
   - Os 3 jeitos são:
        - readFile (callback)
        - readFileSync
        - fs.promises.readFIle (.then(callback)) */

const fs = require('fs');
const path = require('path');


/* const filePath = path.join(__dirname, 'file.txt');
fs.readFile(filePath,'utf-8', (err, data) => {
    console.log('O arquivo file diz: ', data);
});

const data = fs.readFileSync(filePath, 'utf-8');
console.log('Resposta do readFileSync', data);
console.log('Agora acabou');
 */
fs.readdir(__dirname, (err, data) => {
    data.forEach(f => {
        const fPath = path.join(__dirname, f);
        fs.stat(fPath, (_, fileStats) => {
            console.log(`File: ${f}\t isFile: ${fileStats.isFile()}`);
        });
    });
});
/* 
fsPromise 
    .readFile(filePath, 'utf-8')
    .then(res => {
        const lines = res.split('\n')
        console.log(lines[0]);
    })
    .cacht(err => {
        console.log('erro', err)
    });

async function leArquivoAsync() {
    try{
    const data = await fsPromise.readFile(filePath, 'utf-8');
    const lines = data.split('\n');
    console.log('[leArquivoAsync]', lines[0]);
    } catch (err){
        throw new Error('não deu pra ler :-(');
    }
    
}

leArquivoAnsyc().then(res => {console.log(res)}) */
