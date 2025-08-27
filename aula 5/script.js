// //Funções Tradicionais

// function concatenacaoPalavras(a, b) {
//     return a + " - " + b // Ana - Beatriz
// }

// //Funções anonimas
// let saudacao = function () {
//     console.log("Oi pessoal")
// }

// concatenacaoPalavras("Vitor", "Moreira");
// saudacao();

// // Arrow functions
// const saudacao1 = () => {
//     console.log("Oi pessoal")
// }


// // function somar (a,b){
// //     return a + b;
// // }

// // é equivalente a essa função arrow function
// const somar = (a, b) => a + b;
// //Diferença do This entre arrow functions e funções tradicionais
// // Arrow function não posso utilizar o this
// // Função normal posso utilizar o this
// const obj = {
//     nome: "Ana",
//     idade: 15,
//     saudacao: () => {
//         // console.log("Oi" + this.nome)  erro por causa que é um arrow function, certo se for function(){}
//         // Equivalente a 
//         console.log("Oi" + obj.nome)
//     }
// }

// // Função callback

// function executar(a, b, c, d, funcaoCallback) {
//     console.log("Antes");
//     funcaoCallback();
//     console.log("Depois")
// }

// executar(() => console.log("Executando!!!"))

// //Resultado do código
// //Antes
// //Executando
// //Depois


// //Função síncrona

// function sincrona() {
//     console.log("Vai executar essa linha primeiro")
//     console.log("Depois essa linha")
//     console.log("E depois essa linha")
// }

// sincrona()

// function teste() {
//     console.log("a")
//     setTimeout(() => {
//         console.log("b");
//     }, 2000)
//     console.log("c")
// }

// teste()
// //Funções que retornam outras funções
// //Funcao1
// function funcao1(nome){
//     //Funcao 2
//     return function (mensagem){
//         console.log(`${mensagem}, ${nome}`)
//     }
// }

// const msgParaLuzia = funcao1("Luzia"); //Funcao 1
// msgParaLuzia("Fala comigo") //Funcao 2

// function funcao1(nome, mensagem){
//     return console.log(`${mensagem}, ${nome}`)
// }

//Funções assincronas

function esperar (){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log('Demorou, mas chegou :D')
        }, 5000)
    })
}

//Toda vez que eu fizer uma função assincrona
// eu preciso utilizar o await

async function executar () {
    console.log('Executando...');
    const resultado = await esperar(); //Espera a promise finalizar com sucesso ou falha
    console.log(resultado)
    console.log("Finalizado")
}

executar()

//Resultado desse código
//Esperando..
//Depois de 5 segundos...
//Demorou mas chegou

let carro ={
    nome:"Honda Civic da Ana Beatriz",
    marca:"Honda",
    modelo:"Civic",
    ano:2025,
    atributos: ["som", "camera de re", "teto solar", "escapamento", "antena"]
}

console.log(carro.ano); //2025
console.log(carro.atributos[2]); //teto solar

//Adicionar
carro.color = "Preto com vermelho";

//Alterar
carro.nome = "Honda Civic 2025"