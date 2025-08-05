//Função callback

//Função Síncrona(Faz um de cada vez)
//function executar(minhaFuncaoCallback){
//    console.log("Antes")
//    minhaFuncaoCallback()
//    console.log("Depois")
//}

// executar(function(){console.log("Executando")})
//executar(()=> console.log("Executando"))

//Validação de Formulário
//1) Um site precisa validar dados de um formulário de cadastro (nome, e-mail e idade). Crie uma função
//tradicional para validar o nome e uma arrow function para validar a idade se for maior ou igual a 21

function validaNome(nome) {
    return nome != "" ? nome : "NOME VAZIO"
}

function validaNome2(nome) {
    if (nome.lenght > 2)
        return console.log("O nome é valido.")

    return console.log('Não existe nome com duas letra.')
}

const idade = i => console.log(`A idade é ${i}`)
idade(25)
validaNome2("")

//Sistema de autenticação com callback
//2) Um sistema precisa validar se o usuário existe no banco de dados e, caso sim, redirecionar para a área
//logada. Simular essa autenticação usando uma função login(usuario, senha, callback) onde o callback define
//o que fazer após o login.

function login(usuario, senha, callback) {
    if (usuario === "ana@email.com.br")
        console.log("Existe")
    else console.log("Email invalido.")

    if (senha === "123456")
        console.log("Senha correta")
    else
        console.log("Senha incorreta")

    callback()
}

login("beatriz@email.com.br", "080297", () =>{ console.log("Carregando login...")})


//Calculadora de Frete com Funções Anônimas
//3) Um e-commerce calcula o frete com base no peso e região do cliente. Criar uma função calcularFrete(peso,
//regiao) que utilize uma função anônima dentro para aplicar as taxas
// function calcularFrete(peso, regiao) {
//     const taxaPorRegiao = function(r){
//         switch (r){
//             case "norte": return 20; break;
//             case "sul": return 10;  break;
//             case "leste": return 15;  break;
//             case "oeste": return 12;  break;
//             default: return 25; break;
//         }
//     }
//     const taxa = taxaPorRegiao(regiao);
//     const frete = peso * taxa;
//     return frete
// }
// console.log(calcularFrete(5,"norte"));
// console.log(calcularFrete(3, "sul"))

//4) Crie uma função chamada MULT que receba 3 parametros e retorne a multiplicação
//deles. Depois crie outra funcao chamada MEDIA que calcule a média de três notas e
//retorne o resultado.

function MULT(number1, number2, number3) {
    return number1 * number2 * number3
}



function MEDIA(number1, number2, number3) {
    return  (number1 + number2 + number3) / 3
}

console.log(MULT(4, 4, 4))
console.log(MEDIA(10, 10,10))
//OU 
// function mult (n1, n2, n3){
//     return console.log(n1 * n2 * n3)
// }

// function media (n1, n2, n3){
//     return console.log((n1 + n2 + n3 ) / 3)
// }
// mult(2,2,2)
// media(10,20,30)

//5) Crie uma função anonima chamada GRITAR que receba como parametro uma string
//e retorne ela em maiuscula.

const GRITAR = function (nome) {
    return `${nome}`.toUpperCase()
}
console.log(GRITAR("yuri"))

//6) Crie uma arrow function que retorne o dobro de números pares

const dobro = n => n * 2
console.log(dobro(8))