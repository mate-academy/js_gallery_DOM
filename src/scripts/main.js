'use strict';

const gallery = document.querySelector('.gallery__list');
const mainPhoto = document.querySelector('#largeImg');

gallery.addEventListener('click', (eve) => {
  const link = eve.target.closest('list-item__link');
  const item = eve.target.closest('.gallery__img');

  eve.preventDefault(link);
  mainPhoto.src = item.src;
});
