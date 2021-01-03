'use strict';

const links = [...document.querySelectorAll('.list-item__link')];
const display = document.querySelector('#largeImg');

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    display.src = e.currentTarget.href;
  });
}
