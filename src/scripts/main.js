'use strict';

const thumbnails = document.querySelectorAll('.list-item');
const largeImage = document.querySelector('.gallery__large-img');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    largeImage.src = thumbnail.firstElementChild.href;
  });
});
