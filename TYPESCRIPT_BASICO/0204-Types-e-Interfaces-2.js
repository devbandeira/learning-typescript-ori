"use strict";
/*Interface vai funcionar na maioria das vezes como Type, tem sintaxe diferente.
São geralemnte utilizadas para definirmos objetos*/
function preencherDados1(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
