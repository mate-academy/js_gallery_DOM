'use strict';

const bigImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const currentImg = link.href;

  e.preventDefault();
  bigImg.setAttribute('src', currentImg);
});
