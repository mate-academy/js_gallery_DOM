'use strict';

const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const itemLink = e.target.closest('.list-item__link');
  const image = e.target.closest('.gallery__thumb');
  const mainImage = document.getElementById('largeImg');

  if (image && itemLink) {
    mainImage.setAttribute('src', itemLink.getAttribute('href'));
  } else if (itemLink) {
    mainImage.setAttribute('src', itemLink.getAttribute('href'));
  }
});
