const cliente = {
  nome: "André",
  idade: 32,
  cpf: "11122233345",
  email: "andre@dominio.com",
};

console.log(
  `O cliente ${cliente.nome} de ${cliente.idade} anos, registrado no CPF ${cliente.cpf} e e-mail ${cliente.email}, está cadastrado!`
);

console.log(
  `Os 3 primeiros digites do CPF são: ${cliente.cpf.substring(0, 3)}`
);
