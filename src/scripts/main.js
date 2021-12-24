'use strict';

const images = document.querySelector('.gallery__list');
const bigImage = document.querySelector('#largeImg');

images.addEventListener('click', (eve) => {
  eve.preventDefault();

  const item = eve.target.closest('.list-item__link');
  const src = item.getAttribute('href');

  bigImage.setAttribute('src', src);
});
