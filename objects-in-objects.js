const cliente = {
    nome : "Andre",
    idade : 36,
    cpf : "13156432151",
    email : "andre@email.com",
    phones: ["46546516511", "64654641515"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Vitoria Baltazar"

console.log(cliente);