const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

// No exemplo da aula foi procurado um usuário cravado, mas decidi dar uma brincada a mais
// E implementar um pouco mais de lógica para deixar de forma aleatória o retorno de posição de array

// prettier-ignore
// console.log(
// `O aluno(a) premiado foi: ${lista[0][Math.floor(Math.random() * alunos.length)]} \nE sua média é: ${lista[1][Math.floor(Math.random() * medias.length)]}`
// );

// function verificaAluno(nome) {
//   if (lista[0].includes(nome)) {
//     const index = lista[0].indexOf(nome);
//     const media = lista[1][index];
//     console.log(`${nome} está cadastrado(a) e sua média é de: ${media}.`);   // função do exercicio estruturada
//   } else {
//     console.log("Nome não encontrado!");
//   }
// }

// verificaAluno("Ana");

function verificaAluno(nome) {
  if (lista[0].includes(nome)) {
    // const alunos = lista[0]
    // const medias = lista[1]
    const [alunos, medias] = lista;  // equivale ao mesmo código acima, cria constantes nas mesmas posições
    const index = alunos.indexOf(nome);
    const mediaAluno = medias[index];
    console.log(`${nome} está cadastrado(a) e sua média é de: ${mediaAluno}.`);   // função do exercicio desestruturada para melhorar legibilidade e entendimento do código
  } else {
    console.log("Nome não encontrado!");
  }
}

verificaAluno("Ana");
