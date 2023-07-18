const frase: string = "Front End";
const preco: number = 500;
const condi = preco > 100;

console.log(typeof document);//retorna tipo object
console.log(typeof {});//retorna tipo object
console.log(typeof []);//retorna tipo object
console.log(typeof null);//retorna tipo object

if (typeof frase === 'string') {
  console.log('frase é string');
}
else (typeof preco === 'number') {
  console.log('preco é number');
}
if (typeof condi === 'boolean') {
  console.log('condi é boolean');
}

//Nao confundir string, number e boolean com String, Number e Boolean, os ultimos são funções construtoras

const frase1 = new String('Front End');//Construtor
const frase2 = String('Front End');//Usando a função construtura como função apenas, retorna uma string
const frase3 = 'Front End';//string pura

console.log(typeof String);// Retorna um type Function
console.log(typeof string);// Retorna um erro, string é um tipo de dado. como se fosse uma variavel. N existe isso em Ts puro
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
