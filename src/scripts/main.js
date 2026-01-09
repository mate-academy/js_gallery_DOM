'use strict';

const list = document.querySelector('.gallery__list');

const mainImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (action) => {
  const link = action.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  action.preventDefault();

  mainImage.src = link.href;
});
