'use strict';

const images = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
images.addEventListener('click', (event) => {
  event.preventDefault();

  const a = event.target.closest('.list-item__link');

  mainImage.src = a.href;
});
