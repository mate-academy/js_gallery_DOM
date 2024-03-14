'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (clickEvent) => {
  const isGalleryImg = clickEvent.target.classList.contains('gallery__img');
  const isItemLink = clickEvent.target.classList.contains('list-item__link');

  if (isGalleryImg || isItemLink) {
    clickEvent.preventDefault();

    const imgURL = clickEvent.target.closest('.list-item__link').href;

    largeImg.src = imgURL;
  }
});
