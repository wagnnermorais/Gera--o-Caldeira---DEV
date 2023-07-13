// iterar dentro do objeto

const cliente = {
  nome: "Wagner",
  idade: 23,
  email: "wagner@teste.com",
  telefone: ["5199554433", "5532324455"],
};

cliente.enderecos = [
  {
    rua: "Rua Fulano de Tal",
    numero: 64,
    apartamento: true,
    complemento: 1974,
  },
];

for (let chave in cliente) {
  let type = typeof cliente[chave];
  if (type !== "object" && type !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}
