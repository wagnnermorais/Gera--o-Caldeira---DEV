// espalhamento de objetos

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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);

// const fichaGuerreiro = {
//   nome: "Aragorn",
//   classe: "guerreiro",
// };

// const equipoGuerreiro = {
//   espada: "Andúril",
//   capa: "capa élfica +2",
// };

// const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro };
// console.log(guerreiro);
