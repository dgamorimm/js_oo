const cliente = {
    nome : "Andre",
    idade : 36,
    cpf : "13156432151",
    email : "andre@email.com"  
}

console.log(cliente);

cliente.phone = "6546464325"

console.log(cliente);

cliente.phone = "464643513616"

console.log(cliente);

delete cliente.cpf;

console.log(cliente);