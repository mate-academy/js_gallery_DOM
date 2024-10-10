'use strict';

const images = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

images.onclick = function () {
  event.preventDefault();

  const linkToImage = event.target.closest('.list-item__link');

  if (linkToImage) {
    largeImg.src = linkToImage.href;
  }
};
