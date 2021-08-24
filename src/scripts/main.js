'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (eventLink) => {
  eventLink.preventDefault();
  
  const image = eventLink.target.closest('.list-item__link');

  largeImage.src = image.href;
});
