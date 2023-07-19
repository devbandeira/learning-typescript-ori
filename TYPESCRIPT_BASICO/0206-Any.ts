//Evitar se usar ANY, pois usar ANY é a mesma coisa de não usar TS. Todo erro que seria evitado com TS não será.
/*
Não me da surgestoes de métodos quando uso o ". logo após o parametro", 
pois ele não vai saber que tipo é, se é string, number. Para poder utilzar seus 
métodos.
*/

/*
Se eu não explicitar um ANY, ele vai considerar como ANY, mas vai dar erro, 
não me permitindo fazer assim. Devido o MODO STRICT que configurei no tsconfig.json,
se eu pode la "noImplicitAny": false ele vai permitir sem declarar any
*/
function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}

/*
Passando um ou outro, ele não da erro de TS, somente na compilação do código 
que ele acusa erro, pois na segunda chamada ele usa um number, utilizando um 
método que é aplicavel para string e não number.
*/
normalizar(' DeSIGN');
normalizar(200);

/*
Uma forma de usar o ANY é quando fazemos um fetch em uma API e não sabemos
o que ela pode retornar. Geralmente quando usar response.jason(Aqui Vira um Any)
e automaticamente sua variável será um do tipo ANY
*/