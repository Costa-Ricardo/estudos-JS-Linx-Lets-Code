/* Exercício
-Receber o tipo de cerveja como body (pode ser text mesmo)
    -Qual método HTTP que cria?

-Criar um novo arquivo com o conteúdo do body-Nome do arquivo 
deve ser criado usando um identificar
    -Por exemplo, new Date().toISOString()

-Atualizar um arquivo, recebendo como query param o nome do arquivo, 
com um conteúdo novo
    -Qual método HTTP que atualiza? 
*/

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.write();
    res.end();
}); 

server.listen(8080, () => {
    console.log(`escutando em http://localhost:8080`)
});    