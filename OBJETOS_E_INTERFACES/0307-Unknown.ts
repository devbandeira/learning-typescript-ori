/*unknown indica que não sabemos que tipo de dados vai ser passado na nossa fn
A diferença entre NUll é que unknown não vai assumir nada do que esse tipo pode ser.
Então para utilizar qualquer método de um tipo, eu vou ter que usar um Type Guard para utilizar o método
de cada tipo que pode ser recebido.
 */

/*
se estiver function typeGuard(value: any) { value.toUppercase()}, não dará nenhuma problema
no primeiro momento e se eu passar uma string, como to usando um método de string
vai funcionar sem nenhum erro pra mim. Se eu passar um numero, dai ele ja em da um erro
de runtime.
*/

/*
com unknown eu consigo passar qualquer coisa, mas se eu não verificar antes,
usando type guard, não vai funcionar o que ta dentro da função, apesar de deixar eu
passar qualquer tipo para a função
Ex.: function typeGuard(value: unknown) {return value.toLowerCase();}, no value dará erro 
mas deixa eu passar qualquer coisa, como:  
typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
*/

/*ENTÃO VAMOS UTILIZAR MUITO MAIS O UNKNOWN DO QUE O ANY, PQ O ANY PERTE TODO 
TYPE SAFE, DEIXANDO EU ESCREVER/UTILIZAR UM MÉTODO MESMO SEM SABER O TIPO PASSADO,
JÁ O UNKNOWN N PERMITE
 */
function typeGuard(value: unknown) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
