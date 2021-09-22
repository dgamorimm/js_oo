function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email =  email
    this.saldo = saldo
    this.depositar =  function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const douglas = new ClientePoupanca("Douglas", "5654564651654", "douglas@gmail", 100, 200)

console.log(douglas);

ClientePoupanca.prototype.depositarPoup =  function(valor){
    this.saldoPoup += valor
}

douglas.depositarPoup(30)

console.log(douglas.saldoPoup);

console.log(douglas.hasOwnProperty("saldoPoup"))
console.log(douglas instanceof Cliente)
console.log(typeof douglas)
console.log(douglas instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)