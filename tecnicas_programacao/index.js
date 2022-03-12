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

//Cria um servidor HTTP
const server = http.createServer();

//Acessa o servidor criado
server.on('request', (req, res) => {
    const { method, url } = req;

    //Verifica se o metodo é um GET ou POST e retorna um CONTENT-TYPE um "JSON" mas na vdd é uma String 
    if(method === 'GET' && url ==='/'){
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>escola: Lets Code \n ano:2022</h1>");
    } else if (method === 'POST' && url ==='/'){
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json"');
        res.end(JSON.stringify({
            escola : "Lets Code",
            ano : "2022",
            turma : "818",
            mensagem : "BORA SER TECH"
        }))
    }
}); 

server.listen(8080, () => {
    console.log(`escutando em http://localhost:8080`)
}); 
