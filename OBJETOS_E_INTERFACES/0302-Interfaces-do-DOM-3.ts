const links1 = document.querySelectorAll(".link")

// function ativarElementoAchor(elemento: HTMLAnchorElement){//Se eu passar : Element, dará erro no .style, pq n tem em Element
//   elemento.style.color = 'red';
//   elemento.style.border = '2px solid red'
// }

// function ativarElementoButton(elemento: HTMLButtonElement){//Se eu passar : Element, dará erro no .style, pq n tem em Element
//   elemento.style.color = 'red';
//   elemento.style.border = '2px solid red'
// }


// links1.forEach((link) => {
//   //ativarElemento(link);//Deixando assim da erro, porque links1 é um NodeList de Element e eu quero ativar um elemento em algo que recebe um HTMLAnchorElement
//   //Então devo verificar
//   if(link instanceof HTMLAnchorElement){//Não vai pintar nosso button pq ele não é do tipo HTMLAchorElement, é do tipo HTMLButtonElement, então vou criar uma fn para cada Achor e Button Element
//     ativarElementoAchor(link);
//   }
//   if(link instanceof HTMLButtonElement){
  //   ativarElementoButton(link);
//   }
// })

/*
Veja que o codigo anterior fica muito "complicado" então vou ver como funcionar a herança dos meus elementos no Element DOM na documentação
Tanto Achor quanto Button herdam de HTMLElement e HTMLElement possui .style.
*/

function ativarElemento(elemento: HTMLElement){
  elemento.style.color = 'red';
  elemento.style.border = '2px solid red'
}


links1.forEach((link) => {
  if(link instanceof HTMLElement){
   ativarElemento(link);
  }
});

/*
Ou seja, qualquer elemento que esteja manipulando um ELEMENTO do DOM ou algo que
retorne um class para mim, tenho que entender qual classe gerou esse elemento para descobrir
seus métodos e atributos. 
A forma de olhar seria dar um console.dir(link "Passar a classe ou elemento aqui e ir no console la no final para ver o prototype")

ou uma forma não muito oficial que não funciona em todos os browsers console.dir(link.__proto__) São dois underlines.
Se eu continuar botando o proto ele vai dando o próximo elemento que ele herda, etc console.dir(link.__proto__.__proto__.__proto__), etc
e ele vai mostrando suas heranças, o final de todos é null.
*/