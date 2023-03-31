'use strict';

const largeImage = document.querySelector('#largeImg');
const thumbs = document.querySelector('ul');

thumbs.addEventListener('click', (gallery) => {
  gallery.preventDefault();

  const item = gallery.target.closest('.list-item__link');

  largeImage.src = item.href;
});
