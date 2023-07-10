const nomes = ["Wagner", "Filipe", "Márcio"];

// Callback com função anônima
nomes.forEach(function (nome, index) {
  console.log(nome, index);
});

//Callback com Arrow Function
nomes.forEach((nome, index) => {
  console.log(nome, index);
});

//Callback com função externa
function imprimeNome(nome, index) {
  console.log(nome, index);
}

nomes.forEach(imprimeNome);
