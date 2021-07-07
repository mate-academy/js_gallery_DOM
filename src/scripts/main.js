'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.gallery__thumb');

  if (!item || !thumbs.contains(item)) {
    return;
  }
  mainImage.src = e.target.closest('.list-item__link').href;
});
