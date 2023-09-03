/*
                        Destructuring
Durante a desestruturação de objetos, podemos indicar o tipo de dado com a 
sintaxe: { key1, key2 }: { key1: type1; key2: type2; }
*/

const { body }: { body: HTMLElement } = document;
/*
No caso ele ta pegando a propriedade body do document.body
e ja colocando desestruturando {body} e logo em seguida
dizendo seu tipo : { body: HTMLElement}
*/

//Puxando somente o nome e o preco direto do handleData
function handleData({ nome, preco }: { nome: string; preco: number }) {
  nome.includes('book');
  preco.toFixed();
}

handleData({
  nome: 'Notebook',
  preco: 2000,
});

/*
                                Conhecer os Dados
Durante a desestruturação é necessário indicar o tipo exato do dado esperado 
pelo TypeScript. Ex: um currentTarget pode ser EventTarget | null.
*/