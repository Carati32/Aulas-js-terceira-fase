//Importando o arquivo de classe
// import Carro from "./Carro.js"

// const objCarro = new Carro()
// objCarro.nome = "O nome da menina"
// let nome = objCarro.nome
// console.log("O nome é: " , nome)

// const objCarro2 = new Carro(); //Instanciando minha class
// objCarro2.setNomeChassi("123ABC!@#")//definindo o nome do meu chassi
// let chassi = objCarro2.getNomeChassi(); //aqui estou capturando o nome do meu chassi
// console.log(chassi); //mostra o nome do chassi

//Importando o arquivo de classe
import ContaBancaria from "./ContaBancaria.js"

let saldoInicial = 100.000 //meu saldo inicial
const contaBancaria = new ContaBancaria(saldoInicial) //Instanciando minha classe

//depositando 20 mil reais na minha conta
contaBancaria.depositar(20000)

let extrato = contaBancaria.getExtrato()
console.log("Meu saldo é: ", extrato)
n
//retirando 5000 mil reais da minha conta
contaBancaria.sacar(5000)
console.log("Meu saldo é: ", contaBancaria.getExtrato())

//115 mil reais DE RESTO NA CONTA