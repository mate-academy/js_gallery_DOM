'use strict';

const mainImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

if (!mainImg || !galleryList) {
} else {
  galleryList.addEventListener('click', (e) => {
    const linkImg = e.target.closest('.list-item__link');
    const galleryImg = e.target.closest('.gallery__img');

    if (!linkImg && !galleryImg) {
      return;
    }

    if (linkImg) {
      e.preventDefault();
      mainImg.src = linkImg.href;

      return;
    }

    if (galleryImg) {
      mainImg.src = galleryImg.src;
    }
  });
}
