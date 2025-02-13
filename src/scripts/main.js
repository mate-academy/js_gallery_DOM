'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const itemLink = e.target.closest('.list-item__link');

  if (itemLink && itemLink.href) {
    largeImg.src = itemLink.href;
  }
});
