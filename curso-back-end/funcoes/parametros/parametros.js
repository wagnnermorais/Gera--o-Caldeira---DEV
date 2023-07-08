function soma(a, b) {
  return a + b;
}

console.log(soma(4, 6));

// parâmetros x argumentos

// ordem dos parâmetros
// parâmetros
function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e tenho ${idade} anos!`;
}
// argumentos
console.log(nomeIdade("Wagner", 23));

function multiplica(a, b) {
  return a * b;
}

console.log(multiplica(soma(2, 3), soma(5, 5)));
