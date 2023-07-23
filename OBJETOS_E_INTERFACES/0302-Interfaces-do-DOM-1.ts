//O objeto que é retornado com o querySelector depende da stirng que passamos nele
document.querySelector('video'); // HTMLVideoElement -> ele sabe que vai retornar um HTML do tipo video HTMLVideoElement, pq só tem o DOm de vídeo
document.querySelector('img'); // HTMLImageElement -> Ele sabe que vai retornar um HTMLImageElement
//Para saber os POSSIVEIS OBJETOS QUE O DOM pode RETORNAR, deve ser visto a documentação https://developer.mozilla.org/en-US/docs/Web/API
const link1 = document.querySelector('a'); // HTMLAnchorElement
const link2 = document.querySelector('#origamid'); // Element

link1?.href;
//link2?.href; // erro no ts -> Pois como vem através de um ID, é um nome que eu dou e por ser retornado qualquer coisa SVGAElement, etc..Diferente do elemento que eu desejo

//A forma mais segura de usar querySelector, etc com TS é utilizando o if para verificar com o instanceof, as vezes pode ser retornado diversos outros tipos
//if(video instanceof HTMLVideoElement){}