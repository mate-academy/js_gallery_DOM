'use strict';

const gallery = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  const image = ev.target.closest('.list-item__link');

  mainImage.src = image.href;
});
