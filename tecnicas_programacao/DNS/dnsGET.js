const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.write('Ola Mundo!');
    res.end();
}); 

server.listen(8080, () => {
    console.log(`escutando em http://localhost:8080`)
});     