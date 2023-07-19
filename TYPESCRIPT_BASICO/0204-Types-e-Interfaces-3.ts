async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();
/*Otimizando a interface criada, temos 2 objetos com estruturas iguais. empresaFabricante e empresaMontadora */

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}
interface DataProduct {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidente: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

// interface DataProduct {
//   nome: string;
//   preco: number;
//   descricao: string;
//   garantia: string;
//   seguroAcidente: boolean;
//   empresaFabricante: {
//     fundacao: number;
//     nome: string;
//     pais: string;
//   };
//   empresaMontadora: {
//     fundacao: number;
//     nome: string;
//     pais: string;
//   }
// }


function showProduct(data: DataProduct) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <div>
        <h3> ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
      <h3> ${data.empresaMontadora.nome}</h3>
    </div>
    </div>
  `;
}

