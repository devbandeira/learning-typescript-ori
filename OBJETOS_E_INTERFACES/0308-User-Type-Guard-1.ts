/*
Uma array não pode ser verificada com o typeof pois a mesma é um object. 
Podemos verificar usando TYPE GUARD se o dado é instanceof Array ou usar a função Array.isArray(). 
*/

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  if (Array.isArray(data)) {//Se eu passar o mouse em cima vejo que aparece "args is any", isso pode me dar erro, pois isArray é um método JS e o TS não executa TS, somente após compilação que o JS é executado que vou ver que deu ruim para isso usamos o Type Guard "args is algumTipo"
    console.log('É array');
  }
}

/*
Esse problema citado anteriormente, que não é um grande problema é resolvido
com TYPE PREDICATE, é uma função que PREDIZ qual é o tipo do dado que é passado dentro dela.
Como TS não executa JS, não tem como ele saber se o isArray é TRUE ou FALSE.
Então precisamos de uma forma que diz  QUANDO ESSA FUNÇÃO FOR EXECUTADA, ELA VAI SER
UMA FUNÇÃO BOOLEANA. E ela vai retornar TRUE ou FALSO para o TIPO de dado que for 
passado na função (data: unknown), ela vai fazer uma verificação de tipo de dado.
Verifica se ele realmente é o que to falando ou não, o TS então não precisarã ativar
a função no momento da leitura, mas vai saber que se eu passei IF e passei a função,
isso vai ser TRUE ou FALSE, e se for TRUE signfica que o valor do DATA será o valor que usei o 
TYPE PREDICATE, ou seja, será string (value is string) e me permitirá usar os métodos de string relacionado ao dado.
 */

//criando uma função que lida com strings
function isString(value: unknown): value is string{
  return typeof value === 'string';
}

function handleData(data: unknown){
  if(isString(data)){
    data.toLowerCase;//até aqui da erro no data, pq ele diz que data é unknown, pq TS não executa a função. ele n sabe o que retorna dentro dela
  }
}

/*agora com o TYPE PREDICATE eu posso passar na minha fn isString, avisando que
value is string (value é string).
A partir do momento que eu boto "IS", essa funçao é BOOLEANA, tem que retornar
TRUE ou FALSE. O IS quer dizer que essa função retorna TRUE se o valor passado nessa função
for um STRING.
Ou seja, agora tenho garantia que se o valor que eu passar for uma stirng isso
"isString(data)" será TRUE. Então eu poderei usar os métodos e propriedades de uma string.
Ele não ta executando a função isString(), mas ele consegue me garantir que se o que for passado for uma string
o retorno será TRUE e então poderá utilizar os métodos de string. CONSEGUE PREVER O FUTURO.

MUITO CUIDADO, eu poderia colocar "return typeof value === 'number'; Ele não ta executando a fn
então ele não sabe se o que botei aqui eu fiz certo. ENTÃO TENHO QEU GARANTIR QUE O MEU TYPE GUARD
CRIADA POR MIM ESTÁ CORRETO!!"

E DEPOIS QUE EU POR IS a função tem que ser BOOLEAN,
se eu por acabo por somente "if(typeof value === "string"){retun true} -> Vai dar erro pq ela vai poder ser TRUE e UNDEFINED

*/
