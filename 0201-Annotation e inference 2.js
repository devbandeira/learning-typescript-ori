"use strict";
const input = document.querySelector("input"); //Pode existir ou n, por isso usar if
const total = localStorage.getItem("total"); //Pode existir ou n, por isso usar if
if (input && total) {
    input.value = total; //se eu for para uma outra pg que n tenho input, daria erro em toda aplicação
    calcularGanho(Number(input.value)); //Assim que eu mudo na minha linha 10 o tipo de value, devo passar o input.value que recebe uma string
}
function calcularGanho(value) {
    const p = document.querySelector("p"); //Para saber se P existe, eu uso if. Como é algo que ele procura na Página, devo verificar isso
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        /*comentando o const value pq n posso passar um Number aqui ja no TS*/
        //const value = Number(input.value);//Number(String) ou +(String) Transformando em number//input aqui pode ser null tbm, entao verifico se existe com if
        localStorage.setItem("total", input.value); //O value que passei aqui eu transformei para numero,as o setItem recebe uma String como segundo argumento. Ao inves de passar somente a variavel Value que a transformou para number, passo direto o input.value
        calcularGanho(Number(input.value)); //Passando direto o input transformando em Number para a função receber
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
