const http = required('http');
const porta = 3000;

const server = http.createServer((req, res) => {
    res.write('Olá, Mundo!\n');
    res.end();
});

server.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});