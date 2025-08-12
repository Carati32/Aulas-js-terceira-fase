//Criando servidor com NODEJS 

const http = require('http'); //modulo interno no node
const port = 3000;//porta onde o node/servidord irá rodar       

//cria o servidor
const server = http.createServer((req,res) => {//criando o servidor
    // Define o cabealho da resposta com status 200 (OK) e content-type texto simples
    res.writeHead(200, {"Content-type": "text/plain"}) // definindo o cabeçalho

    //Escreva a resposta
    res.write("Olá, servidor Node.js puro está funcionando!") //Corpo

    //Finaliza a resposta
    res.end()
})

//coloca o servidor para escuta na porta definida

server.listen(port, () => { //servidor irá rodar na porta definida
    console.log(`Servidor rodando na porta ${port}. Só abrir localhost:${port}/`)
})

const fs = require("fs"); //Importando modulo interno de node chamado File System
//Lendo Arquivos

// fs.readFile('dados.txt', 'utf-8', (err, data) =>{ //Chamando o metodo para ler meu arquivo
//     if(err) //Se der erro, vai aparecer no console
//         console.log('Erro: ', err)


//     console.log(data)// nnessa linha irá mostrar os daods do meu arquivo "dados.text"
// })

//Escrevendo no arquivo
// fs.writeFile('dados.txt', 'Olá pessoal!!!', (erro) => {
//     if(erro)
//         console.log("Houve um erro: " + erro)

//     console.log('Arquivo salvo con sucesso')
// })


//Acrescenta dados no arquivo
fs.appendFile("dados.txt", "\n Linha acrescentado!!!!! acaba logoooo", (err) =>{
    if(err)
        console.log('Erro: ', err)

    console.log('Linha adicionada com sucesso.')
})