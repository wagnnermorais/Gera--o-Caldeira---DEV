const notas = [10, 6, 8];

notas.unshift(9);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
console.log(notas[0]);

// ou com Push para inserir no final do Array.

const notasPush = [10, 6, 8];

const mediaPush =
  (notas[0] + notas[1] + notas[2] + notas[3]) / notasPush.length;

notasPush.push(2);

console.log(mediaPush);
console.log(notas[3]);
