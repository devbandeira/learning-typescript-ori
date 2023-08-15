/*Guard, Safety e Narrowing*/

/*Estamos usando typeGuard desde o inicio, com typeof (conferindo os tipos) e
instanceof (verifica se herda de algum construtor) */
function typeGuard(value: any) {
  if (typeof value === 'string') {//Type Safety = Garante a segurança do tipo TIPEOF, seja, se eu verifico que isso com crtz vai ser uma string, o código logo após (DENTRO do corpo) vai ser uma string e vai ser executado
    return value.toLowerCase();//Garantindo o tipo anteriormente, garato que aqui vai ser string e tenho acesso aos métodos e propriedades do tipo string
  /*Esse processo que ocorre é chamado de TPE NARROWING, que é o estreitamento do tipo. Pq a partir de agora,
  Value aqui dentro SÓ PODE SER do tipo STRING, eliminando qualquer outra possibilidade que garante pra gente o TYPE SAFETY*/
  /* return value.toLowerCase(); -> Aqui acontece o control flow, que é um processo itnerno
  que o TS garante esse tipo de dado, para haver o AUTOCOMPLETE com os métodos e atributos */
}
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);

/*                                OPERADOR IN
O operador in verifica se o objeto possui uma propriedade com o mesmo nome da 
string comparada "propriedade" in obj  */
const obj = {
  nome: 'Origamid',
};

//O IN só acontece se 'nome' existir no obj
if ('nome' in obj) {
  console.log('Sim');
}

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}

function handleProduto(data: Produto) {
  if ('preco' in data) {/*Utilizo o TYPE GUARD, pois se a API mudar um nome de uma propriedade, pode ser que em preço por exemplo, na hora da soma eu tente somar algo que esteja UNDEFINED (Existe mas não foi declarado nada nela) somando com 100 e me dará um retorno NaN */
    document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
  }
}

fetchProduto();
