// guardando funções em um objeto

const cliente = {
  nome: "Wagner",
  idade: 23,
  email: "wagner@teste.com",
  telefone: ["5199554433", "5532324455"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      // prettier-ignore
      console.log(`Compra no valor de R$ ${valor} recusada. Seu saldo atual é de: R$ ${this.saldo}`);
    } else {
      this.saldo -= valor;
      // prettier-ignore
      console.log(`Compra no valor de R$ ${valor} aprovada. Seu saldo atual é de: R$ ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(30);
