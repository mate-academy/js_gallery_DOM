'use strict';

const bigImg = document.getElementById('largeImg');
const galery = document.querySelector('.gallery__list');

galery.addEventListener('click', (e) => {
  const img = e.target.closest('.list-item__link');

  if (!img) {
    return;
  }
  e.preventDefault();
  bigImg.src = img.href;
});
