/**exercicio */
// Estado dos elementos

// menu inativo: mudar para
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo: mudar para
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
/******************************************************************************/

const btnMobile = document.getElementById('btn-mobile');/*Pegando o botão através do id */

/*Ja para testar se está funcionando a parte inicial eu ja coloco console.log(event) e testo na aplicação
se esta acontecendo o evento, vejo la no console log. Estando ok, continuo escrevendo minha fn*/
/*
Vejo no HTML os dois elementos que vou modificar, que é o NAV e o BUTTON.
*/
function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;/*Somente para manter a fn limpa e n precisar usar algo de fora "btnMobile",
  eu vou pegar o button aqui outra vez. Como adicionei o evento no button, não precisando selecionar o button novamente
  , vou usar o evento que esta acionando essa FN,ou seja, ""EventTarget"" vou usar o ".currentTarget" para poder
  pegar o proprio elemento quando o evento for ativo. Passando em cima de button, vejo que pode me retornar um possível EventTarget.
  
  */
  const nav = document.getElementById('nav');/*Selecionando o NAV, é um possível HTMLElement ou null*/
  /*adicionando class de ativo no nav -> ""nav?.classList.toggle('active');"" toggle para remover e adicionar o activer, se fosse add no lugar do toggle so adicionaria */
  
  /*Mudando o atributo ARIA ->  button.setAtrribute : Ja da erro pq button pode ser um EventTarget, então vou ter que verificar com instanceof, sendo
  um HTMLElement eu posso definir um atributo "setAttribute"*/
  
  
  if (button instanceof HTMLElement && nav) {//Se button for HTMLElement e nav existir SUBSTITUÍ pelas duas checagens abaixo
    /*Checagens substituidas -> const active = nav?.classList.contains('active');  e  "nav?.classList.toggle('active');" -> To verificando se nav? existe, ou seja, n pode ser null*/
    const active = nav.classList.contains('active');/*Consequentemente com o instanceof e &&nav o active so pode ser valor booleano*/// USando isso aqui para verificar se esta ativo ou não: CONTAINS -> sempre retorna um valor booleando
    /* Para o ATRIBUTO eu não tenho TOGGLE, então vou ter que verificar se o btn ta ativo ou não e se tiver ativo
    add um estado e se n estiver eu add outro.*/
    if (active) {
      /*Ao invés de usar o nav.classList.toggle("active") uso nav.classList.remove('active') e  nav.classList.add('active');;*/
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      nav.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

/*
Para ter esse btn bem responsivo, usando mobile com touch ou desktop com click
vou por o evento de pointerdown. E chamar a callback toggleMenu
*/
btnMobile?.addEventListener('pointerdown', toggleMenu);
