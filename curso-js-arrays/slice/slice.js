const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const salaPequena = alunos.slice(0, /*10*/ alunos.length / 2); // ao invés de um valor estático, pode ser usado algo dinâmico, usando a propriedade length
const salaGrande = alunos.slice(alunos.length / 2); // sem informar um segundo parâmetro, automaticamente será feito até o fim do array
console.log(salaPequena);
console.log(salaGrande);
