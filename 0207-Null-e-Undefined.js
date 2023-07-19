"use strict";
var _a;
const button1 = document.querySelector('button');
const config = localStorage.getItem('config');
/*
Se repararmos em "getItem e querySelector" eles podem retornar null e algo mais,
sempre que formos trabalhar com algo que pode retornar null, devemos verificar se
o elemento existe ou não, com um if por exemplo. CONTROLE DE FLOW
*/
if (button1 !== null) {
    button1.click();
}
if (button1) { //assim é a mesma coisa que o if anterior, se for null retorna false
    button1.click();
}
if (button1)
    button1.click();
button1 === null || button1 === void 0 ? void 0 : button1.click(); //Verifica se for null ou undefined ele não vai continuar
console.log(typeof null);
const jogo = {
    nome: "Ragnarok"
};
const livro = {};
jogo.nome; /*
passar o mouse em cima do "nome", vai mostrar que pode retornar uma string ou undefined.
O ideal e a propria IDE usa o ? OPTIONAL CHAINING, pois ele vai dizer, se for STRING usa o toLowerCase, se for Undefined, não faça
*/
(_a = jogo.nome) === null || _a === void 0 ? void 0 : _a.toLowerCase;
//Tambem não preciso verificar se ele é diferente de undefined, pq undefined é um valor falso, entao posso usar somente a variavel na condicao do if
if (jogo.nome) { // Nao preciso por if(jogo.nome !== undefined)
    jogo.nome.toLowerCase;
}
livro.nome; // Aqui ele n da erro, só vai me dar erro quando eu for fazer alguma operacao com livro.nome, pois n sabe se é string ou undefined
/*
EXISTE UMA CONDIÇÃO CHAMADA "strictNullChecks". É responsável de retornar um erro para nós
caso não verifique que um valor é null ou undefined.
ELA JA ESTA INCLUSA DENTRO DO MODO "STRICT": TRUE
"strictNullChecks": false é o modo padrão do TYPESCRITP
*/ 
