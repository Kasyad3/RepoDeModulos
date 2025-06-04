const url = require('url');
const http = require('http');
const { parse } = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    var urlInfo = require("url").parse(req.url, true); // Analisa a URL da requisição e retorna um objeto com informações
    const name = urlInfo.query.name;
    res.statusCode = 200; // Define o status da resposta como 200 (OK)
    res.setHeader('Content-Type', 'text/html ; charset=utf-8'); // Define o tipo de conteúdo como HTML
    if(!name){
        res.end("<html><body><h1>Preencha seu nome: </h1><form method='GET'><input type='text' name='name'/> <input type='submit' value='enviar'> </form> </body></html>"); // Envia o HTML como resposta
    }
    else {
        res.end(`<html><body><h1>Olá, ${name}!</h1></body></html>`); // Envia o HTML com o nome preenchido como resposta
    };
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});