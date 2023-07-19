"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        console.log(data);
        showProduct(data);
    });
}
fetchProduct();
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
function showProduct(data) {
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
