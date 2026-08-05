class ContaBancaria {
    #Saldo;

    constructor(titular, saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor < 0) {
            console.log("valor de deposito invalido.");
            return;
           
        }
        this.#saldo += valor;
    }
    sacar(valor){
        if (valor > this.#saldo) {
            console.log("saldo insulficiente.");
            return; 
        }
        this.#saldo -= valor;
        }
        get saldoAtual() {
            return this.saldoAtual;
        }
}

const contas = [new ContaBancaria("João", 1000), new ContaBancaria
("paulo", 500)];

contas.forEach((conta) => {console.log(`${conta.titular} tem R$ ${conta.saldoAtual}`);
});