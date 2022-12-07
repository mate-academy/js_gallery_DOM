'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const image = e.target.closest('.list-item');

  if (!image) {
    return;
  }

  largeImg.setAttribute('src', image.children[0].href);
});
