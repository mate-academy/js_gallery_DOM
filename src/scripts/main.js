'use strict';

const mainPhoto = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery__list');

if (gallery) {
  gallery.addEventListener('click', (e) => {
    e.preventDefault();

    const listItem = e.target.closest('.list-item');

    if (listItem) {
      const imageSrc = listItem.querySelector('a').href;

      if (mainPhoto) {
        mainPhoto.src = imageSrc;
      }
    }
  });
}
