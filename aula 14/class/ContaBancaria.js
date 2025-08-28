class ContaBancaria {
    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial
    }

    //método depositar É O SET
    depositar(valor){
        if(valor > 0)
            this.#saldo = valor;
    }

    //método sacar É O SET
    sacar(valor){
        if(valor <= this.#saldo)
            this.#saldo = this.#saldo - valor
    }

    getExtrato() {
        return this.#saldo
    }
}

module.exports = ContaBancaria