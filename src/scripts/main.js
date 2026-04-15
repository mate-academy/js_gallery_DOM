'use strict';

const galleryImg = document.querySelector('.gallery__img');
const galleryList = document.querySelector('.gallery__list');

if (galleryImg && galleryList) {
  galleryList.addEventListener('click', (e) => {
    const link = e.target.closest('.list-item__link');

    if (!link) {
      return;
    }
    e.preventDefault();

    const href = link.getAttribute('href');

    galleryImg.setAttribute('src', href);
  });
}
