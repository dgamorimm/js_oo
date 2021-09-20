const customers = {
    nome : "Andre",
    idade : 36,
    cpf : "13156432151",
    email : "andre@email.com",
    phones: ["46546516511", "64654641515"],
    dependentes:[
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome:"Samia Maria",
            parentesco: "filha",
            dataNasc: "08/08/2020"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}


function offersSecurity(obj){
    const propsCustomers = Object.keys(obj)
    if (propsCustomers.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(customers));
console.log(Object.entries(customers));
offersSecurity(customers)
