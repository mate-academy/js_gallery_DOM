'use strict';

const mainImg = document.querySelector('#largeImg');
const imgs = document.querySelector('.gallery__list');

imgs.addEventListener('click', (ev) => {
  ev.preventDefault();

  const img = ev.target.closest('.list-item');
  const link = img.querySelector('a');

  if (!img) {
    return;
  }

  mainImg.src = link.href;
});
