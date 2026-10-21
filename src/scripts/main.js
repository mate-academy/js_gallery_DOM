'use strict';

const thumbs = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const element = e.target.closest('.list-item__link');

  if (!element) {
    return;
  }

  const imageUrl = element.href;

  mainImage.src = imageUrl;
});
