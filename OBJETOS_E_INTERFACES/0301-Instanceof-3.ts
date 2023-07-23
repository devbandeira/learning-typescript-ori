const link = document.getElementById('origamid');

//if(link){
  //console.log(link);//pode retornar um html ou o objeto DOM
  //uma forma dele sempre tornar o objeto dom é usando dir
  //console.dir(link);//assim que aparecer no console desço até o fim e acho o PROTOTYPE: que é a classe utilizada ou funcao construtora que foi utilziada para criar esse objeto, com todas as propriedades e metodos. Veremos que foi criado pelo HTMLAnchorElement
  /*quando uso link.heref ele nAo me da pq href é um atributo especifico de HTMLAnchorElement e na minha constante
  link o getElementById retorna um HTMLElement, ou seja, retorna qualquer tipo de HTML que tenha o ID apontado,
  um html genérico*/
  //Ou seja, o LInk é HTMLElement e também um HTMLAnchorElement e para resolver este problema eu uso o " instanceof "
  //link.href
//}

/**fazendo da forma correta para ter o método href após o link."..." */

if(link instanceof HTMLAnchorElement){
  //link.href = "https://www.origamid.com";, método valido, mas se eu mudar o link, ele vai mudar e dará erro

  link.href = link.href.replace("http://", "https://");// qualquer coisa que eu modificar em link, ele vai mudar para o HTTPS

};