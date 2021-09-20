const customers = [
    {
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
    },
    {
        nome : "Douglas",
        idade : 26,
        cpf : "13156432151",
        email : "douglas@email.com",
        phones: ["46546516511", "64654641515"],
        dependentes:[
            {
                nome: "Vitória Baltazar",
                parentesco: "filha",
                dataNasc: "08/08/2020"
            },
            {
                nome:"Paula Baltazar",
                parentesco: "cônjuge",
                dataNasc: "25/04/1995"
            }
        ],
        saldo: 100,
        depositar: function(valor){
            this.saldo += valor
        }
    }
]

let depedentsList = [...customers[0].dependentes,...customers[1].dependentes]


console.log(depedentsList);
