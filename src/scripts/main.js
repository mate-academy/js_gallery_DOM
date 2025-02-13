'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

galleryList.addEventListener('click', (e) => {
  const smallImgLink = e.target.closest('.list-item__link');

  e.preventDefault();

  if (!smallImgLink) {
    return;
  }

  const newImg = smallImgLink.getAttribute('href');

  largeImg.setAttribute('src', newImg);
});
