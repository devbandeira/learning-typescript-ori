function somar(a: number, b: number, c?: number): number {/*c? significa que é um parâmetro opcional */
  return a + b + (c ? c : 0);/*Como passei o C? opcional, ele pode ser undefined, então devo checar antes de realizar algo (c ? c : 0) */
}
somar(3, 4);
somar(3, 4, 1);

const subtrair = (a: number, b: number): number => a - b;

subtrair(10, 2);

/*Terceira forma de declarar é realmente definindo um TIPO.*/
type Callback = (event: MouseEvent) => void; /* No momento ela só é um tipo, não é uma FN no momento */


/******************************* void **************************************** */

/*No JS uma FN sem retornar nada, sempre retorna UNDEFINED */

/*Qualquer função que não vá retornar NADA aqui no TS devemos dizer que ela RETORNA VOID */

function pintarTela(cor: string): void {/*Dai declaro void, ja que n retorna */
  document.body.style.background = cor;
}

pintarTela('black');

// Erro, void não pode ser verificado
if (pintarTela('black')) {
  console.log("Pintou a tela")/*nunca vai printar pq pintarTela, não retorna nada, ou seja, é undefined. Função sem retorno n se faz uma verificação booleana*/
}

const btn = document.querySelector('button');

// Erro, void não pode ser verificado
if (btn && btn.click()) {/*efeito de click não retorna nada aqui*/
}

// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value: any) {
  if (typeof value === 'string') {
    return true;
  }
}

if (isString('teste')) {
  console.log('É string');
}
