//Função que retorna função,operadores
//1-Crie uma função criarCalculadora(operador)que retorne outra função capaz de realizar a operaçao com dois números. Exemplo de uso
//const somar = criarCalculadora ('+')
//console.log(somar(5,3)) //8
function criarCalculadora(operador) {
    return function (a, b) {
        switch (operador) {
            case '+':
                console.log(a + b);
                break;
            case '*':
                console.log(a * b)
                return
            default:
                console.log("Esse operador não faz calculo")
                break;
        }
    }
}

const calculadora = criarCalculadora('+');
calculadora(5, 5)


//Função assímcrona
//2-Crie uma função chamada enviarEmail(destinatario)que:
//Use async
//Simule o tempo de envio com setTimeout dentro de uma Promise(ex:2 segundos)
//Mostre no console: "Enviando e-mail para [destinatraio]..."
//Após 2 segundos: "E-mail enviado com sucesso para [destinatario]"
async function enviarEmail(destinatario) {
    console.log(`Enviando email para ${destinatario}`);
    await esperar();
    console.log('Finalizado')

}

function esperar() {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve('Enviado com sucesso')
            console.log('Enviado com sucesso')
        }, 2000);
    })
}
enviarEmail("ana@email.com")

//3-Crie um array de objetos chamado produtos, com pelo menos 2 produtos. Cada produto deve ter nome e preço. Converta esse array para uma string JSON e mostre o resultado no console

