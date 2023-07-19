"use strict";
//Quando estava com o nome da variavel TOTAL, estava dando erro, pois ele encontrava outra variável TOTAL em outro documento dentro desse projeto
let total1 = 200;
total1 = '300';
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else { //Adiciono o else, pois sem ele, minha função pode retornar um UNDEFINED
        // return 'Não é número';
        return false; //Agora n retorno mais uma string, dando somente um tipo de saída para minha função
    }
}
;
if (isNumber("200")) { //Aqui ele vai executar sem problemas, pois na função anterior ele retorna uma string "Nao e numero", logo isNumber("200") é uma string preenchida, que é igual a TRUE
    console.log("É um numero");
}
// console.log(isNumber("200"));
/*---------------*/
// Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.
// Retorna HTMLButtonElement | null
const button = document.querySelector('button');
// Optional chaining
// Executa click() se button for diferente de null/undefined
button === null || button === void 0 ? void 0 : button.click(); //Optional CHAINING - Um JavaScript mais moderno, ao invés de usar IF ELSE
// if(button){
//   button.click();
// };
