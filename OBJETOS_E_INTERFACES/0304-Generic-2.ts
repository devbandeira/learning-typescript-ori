// Exemplo 1
/*Utilizando generic para retornar somente certos tipos de dados, FALANDO o que nosso tipo EXTENDE */
function extractText<Tipo extends HTMLElement>(el: Tipo): string {
  return el.innerText;
}
function extractText<Tipo>(el: Tipo): string {
  return {
    texto: el.innerText,//Dessa forma ele da erro no inner, pq ele não sabe mais que el é do tipo HTMLAnchorElement, para resolver isso, uso o extends. Assim ele vai saber que o el, tem que herdar todas as propriedades do HTMLElement
  /*fazendo o extends, agora quando eu passar ele dentro do IF, ele vai saber que é um HTMLAnchorElement  */
    el,
};
}

const link3 = document.querySelector('a');

if (link3) {
  console.log(extractText(link3));
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

// Exemplo 2
/*Imitando uma função parecido com a querySelector igual o JQuery utiliza $() */
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const link = $<HTMLAnchorElement>('a')?.href;


/**métodoss */

// Define que o retorno será um HTMLAnchorElement
const link = document.querySelector<HTMLAnchorElement>('.link');//Devo tomar cuidado, pois se eu passar HTMLVideoElement, mas na verdade o retorno é HTMLAchorElement, posso quebrar a aplicação tentando utilizar as funções de video
link?.href;

async function getData<T>(url: string): Promise<T> {/*Retorna uma promessa, pq o meu fetch pode retornar qualquer coisa  */
  const response = await fetch(url);
  return await response.json();
}

/*Para resolver o problema do retorno do FETCH onde o retorno é uma Promissa<t>, defino o tipo do objeto*/
interface Notebook {
  nome: string;
}

/*O tipo eu posso passar direto quando chamo a função getData<Notebook>, ao inves de passar na fn getData<Notebook>, deixando ela mais genérica getData<t> */
async function handleData() {
  const notebook = await getData<Notebook>(
    'https://api.origamid.dev/json/notebook.json',
  );
  console.log(notebook.nome);
}
