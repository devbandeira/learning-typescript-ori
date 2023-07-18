/*Interface vai funcionar na maioria das vezes como Type, tem sintaxe diferente. 
São geralemnte utilizadas para definirmos objetos*/

/*Por agora vamos utilizar: Types para tipos primitivos e 
Interfaces para OBJETOS */

/**Se reparar a diferença entre eles será que o types possui o simbolo = */

/*type NumberOrString = string | number; //Aqui eu só consigo usar type, pois interface eu teria que abrir um objeto e o objeto recebe o nome da propriedade*/
/*interface NumberOrString {string | number}; //Dara erro pois n defini o nome da propriedade*/

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}