'use strict';

const list = document.querySelector('.gallery__list');
const mainFoto = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();
  mainFoto.src = link.href;
});
