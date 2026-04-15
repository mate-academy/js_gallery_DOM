'use strict';

const galleryImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

if (galleryImg && galleryList) {
  galleryList.addEventListener('click', (e) => {
    const link = e.target.closest('.list-item__link');

    if (!link) {
      return;
    }
    e.preventDefault();

    const href = link.href;

    galleryImg.setAttribute('src', href);
  });
}
