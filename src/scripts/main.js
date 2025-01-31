'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const imageList = document.querySelector('.gallery__list');

imageList.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  mainImage.src = link.href;
});
