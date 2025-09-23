const http = require('http'); // Importa o módulo HTTP nativo do Node.js
const port = 3000; // Define a porta onde o servidor irá trabalhar

const server = http.createServer((req, res) => {
 // Define o cabeçalho da resposta com status 200 (OK) e content-type texto simples
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Escreve a resposta
    res.write('Olá, servidor Node.js está funcionando!');
    // Finaliza a resposta
    res.end();
});

// Coloca o servidor para escutar/trabalhar na porta definida
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Importa o Express
//const express = require('express'); // Cria uma instância do Express
//const app = express(); // Porta onde o servidor vai rodar
//const PORT = 3000;
//
//// Permite que o servidor leia dados JSON enviados pelo corpo da requisição
//app.use(express.json());
//
//// Rota principal (GET) - só para testar
//app.get('/', (req, res) => {
//res.send('Olá, mundo!');
//});
//
//// Inicia o servidor
//app.listen(PORT, () => {
//console.log(`Servidor rodando em http://localhost:${PORT}`);
//});