const clientes = require("./clientes.json");

// prettier-ignore
function filtrarApartamentos(clientes) { // sem complementos
  return clientes.filter((cliente) => {
    // prettier-ignore
    return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")) // verificar se propriedade possui valor
  });
}

const apartamentosFiltrados = filtrarApartamentos(clientes);
console.log(apartamentosFiltrados);
