const body = document.querySelector('body');
const main = document.querySelector('main');
const newHeader = document.createElement('h1');
const h1 = newHeader;

main.remove();
body.appendChild(h1);
h1.setAttribute('id', 'victory');
h1.innerHTML = "Marc is the champion";