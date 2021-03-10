'use strict';

const largeImage = document.querySelector('#largeImg');
const imagesContainer = document.querySelector('#thumbs');

imagesContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const foundElement = e.target.closest('.list-item__link');

  if (!foundElement) {
    return;
  }

  largeImage.src = foundElement.href;
});
