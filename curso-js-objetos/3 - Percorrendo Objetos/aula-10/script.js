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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}
