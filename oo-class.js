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

const douglas =  new Cliente("Douglas", "456464664", "douglas@gmail.com", 100)

douglas.exibirSaldo()

console.log(douglas);