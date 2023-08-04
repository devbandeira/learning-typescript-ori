// Exemplo 1
function retorno<Tipo>(a: Tipo): Tipo {
  return a;
}

retorno('A Game').charAt(0);
// retorno<string>(a: string): string

retorno(200).toFixed();
// retorno<number>(a: number): number

// Exemplo 2
// function firstFive<Tipo>/*aqui é o tipo, n passo <tipo[]>*/(lista: Tipo[]/*Aqui é o que ele recebe */): Tipo[]/*Aqui é o que ela retorna, pode ser implicito*/ */ {//dessa forma ela recebe qualquer tipo de array e retorna os 5 primeiros
//   return lista.slice(0, 5);
// }
function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
    return lista.slice(0, 5);
}

const numeros5 = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];

const five1 = firstFive<number>(numeros5);
const five2 = firstFive<string>(frutas);//Posso usar os métodos de string .map, etc

// Exemplo 3
function notNull<Tipo>(arg: Tipo) {//Se eu passar ANY, ele para de completar os métodos, pq ele não reconhece o que vai retornar.
  if (arg !== null) return arg;
  else return null;
}

notNull(200)?.toFixed();
notNull('André')?.toLowerCase();

// Exemplo 4
/*dado: T vai ser genérico pois ele pode receber diferentes tipos, e o tipo: string, vai ser string pq o typeof retorna uma string */
function tipoDado<T>(a: T): { dado: T; tipo: string } {/*Para ser explicito o que ele ta retornando, eu tenho que passar um objeto {} */
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true);
