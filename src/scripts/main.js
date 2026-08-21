'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const itemLink = e.target.closest('.list-item__link');
  const mainImage = document.getElementById('largeImg');

  if (itemLink) {
    mainImage.src = itemLink.href;
  }
});
