/**
 *  Criar 3 endpoints  (e.g. /foo, /baz, /bar) e retornar 3 tipos diferentes de dados
 *  Pesquisar e tratar outros tipos de http method (GET, PUT, POST, DELETE)
 *  Criar 3 arquivos .txt com o conteúdo dentro
 *  Criar 1 endpoint com um deles retornando htmal e renderizando o conteúdo dentro de um lista
 *  Criar 1 endpoint retornando o conteúdo dentro de um json
 */

const http = require('http');


const server = http.createServer();
 
 //Acessa o servidor criado
server.on('request', (req, res) => {
    const { method, url } = req;
 
    //Verifica se o metodo é um GET ou POST e retorna um CONTENT-TYPE um "JSON" mas na vdd é uma String 
    if(method === 'GET' && url ==='/html'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>escola: Lets Code \n ano:2022 \n RETORNAMOS UM TEXT/HTML</h1>");
    } else if (method === 'GET' && url ==='/json'){
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json"');
        res.end(JSON.stringify({
            escola : "Lets Code",
            ano : "2022",
            turma : "818",
            mensagem : "Retornamos um JSON"
        }))
    } else{
        res.statusCode = 404,
        res.setHeader('Content-Type', 'text');
        res.end('VOCÊ VEIO LONGE DEMAIS')
    }
}); 

server.listen(8080, () => {
   console.log(`estamos em http://localhost:8080`)
}); 