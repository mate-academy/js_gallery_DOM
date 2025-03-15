'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const image = clickEvent.target.closest('.list-item__link');

  mainImage.src = image.href;
});
