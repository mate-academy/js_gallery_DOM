'use strict';

const mainImg = document.querySelector('#largeImg');
const imgs = document.querySelectorAll('.list-item__link');

for (const img of imgs) {
  img.addEventListener('click', (ev) => {
    ev.preventDefault();
    mainImg.src = img.href;
  });
}
