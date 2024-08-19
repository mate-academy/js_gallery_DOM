'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const current = e.target.closest('.list-item__link');

  mainImage.src = current.href;
});
