//@ts-check
const produtos = [
  {
    nome: 'O Senhor dos Anéis',
    tipo: 'livro',
  },
  {
    nome: 'A Guerra dos Tronos',
    tipo: 'livro',
  },
  {
    nome: 'Dark Souls',
    tipo: 'jogo',
  },
];

function filtrarLivros(dados) {
  return dados.filter((item) => item.tipo === 'livro');
}

console.log(filtrarLivros(produtos));

/*
Se eu não crio um arquivo .TS, possibilidades de eu escrever errado o filter, 
como "filters" vai passar sem dar erro, somente quando executar que vou saber que 
deu um erro. "Dará um erro Is not a function", ou escrevi errado, ou o tipo de dados que to usando o filter, não é o dado certo um ARRAY
Se eu tentar dados.NAOAPARECERÁSUGESTÕESAQUI(). Aparecerá ABC e o nomes dos itens
contidos nesse arquivo, não virá referencias dos objetos que podem ser passados em dados.
Ja que dados que é o parâmetro da FN, da forma que está, pode ser qualquer coisa "ANY".
*/

/*
Se eu após isso o comentário @ts-check, não dará erro, mas marcará o parâmetro DADO,
dizendo que eu poderia dizer qual o tipo desse parâmetro.
Aparecerá os 3 pontos abaixo da palavra dados e item nesse caso, dando uma instrução.
*/