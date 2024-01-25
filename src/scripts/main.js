'use strict';

const images = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

images.addEventListener('click', (e) => {
  e.preventDefault();

  const a = e.target.closest('.list-item__link');

  mainImage.src = a.href;
});
