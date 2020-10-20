'use strict';

const galleryList = document.querySelector('#thumbs');

const galleryMainImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const eventElement = event.target.closest('.list-item__link');

  galleryMainImage.src = eventElement.href;
});
