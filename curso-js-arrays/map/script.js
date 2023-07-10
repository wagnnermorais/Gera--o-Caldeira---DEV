const notas = [10, 8, 4, 6];

const notasMap = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasMap);
