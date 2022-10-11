'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (evImg) => {
  const thumb = evImg.target.closest('.list-item__link');

  if (!thumb) {
    return;
  };

  evImg.preventDefault();

  mainImage.src = thumb.href;
});
