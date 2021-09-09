const cliente = {
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
        }
    ]
    
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco: "filha",
    dataNasc: "08/08/2020"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => 
    dependente.dataNasc==="08/08/2020")

console.log(filhaMaisNova[0].nome);