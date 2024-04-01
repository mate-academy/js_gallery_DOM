'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const otherImgs = document.querySelector('.gallery__list');

otherImgs.addEventListener('click', (el) => {
  el.preventDefault();

  const someImg = el.target.closest('a');

  if (!someImg) {
    return;
  }

  mainImg.src = someImg.href;
});
