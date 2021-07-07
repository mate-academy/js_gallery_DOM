'use strict';

const gallery = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const picture = event.target.closest('.list-item__link');

  largeImage.src = picture.href;
});
