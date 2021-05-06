'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (occurrent) => {
  occurrent.preventDefault();

  const item = occurrent.target;

  if (!item.classList.contains('list-item__link')
  && !item.classList.contains('gallery__img')) {
    return;
  }

  largeImg.src = item.src;
});
