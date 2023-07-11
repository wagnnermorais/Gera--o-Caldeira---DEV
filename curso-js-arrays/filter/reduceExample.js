const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => acc + atual, 0);

console.log(soma); //170

// outra forma de executar o reduce

function operacaoNumerica(acc, atual) {
  return atual + acc;
}

const somaAlternativa = numeros.reduce(operacaoNumerica, 0);

console.log(somaAlternativa);
