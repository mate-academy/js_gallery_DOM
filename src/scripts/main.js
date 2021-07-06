'use strict';

const galleryImageList = document.querySelector('#thumbs');

const galleryMainImage = document.querySelector('#largeImg');

galleryImageList.addEventListener('click', (event) => {
  event.preventDefault();

  const galleryImageLink = event.target.closest('.list-item__link');

  galleryMainImage.src = galleryImageLink.href;
});
