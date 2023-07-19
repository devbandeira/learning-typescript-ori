"use strict";
const numeros = [10, 30, 40, 5, 3, 30]; //Se eu passo o mouse em cima do nome da variável ele ja me diz que é um array de number
const valores = [10, 'Taxas', 40, 'Produto', 3, 30]; //Com o mouse diz que pode ser uma array de number e strings
function maiorQue10(data) {
    return data.filter((n) => n > 10); //Como por exemplo o data.filter(). ainda ganho os beneficios dele já dizer que o meu N é um número, pois a array passada foi uma array de número
}
maiorQue10(numeros);
function filtrarValores(data) {
    return data.filter((item) => typeof item === 'number');
}
filtrarValores(valores);
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120],
];
/*Posso usar também outra métodologia onde passo o tipo de array para função
onde Array é uma interface e eu passo o tipo.
Array<number>, Array<number | string> ... Desta forma, ao invés de usar number[].
*/ 
