'use strict';

const gallery = document.querySelector('.gallery');
const bigImage = document.getElementById('largeImg');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const image = event.target.closest('a');

  bigImage.src = image.href;
});
