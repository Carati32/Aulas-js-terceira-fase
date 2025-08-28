//Atividade 1
//Contexto: É importante entender quem pode acessar cada tipo de dado para proteger informações e manter a lógica correta.
//Comando:
//1º Explique COM AS SUAS PALAVRAS o que é public, private e protected.
//2º Explique COM AS SUAS PALAVRAS o que é GET e SET dentro de uma classe.
//3º Explique COM AS SUAS PALAVRAS para que serve o encapsulamento.
//1º Public são metódos/atributos que qualquer pessoa pode usar. Private é ao contrário do public, onde são metódos/atributos que só podem ser acessados dentro da propria classe. Já o Protected serve para deixar a classe e subclasses exclusivos. Nem todos podem acessar.
//2º Get server para lé um valor privado de forma segura, set = definir regras e validações
//3º O encapsulamento server para esconder dados internos de uma classe e permitir que outras partes do codigo interajam com ela apenas de forma controlada


//Atividade 2
//Contexto: Um professor quer armazenar informações sobre os alunos, como nome e nota. Para proteger esses dados, eles devem ser privados, permitindo acesso apenas por métodos controlados.
//Comando: Crie a classe utilizando os conceitos de encapsulamento para armazenar e recuperar os dados.
class alunos{
    #nome
    #nota

    constructor(nome, nota){
        this.#nome = nome
        this.#nota = nota
    }
    setNome(nome){
        this.#nome = nome
    }

    setNota(nota){
        this.#nota = nota
    }

    getnome(){
        return this.#nome
    }
    getnota(){
        return this.#nota
    }

}
const objAluno = new Aluno()
objAluno.setNome("Yuri")
objAluno.setNota("8")

console.log(objAluno.getNome())
console.log(objAluno.getNota())
//Atividade 3
//Contexto: Você precisa criar um sistema que controla carros. Alguns comportamentos, como ligar ou frear, devem ser públicos, mas a velocidade do carro deve ser privada e não acessível diretamente.
//Comando: Crie uma classe Carro aplicando os conceitos de encapsulamento. O atributo velocidade deve ser privado, não podendo ser acessado diretamente. Implemente métodos públicos ligar() e frear() para controlar o carro, além de getters e setters que permitam acessar ealterar a velocidade de forma segura, incluindo validações quando necessário. Teste a classe criando um objeto Carro e chamando seus métodos.
class Carro{
    #velocidade
    ligar

    constructor(vel){
        this.#velocidade = vel
        this.ligar = 0
    }

    ligar(){
        this.ligar = 1
    }

    frear(){
        this.#velocidade--
    }

    setVelocidade(velocidade){
        if(this.ligar == 1 && velocidade > 0)
        this.#velocidade += velocidade
    }

    getVelocidade(){
        return this.#velocidade
    }
}

const cc = new ControlaCarro ()
cc.ligar()
cc.setVelocidade(100)
cc.frear()
let vel = cc.getVelocidade()
console.log(vel)

//Atividade 4
//Contexto: Um banco quer proteger as contas de seus clientes. O saldo deve ser privado e só pode ser alterado por métodos que validam depósitos e saques.
//Comando: Crie uma classe ContaBancaria que represente uma conta de cliente, garantindoque os dados internos sejam protegidos e que o comportamento da conta siga regras de segurança e consistência. Teste a classe criando objetos e simulando operações típicas deuma conta bancária
class ContaBancaria {
    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial
    }


    depositar(valor){
        if(valor > 0)
            this.#saldo = valor;
    }

    
    sacar(valor){
        if(valor <= this.#saldo)
            this.#saldo = this.#saldo - valor
    }

    getExtrato() {
        return this.#saldo
    }
}


//Atividade 5
//Contexto: Um sistema de login precisa de segurança: a senha deve ser protegida, de forma que só a própria classe ou subclasses possam acessá-la.
//Comando:
//1º Crie uma classe Usuario com o atributo _senha (simulando protegido).
//2º Crie uma subclasse Admin que consegue acessar _senha e exibir se a senha é válida.
//3º Teste criando um usuário e um administrador e mostre a diferença de acesso.