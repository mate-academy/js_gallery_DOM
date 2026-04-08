'use strict';

const mainImg = document.querySelector('#largeImg');
const imgs = document.querySelector('.gallery__list');

imgs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const img = ev.target.closest('.list-item');

  if (!img) {
    return;
  }

  const link = img.querySelector('a');

  mainImg.src = link.href;
});
