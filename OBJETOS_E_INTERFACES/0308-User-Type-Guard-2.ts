/*
O Type Predicate pode ser especialmente utilizado para criarmos Type Guards 
para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
*/
async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}
/*se eu passar dentro do handleProduto('teste') 
La na minha fn isProduto dará erro, pois eu estaria verificando se "nome in value" e value nesse caso é uma
string 'teste', ou seja, nome não existe nessa string que é recebida
Se fosse um Objeto ou Array, não daria problema.
Então para não aocntecer esse erro RUMTIME, eu verifico também se VALUE: unknown é um objeto.
typeof === 'object', lembrando que object pode ser NULL tbm, mas veirificando se value existe anteriomente
eu já elimino essa possíbilidade.
*/

fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

/*
Se no lugar de unknown eu passo direto o tipo Produto, ele vai me deixar usar 
os métodos, etc. Mas se na API por ventura mudar algo que me retorne outra coisa,
 ele poderá não receber o mesmo tipo de retorno da API, podendo ser outro OBJETO
*/
/*Ou seja, VALUE is PRODUTO (esotu dizendo que se retornar true, ele vai ser Produto)
Após dizer isso para o TS, eu devo garantir com os TYPE GUARDS de fazer as validações corretas
para que não haja erro.
*/
function isProduto(value: unknown): value is Produto {//Como eu fiz o TYPE PREDICATE aqui, estou garantindo que se ele for TRUE, ele vai ser do tipo Produto. Fazendo essa fn ser BOOLEANA
 //Verificando se VALUE existe (VALUE), já elimina undefined e null
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&/*não esta 100% garantido, pq nome pode ser number, então nao ta cobrindo tudo, mas na minha interface eu ja disse que é string, entáo na handleProduto eu consigo acessar os métodos de uma String */
    'preco' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data);//data.toLlowerCase. Ou posso verificar aqui se o typeof === string
  }
}

/*
 if (typeof data.nome === "nstring") {
    console.log(data.toLlowerCase);
   }
*/