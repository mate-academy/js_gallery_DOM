'use strict';

const mainImage = document.getElementById('largeImg');
const secondaryImages = document.getElementById('thumbs');

secondaryImages.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const link = clickEvent.target.closest('.list-item__link');

  if (link.tagName === 'A') {
    mainImage.src = link.href;
  }
});
