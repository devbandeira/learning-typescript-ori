// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number { 
  if (typeof valor === 'number') {
    return Math.ceil(valor);
  } else {
    return Math.ceil(Number(valor)).toString();
  }
}
/*Se eu não tenho function OVERLOAD, eu não conseguiria usar os métodos de 
string e number em cada chamada. Se tiver somente a função, na hora que é chamada,
ela não sabe o que será o retorno, pois ela pode receber number | string, sem overload
ela não sabe o retorno, porque automaticamente pode retornar number | string, só
saberá depois de executar o codigo e for compilado para JS. Então utilizando OVERLOAD
resolvemos isso da melhor forma.*/
console.log(arredondar(200.32));
console.log(arredondar('200.32'));
