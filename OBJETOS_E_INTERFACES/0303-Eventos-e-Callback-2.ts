/*
A palavra this faz referencia ao objeto que foi utilizado para ativar essa fn
. Entao quando to dentro de um método de uma classe, o this vai fazer referencia ao mesmo objeto.

*/
function ativarMenu1(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this.innerText);
}
/*se eu passar somente o console.log(this), vai dar undefined pq to no MODO STRICT, se n tiver ele retorna a raiz que é o windown

pq essa fn ativarMenu1 ta na raiz.*/

/*agora quando essa fn é ativada por um elemento de callback button3?.addEventListener('click', ativarMenu1);
o this vai fazer referencia ao elemento que é responsável pelo evento, nesse caso o 
button3.
Mas o TS da um erro, pq tenho que dizer o que o THIS é, então eu adiciono direto na fn
mas tem que ser sempre o primeiro arumento this: HTMLButtonElement, n preciso passar o valor de this
quando chamar a fn, somente os outros parâmetros.
*/

const button3 = document.querySelector('button');
/*Adicionando o evento 'click' e um callback 'ativarMenu1'*/
button3?.addEventListener('click', ativarMenu1);


/*Uma hora o this pode ser widnow, undefined, entao n ficamos muito certo o que ele pode ser.
Com isso quando quero falar com o elemento que acionou a callback, lidar com o  
event.currentTarget que é o elemtno onde esse evento foi adicionado.

*/

function ativarMenu4(event: Event) {
  const elemento = event.currentTarget;/*Aqui to puxando o elemento button4, mouse no currentTarget vejo que ele pode ser EventTarget | Null 
  Eu sei que o elemento é um button, então se eu quiser utilizar qualquer propriedade do elemento button
  Não vai funcionar, por exemplo elemento.innerText não vai funcionar, pq instancias do tipo EventTarget n possui innerText.
  Então uso o instanceof HTMLElement, n preciso nem passar HTMLButtonElement.
  posso usar tambem (event.currentTarget instanceof HTMLElement)
  */
  if (elemento instanceof HTMLElement) {
    elemento.style.background = 'red';
  }
}

const button4 = document.querySelector('button');
button?.addEventListener('click', ativarMenu4);

window.addEventListener('keydown', ativarMenu)4;
