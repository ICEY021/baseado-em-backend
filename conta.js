let saldoJoao = 1000;
let saldoCarlos = 500;

const taxaJuros = 0.02;
const saldoComJuros = saldoJoao * (1 +taxaJuros);

const contaJoao = {titular: "João", saldo: saldoJoao};
const contaCarlos = {titular: "Carlos", saldo: saldoCarlos};
//console.log(saldoComJuros)
//console.log(`${contaJoao.titular} possui R$ ${contaJoao.saldo}.`);
//console.log(`${contaCarlos.titular} possui R$ ${contaCarlos.saldo}.`);

const contas = [contaJoao, contaCarlos];

contas.forEach((conta) => {
    console.log(`${conta.titular} tem R$ ${conta.saldo}`); //forEach é utilizado para percorrer um Array
});

contaJoao.saldo = -5000;
console.log("saldo alterado sem conrole: ", contaJoao.saldo);