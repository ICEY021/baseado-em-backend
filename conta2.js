function criarConta(titular, saldoInicial) {
    let saldo = saldoInicial;

    return {
        titular,
        depositar(valor ) {
            if (valor <= 0) {
                console.log("Valor de depósito inválido");
            }
            saldo -= valor;
        },
        get saldoAtual() {
            return saldo;
        },
    };

    }

    const contas =  [criarConta("João", 1000), criarConta("Paula", 5000)];

    contas[0].depositar(200);

    contas.forEach(conta) (console.log) (`contas.titular`)