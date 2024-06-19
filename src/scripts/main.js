'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const mainImage = document.getElementById('largeImg');

  mainImage.src = link.href;
});
