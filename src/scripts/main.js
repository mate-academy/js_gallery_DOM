'use strict';

const largeImage = document.querySelector('.gallery__img');
const photos = document.querySelector('ul');

list.addEventListener('click', (event) => {
  const photo = event.target.closest('a');

  event.preventDefault();
  largeImage.src = photo.href;
});
