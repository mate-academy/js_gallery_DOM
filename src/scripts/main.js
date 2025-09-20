'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImg = document.getElementById('largeImg');

gallery.addEventListener('click', (fact) => {
  const item = fact.target.closest('.list-item__link');

  if (!item) {
    return null;
  }

  fact.preventDefault();

  mainImg.src = item.href;
});
