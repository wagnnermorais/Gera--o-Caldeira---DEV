const apresentarArrow = (nome) => `meu nome é ${nome}`;

const soma = (a, b) => a + b;

// Arrow com + de 1 linha de instrução

const somaNumeros = (a, b) => {
  if (a || b > 10) {
    return "somente números de 1 a 9";
  } else {
    return a + b;
  }
};
