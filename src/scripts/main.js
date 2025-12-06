'use strict';

const mainImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (e) => {
  const linkImg = e.target.closest('.list-item__link');
  const galleryImg = e.target.closest('.gallery__img');

  if (!linkImg && !galleryImg) {
    return;
  }

  if (linkImg) {
    e.preventDefault();

    const newSrc = linkImg.href;

    mainImg.src = newSrc;

    return;
  }

  if (galleryImg) {
    const newSrc = galleryImg.src;

    mainImg.src = newSrc;
  }
});
