'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainPicture = document.querySelector('.gallery__img');

galleryList.addEventListener('click', e => {
  e.preventDefault();

  const closest = e.target.closest('.list-item__link');

  mainPicture.src = closest.href;
});
