// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const mainNode = body.querySelector('main');
console.log(mainNode);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
console.log(body);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const thirdLi = p.closest('main').querySelectorAll('li')[2];
console.log(thirdLi);