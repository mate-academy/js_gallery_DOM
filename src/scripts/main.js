'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  e.preventDefault();
  mainImage.src = link.href;
});
