'use strict';

const mainImage = document.querySelector('#largeImg');
const imagesList = document.querySelector('#thumbs');

imagesList.addEventListener('click', () => {
  event.preventDefault();

  const newMainImage = event.target.closest('.list-item__link');

  mainImage.src = newMainImage.href;
});
