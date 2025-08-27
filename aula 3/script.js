//Atividade 1
//Crie um array com os nomes de 5 colegas da sua sala.
//Depois, use um for para imprimir no console a seguinte mensagem para
//cada um:
//Olá, Ana! Bem-vindo(a) à aula de JavaScript.
//Olá, Lucas! Bem-vindo(a) à aula de JavaScript.
//…
//Objetivo: praticar o uso do for para percorrer arrays e usar os valores.
const colegas = ["Yuri", "Carati", "Anderson", "Alex", "Vitória"]

for(let i = 0; i < colegas.length; i++){
    console.log(`Olá, ${colegas[i]} Bem-vindo(a) à aula de JavaScript.`)
}

//Atividade 2
//Crie um array com 5 números inteiros.
//Use um for para somar todos os números e mostrar o resultado final no
//console.
//Objetivo: praticar o uso de for com números e acumuladores (let soma = 0).
const number = [1,2,3,4,5]
let soma = 0
for(let i = 0; i < number.length; i++){
    soma += number[i]
}
console.log(soma)

//Atividade 3
//Crie um array com 5 notas de um aluno. Depois, use um laço de repetição
//para somar as notas e, ao final, calcule e mostre a média.
//Objetivo: Reforçar a ideia de percurso com for, acumulador e uso prático do
//array em um cálculo real
const notas = [10,9,8,7,6]
let somanotas = 0
for(let i = 0 ; i < notas.length; i++){
    somanotas += notas[i]
}
console.log(somanotas / 5)

//Desafio 4
//Crie um exemplo prático que use os métodos de array aprendidos em aula
//(como push, pop, shift, unshift, length, entre outros).
//Use sua criatividade para montar uma situação em que esses métodos
//façam sentido — pode ser uma lista de tarefas, carrinho de compras, nomes
//de jogadores, etc.

let anime = ["Boku no hero", "Dragon ball", "Bleach"]

anime.push("Naruto")
anime.pop()
anime.shift("Comboy Bebop")
console.log("A quantide de animes é " + anime.length  + " Sendo eles" + " "  + anime)