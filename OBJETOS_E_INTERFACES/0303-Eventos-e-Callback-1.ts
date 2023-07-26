const button2 = document.querySelector('button');

/*
A fn de call back e um evento sempre recebe, como  primeiro argumento o evento que ocrreu
"event" e defino qual o tipo desse evento, exitem diversos. Poderia passar somente Event que iria funcionar
que é o evento mais básico possível.
Pondo como :Event qnd eu executar e clicar no btn na tela, posso ver no console log o seu prototype, nesse caso...
Vejo que o EVENTO é um objeto do tipo PointerEvent, que tem como prototipo o MouseEvent, UiEvent e por ultimo Event, e se eu continuar
terá o OBJECT que seria o ultimo prototipo antes de null.
Nesse caso como ta sendo um evento de click, posso ser mais especifico e passar o tipo :MouseEvent que é um prototype válido visto pelo console.log(event) 
*/

/*
Se eu passo PointerEvent no addEventListener (button2?.addEventListener('click', handleClick);) dará erro, pois o TS diz que espera um MouseEvent
o PointerEvent é qualquer evento de qualquer dispositivo, touch, caneta dos dispositivos, etc, mas o TS reclamana.
Para canetinha quando o evento é iniciado quando a caneta bate na tela, passamos o evento button2?.addEventListener('ponterdown', handleClick);
A diferença entre o click e o pointerdown é que o click eu preciso clicar e soltar para o evento acontecer, já o pointerdown o evento acontece a partir
do momento que eu "desço" o touch
*/
/*
Não é legal passar direto event: Event pq ele não vai possuir vários métodos que tem nos
outros tipos de eventos, assim como acontece nas Classes junto com instanceof para utilizar
os métodos das classes.
*/
function handleClick(event: MouseEvent) {
  console.log(event.pageX);
}

//Aqui add um EventListenet no button2 e passamos 2 parametros, o tipo do evento(nesse caso CLICK) e um fn de callback que vai ser chamada quando acontecer o evento
button2?.addEventListener('click', handleClick);//Como ele pode não existir ainda eu uso o OPTIONAL CHAINING/ 

function handleScroll(event: Event) {
  console.log(event);
}

/*
window não é um elemnto HTML é a tela inteira. Posso testar a fn, sem antes passar
o :Event para saber qual é o prototype do evento
*/
window.addEventListener('scroll', handleScroll);


/*
Existem momento que quero passar MouseEvent e TouchEvent e eles são diferentes
então posso utilizar o instanceof.
Então se eu passar event: MouseEvent não iria funcionar para os dois, então
vou passar o PROTOTYPE mais comum que é o Event e funcuinará para os dois, utilizando
o elemento comum entre eles MouseEvent e TouchEvent.
Poderia passar também event: TouchEvent | MouseEvent, mas se eu passar um diferentes,
o pointerdown por exemplo, dará erro, então uso o mais comum entre todos. 
*/

function ativarMenu(event: Event) {
  console.log(event.type);
  if (event instanceof MouseEvent) {
    console.log(event.pageX);//Se eu deixo isso fora do if da erro, pq Event não tem o pageX, etc. Então eu uso instanceof
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
document.documentElement.addEventListener('pointerdown', ativarMenu);
