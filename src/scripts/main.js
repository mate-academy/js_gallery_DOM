'use strict';

const images = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

images.addEventListener('click', (e) => {
  e.preventDefault();

  const linkToImage = e.target.closest('.list-item__link');

  if (linkToImage) {
    mainImage.src = linkToImage.href;
  }
});
