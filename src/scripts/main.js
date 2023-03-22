'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  mainImage.src = item.href;
});
