'use strict';

const gallerylist = document.querySelector('.gallery__list');
const mainImg = document.querySelector('#largeImg');

gallerylist.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  mainImg.src = item.href;
});
