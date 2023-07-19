"use strict";
let total2 = 20;
total2 = "30";
function preencherDados(dados
/*{
//preencherDados(dados: {}) passando um obj como parametro e preenchendo o tipo de atributos que vai vir no obj que ela vai receber
// nome: string;
// preco: number;
// teclado: boolean;
}*/
) {
    //utilizando o += para ele adicionar mais um elemento na tela e n sobrepor o que esta
    document.body.innerHTML += ` 
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
  </div>
  `;
}
//Fica muita informacao na minha function preencherdados, tem como eu criar um TYPE com esses dados e passar somente o type como paraemtro
//Apos criar o TYPE
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: false,
};
preencherDados(computador);
// preencherDados({
//   nome: "Computador",
//   preco: 2000,
//   teclado: false,
// });
preencherDados({
    nome: "Notebook",
    preco: 2500,
    teclado: true,
});
