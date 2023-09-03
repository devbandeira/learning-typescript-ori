/*
                            Intersection
Funciona em parte como o extends para Interfaces, mas pode ser utilizado em Types.
*/

type Produto4 = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Carro & Produto4) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});


/*
                          Adicionar Propriedades
É possível adicionar uma propriedade a uma interface/tipo que já definido.
*/

// Com Interface
interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

const dado1: InterfaceCarro = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};

// Com Type
type TipoCarro = {
  rodas: number;
  portas: number;
};

//Não posso criar um outro tipo com o mesmo nome do anterior que estou add.
type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

const dado2: TipoCarroComPreco = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};
