class Produto1 { //Declarando uma classe em JS

  //propriedades que a classe possui, definindo o tipo usando TS da forma mais simples do TS
  nome: string;
  preco: number;

  constructor (nome1: string, preco: number){//Definir o tipo do parametro é TS o restante pra tras ainda é JS. Posso por interrogacao para deixar opcionarl nome?: string
    this.nome = nome1;
    this.preco = preco;
  };

  //método
  precoReal(){
    return `R$ ${this.preco}`;
  };
};

const livro1 = new Produto1("A Guerra dos tronos", 200);

console.log(livro1.nome)

/*instanceof é mais uma palavra de JS, que verifica se o objeto instanciado
é do tipo de determinada classe, retorna true or false.
*/
console.log(livro1 instanceof Produto1);//Retorna true

class Livro {
  autor: string;
  constructor (autor: string){
    this.autor = autor;
  }
}


class Jogo {
  jogadores: number;
  constructor (jogadores: number){
    this.jogadores = jogadores;
  }
}

//funcao que pode retornar livros ou jogadores

function buscarProduto(busca: string){
  if(busca === "o hobit"){
    return new Livro("J. R. R. Tolkien")
  }
  if(busca === "Dark Souls"){
    return new Jogo(1);
  }

  return null;
}

/*
Depois da fn buscarProduto() estiver pronta, se eu por o mouse em cima, posso ver
que ela retona Livro | Jogo | null
*/

const produto = buscarProduto("O Hobbit");//TS só verifica a construção dessa funcao, mas ele não sabe o que é, pq o JS n esta sendo executado aqui

//produto. //Se eu por "." ele vai dar erro, pq ele não sabe o que é e pode ser null
//produto?.autor //Se eu boto autor, ele ainda não sabe que isso é um livro ou um Jogo

/*Então eu uso o instanceof */

if(produto instanceof Livro){//Quando eu uso o if com o instanceof, ele vai me da as unicas possíbilidade da classe Livro
  console.log(produto.autor);//entao quando boto o ".", ele ja me da a opcao AUTOR que ta na class livro
  //pois ele verifica antes que tipo aquela instancia é.
}

//Se eu tivesse passado "Dark Souls" no lugar do "O Hobbit, console.log(produto.autor); n seria executado"

//Geralmente pensamos: PORQUE N CRIAR UMA FUNCAO QUE RETORNA UM TIPO DE DADO SOMENTE
//A questao  e mais qnd utilizamos funcoes que ja existam ai
//Ex.: querySelector pode retornar varios tipos de objetos diferentes, como pode retornar um video, uma ancora e varios outros