'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (action) => {
  action.preventDefault();

  const item = action.target.closest('.list-item__link');

  const mainImage = document.querySelector('#largeImg');

  mainImage.src = item.href;
});
