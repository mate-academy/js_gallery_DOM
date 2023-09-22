'use strict';

const mainImage = document.getElementById('largeImg');
const secondaryImages = document.getElementById('thumbs');

secondaryImages.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.t.target.closest('.list-item__link');

  if (link.tagName === 'A') {
    mainImage.src = link.href;
  }
});
