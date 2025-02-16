'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  const listItem = e.target.closest('.list-item');

  if (listItem) {
    const image = listItem.querySelector('img').src;
    const largeImage = document.querySelector('#largeImg');

    largeImage.src = image;
  }
});
