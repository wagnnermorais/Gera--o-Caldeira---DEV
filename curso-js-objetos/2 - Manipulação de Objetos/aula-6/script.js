// guardar objeto dentro de objeto

const cliente = {
  nome: "Wagner",
  idade: 23,
  email: "wagner@teste.com",
  telefone: ["5199554433", "5532324455"],
};

cliente.endereco = {
  rua: "Rua Fulano de Tal",
  numero: 64,
  apartamento: true,
  complemento: 1974,
};

console.log(cliente.endereco.rua);
