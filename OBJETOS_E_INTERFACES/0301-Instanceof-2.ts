class Produto3 {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Livro3 extends Produto3 {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo3 extends Produto3 {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === 'O Hobbit') {
    return new Livro3('O Hobbit', 'J. R. R. Tolkien');
  }
  if (busca === 'Dark Souls') {
    return new Jogo3('Dark Souls', 1);
  }
  return null;
}

const produto1 = buscarProduto('O Hobbit');
const produto2 = buscarProduto('Dark Souls');

if (produto1 instanceof Produto3) {
  produto1.nome;
}
if (produto2 instanceof Produto3) {
  produto2.nome;
}
