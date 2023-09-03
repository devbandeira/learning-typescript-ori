//vai ser utilizado bem pouco durante o curso, talvez nunca
/*
Type Assertions -> Utilizaremos a palavra AS para dizer o tipo de dado , praticamente
afirmamos que o dado é de tal tipo. Assim o TS confia em nós e deixa utilizarmos
os métodos daquele tipo de dado definido através do AS.
*/

/*
Não é muito indicado usar o AS ela perde o TYPE SAFETY, mesma coisa de ter um carro blindado e andar de
janela aberta.
*/
const video = document.querySelector('.player') as HTMLVideoElement;
/*
erro runtime, não existe volume de null. Pois não tem ainda no meu HTML, mas ele permite
que eu use o  .volume, porque eu afirmei qu ele é um HTMLVideoElement, então
nem NULL ele vai assumir no TS, no runtime dará erro quando executado em JS.
Se tiver um elemento tag A no HTML, ele aceitará, mas retornará UNDEFINED
*/
video.volume;

// erro TS, possíveis dados devem ser compatíveis com Element | null
/*Não permite que eu diga que é uma STRING pq ele tem que herdar de acordo com o
que o querySelector herda, Element | Null, const link = document.querySelector('.link') */
const link = document.querySelector('.link') as string;



//********************/

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;/*Não posso passar o as Produto
  devido response.json() retorna uma Promise e não retornar um ANY, então passo
  como uma promise<produto>*/
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}

async function handleProduto2() {
  const produto = (await fetchProduto()) as Produto;//Poderia passar assim, ou como estã na FN fetchProduto e exluir o as daqui
  produto.nome;
}

async function handleProduto3() {
  const produto = await fetchProduto();
  (produto as Produto).nome; //forma menos indicada ainda.
  //isso n é JS valido, ele vai remover tudo isso, quando for compilado
}

//**************************************
//             ! non-null operator

/*Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, 
pois pode levar a erros no runtime. Use apenas se tiver certeza.
Esse é um operador de TS !. e não de JS como o ?.. Durante a compilação ele será
removido.
*/

/*Tomar cuidado ao usar o !, pois pode gerar erros quando compilado. */
const video = document.querySelector('video')!;
// erro runtime, não existe volume de null
video.volume;

/*
A partir do momento que vc diz que o elemento não tem a possíbilidade de ser null
você afirma que ele existe, e se ele não existir você quebra o código e da erro
de RUNTIME quando for copilado
*/

// erro runtime, não tendo a TAG a no HTML
document.querySelector('a')!.href = 'https://www.origamid.com';

//OUTRAS SINTAXES
const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('.player');//Dizendo ou antes <HTMLVideoElement>
const video3 = document.querySelector<HTMLVideoElement>('.player');// ou após a fn <HTMLVideoElement>
const video4 = document.querySelector('.player');

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume;