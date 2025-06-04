const http = require('http');

const porta = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Define o status da resposta como 200 (OK)
    res.setHeader('Content-Type', 'text/html'); // Define o tipo de conteúdo como HTML
    res.write('<html><body><h1>Ola, Mundo!</h1></body></html>'); // Envia o HTML como resposta
    res.end(); // Finaliza a resposta
});

server.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});