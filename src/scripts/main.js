'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', function(e) {
  e.preventDefault();

  const itemLink = e.target.closest('.list-item__link');

  largeImg.src = itemLink.href;
});
