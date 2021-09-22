function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email =  email
    this.saldo = saldo
    this.depositar =  function(valor){
        this.saldo += valor
    }
}

const douglas = new Cliente("Douglas", "1651612316", "douglas@gmail.com", 100)

console.log(douglas);