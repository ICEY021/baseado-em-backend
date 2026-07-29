function criarConta(titular, saldoInicial) {
    let saldo = saldoInicial;
    return {
        titular,
        depositar(valor){
            if (valor <= 0){
                console.log("valor de depósito invalido");
                return;
            }
        }
    }
}