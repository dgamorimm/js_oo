class Cliente{
    constructor(nome, cpf, email, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoupanca){
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const douglas = new ClientePoupanca("Douglas", "54645465455", "douglas@gmail.com", 100, 200);

console.log(douglas);

douglas.depositar(50)
douglas.depositarPoupanca(500)

console.log(douglas);