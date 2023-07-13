// array de objetos

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

cliente.enderecos.push({
  rua: "Rua Filipe de Oliveira",
  numero: 720,
  apartamento: false,
  complemento: 0,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

// console.log(cliente);
console.log(listaApenasApartamentos);
