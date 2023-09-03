// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData


/*OBS -> TARGET é o elemento que disparou o evento - CurrentTarget é o elemento 
que possui o evento*/
interface Window {//Até o momento de todo o código aqui, esse o ponto mais critico, pq o Userdata de inicio pode ser qualquer coisa, o que pode impedir do código executar, ñ vai preencher os dados.
  UserData: any;
}

window.UserData = {};

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === 'object' &&
    ('nome' in obj || 'email' in obj || 'cpf' in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem('UserData');//localStorage.getItem pode ser null, então a primeira coisa que fazemos é checar
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);//É uma string e transformo em OBJ JSON.parse. Lembrando que parse so funciona se o que ele estiver transformando for um JSON valido, uma string simples não pode ser ex.: 'nome'
    //parse recebem @params TEXT - A valid JSON STRING. Vamos criar uma fn para validar isso antes validJSON (isso é JS apenas, para validar o JSON)
    if (isUserData(UserData)) {
      /*Fznd um loop com entries para validar cada valor venda do UserData
      o Object.entries() retorna uma array de array onde tem [[key: value], [nome: 'Alex']] */
      Object.entries(UserData).forEach(([key, value]) => {/*desestruturo no foreach ja que tenho key e value */
        const input = document.getElementById(key);/*Seleciono o INPUT que tem o id com o nome dessa chave */
        if (input instanceof HTMLInputElement) {/*Verifico novamente */
          input.value = value;/*coloco o valor no input*/ /*até aqui o UserData no console ta vazio */
          window.UserData[key] = value;/*entao preencho o UserData aqui */
        }
      });
    }
  }
}

loadLocalStorage();

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;//botando o valor do userData//target.id da erro pw no window estava um valor dif de ANY caso add mais um atribulo na INTERFACE anterior dará erro
    localStorage.setItem('UserData', JSON.stringify(window.UserData));//Problema teve que ser resolvido assim pelo uso do ANY na interface Window//Transforma em string pois no LOCAL STORAGE a KEY recebe o VALUE como OBJECT OBJECT
  }
}

const form = document.querySelector<HTMLElement>('#form');//Dizendo que é do tipo <HTMLElement> para uso do KeyboardEvent n fn handleInput, ja que to pegando o event.target desestruturado
form?.addEventListener('keyup', handleInput);
