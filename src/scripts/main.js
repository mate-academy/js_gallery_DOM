'use strict';

const imagesContainer = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

imagesContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const smallImage = e.target.closest('.list-item__link');

  if (!smallImage) {
    return;
  }
  largeImg.src = smallImage.href;
});
