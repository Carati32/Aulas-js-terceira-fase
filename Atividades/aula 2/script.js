// 1) Peça ao usuário para digitar sua idade. Se tiver 18 anos ou mais, exiba "Maior de idade", senão exiba "Menor de idade".

function suaIdade(){
    //entrada de dados
    let idade = prompt("Digite sua idade")
    if(idade >= 18){
        alert("Maior de idade")
    }
    else{
        alert("Menor de idade")
    }
}

// 2) Crie um sistema de notas. Se a nota for maior ou igual a 9, mostre "Excelente". Se for entre 6 e 8, "Aprovado". Caso contrário, "Reprovado".

function notas(){
    let nota = prompt("Digite sua nota")
    if(nota >= 9){
        alert("Excelente")
    }
    else if(nota >= 6 && nota <= 8){
        alert("Aprovado")
    }
    else{
        alert("Reprovado")
    }
}

// 3) Use switch para imprimir o dia da semana com base em um número de 1 a 7.

function DiaDaSemana(){
    let dia = Number(prompt("Digite o número de um dia da semama. De 1 a 7"))
    switch (dia) {
        case 1:
            alert("Domingo")
            break;
        case 2:
            alert("Segunda")
            break;
        case 3:
            alert("Terça")
            break;
        case 4:
            alert("Quarta")
            break;
        case 5:
            alert("Quinta")
            break;
        case 6:
            alert("Sexta")
            break;
        case 7:
            alert("Sabado")
            break;
        default:
            alert("Por favor digite somente um número de 1 a 7")
            break;
    }
}

// 4) Dado que x = 10 e y = 5;
// a) mostre a soma, b) subtração, c) multiplicação, d) divisão e resto entre elas.
function mostrarContas(){
    let x = 10
    let y = 5
    alert(x + y)
    alert(x - y)
    alert(x * y)
    alert(x/y)
    alert(x % y)
}

// 5) Crie um array com 4 frutas. Adicione uma nova fruta, remova a última, e exiba o array final com as frutas separadas por vírgula.


function arrayDeFrutas(){
    let frutas = ["Maça", "Banana", "Manga", "Melancia"]
    frutas.push("Abacate")
    frutas.pop()    
    frutas.join(",")
    alert(frutas)
}

// 6) Verifique se duas variáveis x = "50" e y = 50 têm o mesmo valor usando == e depois usando ===. Mostre os resultados e explique a diferença.

    let x =  "50"
    let y = 50
    if(x == y){
        console.log("O resultado do == é true pois os dois tem o mesmo valor(50)")
    }
    if(x === y){
        console.log("O resultado do === é false pois os dois tem tipos diferentes. mesmo tendo valor iguais")
    }
    


// 7) Crie uma verificação onde se a pessoa tem mais de 16 anos e se possui título de eleitor exiba "Tem o direito de votar.".

function eleitor(){
    let idade = 16
    let titulo = true
    if(idade >= 16 && titulo){
        alert("Tem o direito de votar.")
    }
    else{
        alert("Não tem o direito de votar.")
    }
}

// 8) Crie uma verificação onde se a pessoa tiver ingresso ou estiver na lista VIP, ela poderá entrar no evento.

    let ingresso = true
    let listaVip = false
    if(ingresso || listaVip){
        console.log("Pode entrar no evento")
    }
    else{
        console.log("Não pode entrar no evento")
    }

// 9) Em um código escreva seu nome completo e mostre:

// a) Tamanho do nome, b) Nome em maiúsculo, c) Nome em minúsculo, d) Verifique se contém a palavra "Soares",
// e) Substitua seu primeiro nome por "Desenvolvedor(a)"

    let nome = "Yuri Carati"
    nome.length // tamanho do nome
    nome.toUpperCase() // nome em maiúsculo
    nome.toLowerCase() // nome em minúsculo
    nome.includes("Soares") // Saber se o nome contem soares
    nome.replace("Yuri" , "Desenvolvedor") // Desenvolvedor Carati


// 10) Crie um sistema simples de login. O usuário só entra se o email não estiver vazio e a senha tiver pelo menos 6 caracteres.
function login(){
    let email = prompt("Digite seu email")
    let senha = prompt("Digite sua senha")
    if(email == ""){
        alert("Coloque um email")
    }
    else if(senha == "" || senha < 6){
        alert("Senha muito pequena. Coloque pelo menos 6 caracteres")
    }
    else{
        alert("Logado com sucesso!")
    }
}
 //OU

 let email = "email@exemplo.com"
 let senha = "123456"

if(email != "" && senha.length >= 6)
    true;
else
    false;