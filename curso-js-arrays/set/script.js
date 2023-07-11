const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);
// const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(nomes)]; // ou de forma direta na variável

console.log(nomesAtualizados);
