//Exemplo operador spread com obj

const dadosAdicionais = {
    rua: "Bertoldo simao de oliveira",
    numero:23
}

const pessoa = {
    name:'Iasmin',
    idade:29,
    ...dadosAdicionais
}

console.log(pessoa)

// pode ser utilizado para desestruturar arrays e objetos

