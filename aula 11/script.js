//const cep = `88060383`

// //Fetch API - Nativo Javascript8
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
// //ou fetch("https://viacep.com.br/ws/"+cep+"/json/")
// .then(res => res.json()) //converte para objeto
// .then(data => console.log(data)) //recebe os dados convertidos e mostra os dados
//.catch(err => console.log(err)) //se der erro, captura e mostra o erro

//#####################################################################


//Funcao que ler os dados do arquivo
function lerDados(arquivo= "usarios.json"){
    //retorna os dados convertidos para OBJETO
    return JSON.parse(fs.readFileSync(arquivo, 'utf-8'))
}
//Salva os dados no arquivo
function salvarDados(arquivo="usarios.json", dados){
    //USA A FUNÇÃO DE ESCREVER NO ARQUIVO, PASSANDO COMO PARAMETROS O ARQUIVO E UM MÉTODO QUE CONVERTE PARA JSON
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2))
}

//CRIAR NOSSO SERVIDOR

const http = require('http')
const fs = require('fs')
const port = 3000

//cria o servidor

const server = http.createServer((req,res) => {//criando o servidor
    //Define o conteúdo da resposta
    res.setHeader(200, {"Content-type": "application/json"}) 

    if(req.method === "GET" && req.url === '/dados'){
        const dados = lerDados('usuarios.json') //retorna os dados do json
        res.writeHead(200)
        res.end(JSON.stringify(dados))
    }
    else if(req.method === "POST" && req.url === "/dados"){
        let body = ''
        //É um evento que escuta qunado os dados chegam
        req.on('data', chunk =>{
            body += chunk.toString()
        })
        req.on('end', () =>{
            try{//tudo que der certo ele entra aqui
                const novoDado = JSON.parse(body)

                //Lê o json existente
                const dados = lerDados('usuarios.json')

                //Gera o ID
                novoDado.id = 99
      
                //Adiciona o novo dados no json
                dados.push(novoDado)

                //Chama função salvar dados
                salvarDados('usuarios.json', dados)

                res.writeHead(201) //Responde ao cliente com status (criado com sucesso)
                res.end("Dados adicionados com sucesso")

            }catch(error){ //se der errado, entra aqui
                console.log("Ocorreu um erro: " ,error)
                res.writeHead(400)
            }
        })
    } else{
        res.writeHead(404)
        res.end("Página não existe.")
    }
})

//coloca o servidor para escuta na porta definida

server.listen(port, () => { //servidor irá rodar na porta definida
    console.log(`Servidor rodando na porta ${port}. Só abrir localhost:${port}/`)
})

const url = `http://localhost:${port}/dados`

const objNovoDado = {
    nome: "Yuri Carati",
    idade: 3000,
    salario: 500.00
}

fetch(url,{
    method: "POST",
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(objNovoDado)
})
.then(response => {
    if(!response)
        console.log("Errorrrrr")
    return response.json()
})
.then(data => console.log("Resposta do servidor: ", data))
.catch(error => {
    console.log('Error:', error)
})