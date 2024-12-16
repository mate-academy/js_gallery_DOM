'use strict';

const galleryList = document.querySelector('ul');
const mainImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  mainImage.src = link.href;
});
