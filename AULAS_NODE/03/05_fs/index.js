const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', 'utf8' ,(err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write(data); // Envia o conteúdo do arquivo como resposta
        res.end(); // Finaliza a resposta
    });

    server.listen(port, () => {
        console.log(`Servidor rodando na porta http://localhost:${port}`);
    });

});