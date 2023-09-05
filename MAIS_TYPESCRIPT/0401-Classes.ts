/*
                                  Classes
As classes/funções construtoras são responsáveis pela construção de objetos que
já vimos, como MouseEvent, HTMLElement e os demais.
*/

// f HTMLElement()
console.log(document.constructor);

class Produto6 {
  tipo = 'produto';
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

const livro3 = new Produto6('O Senhor dos Anéis');
/*
                                    Modificadores
O TypeScript fornece diversas palavras-chave (Modifiers) que podem ser utilizadas
em propriedades de classes modificar o comportamento/uso das mesmas.
*/

class Produto7 {
  // public: é o padrão de qualquer uma
  // private: só pode ser acessada dentro da classe
  private tipo = 'produto';
  // protected: só pode ser acessada dentro da classe e subclasses
  protected preco: number;
  // readonly: só permite leitura
  readonly nome: string;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.tipo;
    this.preco = preco;
  }
  getTipo() {
    return this.tipo;
  }
  getPreco() {
    return Produto7.transformarPreco(this.preco);
  }
  // [javascript] static: não fará parte do Objeto criado
  // e sim da função construtora (classe)
  static transformarPreco(preco: number) {
    return `R$ ${preco}`;
  }
}

const livro4 = new Produto7('O Senhor dos Aneis', 200);
console.log(livro4.getTipo());
console.log(livro4.getPreco());
console.log(livro4.nome);
console.log(Produto7.transformarPreco(100));
