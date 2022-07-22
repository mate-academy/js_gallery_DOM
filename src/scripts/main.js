'use strict';

const largeImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const imageLink = event.target.closest('.list-item__link');

  largeImage.src = imageLink;
});
