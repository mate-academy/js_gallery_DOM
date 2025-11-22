'use strict';

const mainImg = document.getElementById('largeImg');
const images = document.getElementById('thumbs');

images.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('a');

  if (!link) {
    return;
  }

  const image = link.querySelector('img');
  const srcValue = image.getAttribute('src');

  mainImg.setAttribute('src', srcValue);
});
