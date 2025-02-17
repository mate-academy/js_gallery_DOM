'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', function (e) {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link) {
    mainImage.src = link.href;
  }
});
