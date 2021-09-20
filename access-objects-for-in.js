const customer = {
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

let report = "";

for (let info in customer){
    if(typeof customer[info] === "object" || typeof customer[info] === "function"){
        continue
    }else{
        report += `${info} ==> ${customer[info]}\n`
    }
}

console.log(report);