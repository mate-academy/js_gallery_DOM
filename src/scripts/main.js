'use strict';

const list = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link')?.href;

  if (link) {
    mainImage.src = link;
  }
});
