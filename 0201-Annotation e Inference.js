"use strict";
var produto = "Livro";
var preco = 200;
/*Para tipar um objeto, após dois pontos: eu tipo os atributos que estarão após
o sinal de = */
const carro = {
    marca: "Audi",
    portas: 5
};
//Se eu tentar por um number na string, me dará erro
//carro.marca = 30; Se eu escrever marcaS dará erro tbm devido digitar errado
/*------------------------------*/
/*Se eu nao quiser passar o tipo, aqui no TS. ainda sim ele vai TIPAR aquela variável, a partir do momento que ele
conseguir inferir isso.

Ex.:
const carro = {
  marca: "Audi",
  portas: 5
}
carro.marca = 5; //Ainda sim dará erro
*/
const barato = 200 < 400 ? true : "produto caro";
/*nesse caso o TS fará a leitura dele antes de ser compilado no browser e sabe que ele pode assumir somente 2 valores
BOOLEAN(true) ou STRING(Produto caro)
Se eu tipar dizendo que barato é um BOOLEAN, dará erro, pq ele também pode ser uma string,
mesmo a condição sendo TRUE sempre.

Então eu devo dizer que ele será boolean | string
const barato:boolean | string = 200 < 400 ? true : "produto caro";
*/
function somar(a, b) {
    return a + b;
}
somar(4, 3);
/*Quando bota o mouse em cima de somar, diz o que ele recebe e retorna

function somar(a: number, b: number): number (retorna um number)
*/
// -> Posso dizer também o que a função vai retornar
function somar(a, b) {
    return a + b;
}
/*------------------------------------------ */
const nintendo = {
    nome: "Nintendo",
    preco: "2000"
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
