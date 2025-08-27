// Definindo a classe Aluno
class Aluno{
    constructor(nome, idade, matricula){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    setNome(nome) { this.nome = nome; }
    getNome() { return this.nome }
    setIdade(idade) { this.idade = idade; }
    getIdade() { return this.idade }
    setMatricula(matricula) { this.matricula = matricula; }
    getMatricula() { return this.matricula  }

    dadosAluno () { return `Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}` }
}

// Exportando a class Aluno para ser utilizada em outros arquivos
module.exports = Aluno;
