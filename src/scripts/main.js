'use strict';

const imgLarge = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item__link');

for (const link of links) {
  link.addEventListener('click', (ev) => {
    const clickedImg = ev.target.closest('.list-item__link');

    imgLarge.src = clickedImg.href;

    ev.preventDefault();
  });
}
