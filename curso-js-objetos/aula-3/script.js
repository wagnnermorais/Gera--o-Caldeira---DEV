const cliente = {
  nome: "André",
  idade: 32,
  cpf: "11122233345",
  email: "andre@dominio.com",
};

console.log(
  `O cliente ${cliente.nome} de ${cliente.idade} anos, registrado no CPF ${cliente.cpf} e e-mail ${cliente.email}, está cadastrado!`
);

// Usando colchetes

console.log(
  `O cliente ${cliente["nome"]} de ${cliente["idade"]} anos, registrado no CPF ${cliente["cpf"]} e e-mail ${cliente["email"]}, está cadastrado!`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

// prettier-ignore
chaves.forEach((chave) => {
  if (cliente[chave] == undefined) {
    console.log(`A chave ${chave} não está cadastrada no nosso sistema, verifique novamente!`); // Essa condicional não estava no curso mas implementei                                                              
  } else {                                                                                      // com conhecimentos que já possuo
    console.log(`A chave ${chave} tem o valor de: ${cliente[chave]}`);
  }
});
