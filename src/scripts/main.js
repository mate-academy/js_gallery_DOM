'use strict';

const mainImage = document.getElementById('largeImg');
const secondaryImages = document.getElementById('thumbs');

secondaryImages.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (link.tagName === 'A') {
    mainImage.src = link.href;
  }
});
