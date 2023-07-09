const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares]; // transforma em um único array

console.log(numeros);

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, outrosNumeros);

const pessoa = {
  nome: "Wagner",
  idade: 23,
};

const pessoaComTelefone = {
  ...pessoa,
  telefone: 5551999112233,
};

console.log(pessoa, pessoaComTelefone);

// const nome = pessoa.nome; // forma usual de invocar uma propriedade de um objeto
const { nome } = pessoa; // uma possibilidade para invocar uma propriedade de um objeto
console.log(nome);

function imprimeDados({ /* dados */ nome, idade }) {
  // const { nome, idade } = dados;
  console.log(nome, idade);
}

imprimeDados(pessoa);
