const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

notas.forEach((nota, index) => {
  somaNotas += nota;
  console.log(index);
});

const media = somaNotas / notas.length;

console.log(`A média das notas é: ${media}`);
