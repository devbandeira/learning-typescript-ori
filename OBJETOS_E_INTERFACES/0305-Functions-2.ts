/* ****NEVEr**** */
function abortar(mensagem: string): never {/*Never é usado em casos bem especificos que abortam minha função, gera um erro e aborta*/
  throw new Error(mensagem);
}

abortar('Um erro ocorreu');
console.log('Tente novamente');/*Não roda pq o código anterior joga um erro, usando never. Ja fica OPACO pq ta retornando um erro :Never*/

/* ****MÉTODO**** */
//Método na interface
interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {
}


/* **** OVERLOAD (SOBRECARGA) **** */

// Exemplo 1
/*Os overloads tem que estar acima da definição da nossa Função*/
function normalizar(valor: string): string;//Se essa fn receber em algum momento uma string, ela só pode retornar uma string
function normalizar(valor: string[]): string[];//Se essa fn receber em algum momento uma array, ela só pode retornar uma array
function normalizar(valor: string | string[]): string | string[] {//aqui ainda retorna os dois tipos quando chamo a fn, o que não me permite usar os métodos referentes a cada tipo, como o trim().toLowerCase()
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

normalizar(" Produto ");//Sem o OVERLOAD, se eu verifico a itnerface dessa chamada, ela diz que pode retornar ou string ou array de string. Com o overload quando passo o tipo, ele só retorna o tipo que tem no overload(SOBRECARGA)
normalizar(["Banana ", " UVA"]);//Se tivesse .map normalizar(["Banana ", " UVA"].map), após a array, sem o OVERLOAD ele não permitiria usar, eu teria que fazer um if para validar novamente, com o overload ele permite ja utilizar os métodos de cada classe ou tipo

// Exemplo 2
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "div"): HTMLDivElement | null;
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
