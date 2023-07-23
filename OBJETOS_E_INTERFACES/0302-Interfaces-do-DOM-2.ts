const links = document.querySelectorAll('.link');//Passando o mouse verei que ele retorna um NodeListOf<element>
console.log(links instanceof NodeList);

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  } else {
    console.log(typeof link);
  }
});

// erro, filter é um método de Array e não de NodeList
// const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);

// Funciona, pois a NodeList foi transformada em uma Array
const anchorLinks = Array.from(links).filter(
  (link) => link instanceof HTMLAnchorElement,
);
