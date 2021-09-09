const cliente = {
    nome : "Andre",
    idade : 36,
    cpf : "13156432151",
    email : "andre@email.com",
    phones: ["46546516511", "64654641515"]
}

cliente.phones.forEach(phone => {
    console.log(phone);
});