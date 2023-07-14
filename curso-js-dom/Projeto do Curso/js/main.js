const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector(".controle-contador");

  if (operacao === "-") {
    peca.value = Number(peca.value) - 1;
  } else {
    peca.value = Number(peca.value) + 1;
  }
}

// const robotron = document.querySelector("#robotron");
// // função anônima dentro do event listener
// robotron.addEventListener("click", function () {
//   console.log("Cliquei no robo!");
// });

// // arrow function
// robotron.addEventListener("click", () => {
//   console.log("Cliquei no robo com arrow function!");
// });

// // função nomeada - declaração de função
// function sayHello(nome) {
//   console.log(`${nome}, bem-vindo ao Robotron 2000!`);
// }

// sayHello("Pedro");
