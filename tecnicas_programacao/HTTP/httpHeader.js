const http = require('http');

//Cria um servidor HTTP
const server = http.createServer();

//Acessa o servidor criado
server.on('request', (req, res) => {
    const { method, url } = req;

    //Verifica se o metodo é um GET e nesse caso o CONTENT-TYPE é um JSON
/*     if(method === 'GET' && url ==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            escola: 'Lets Code',
            ano: 2022,
        }));
    } */

    //Verifica se o metodo é um GET e nesse caso o CONTENT-TYPE é um TEXT/JSON
    if(method === 'GET' && url ==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>escola: Lets Code \n ano:2022</h1>');
    }
}); 

server.listen(8080, () => {
    console.log(`escutando em http://localhost:8080`)
}); 