const form = document.getElementById("formulario");
const nomes = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaContato();
  atualizaContato();
});

function adicionaContato() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroContato = document.getElementById("num-contato");

  if (nomes.includes(inputNomeContato.value)) {
    alert(`O contato: ${inputNomeContato.value} já está na agenda!`);
  } else {
    nomes.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNomeContato.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}

function atualizaContato() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
