'use strict';

const ul = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const li = e.target.closest('.list-item__link');

  mainImage.src = li.href;
});
