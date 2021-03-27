'use strict';

const imagesList = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

function changeImage(e) {
  e.preventDefault();

  const imagesLink = e.target.closest('.list-item__link');

  if (imagesLink) {
    largeImage.src = imagesLink.href;
  }
};

imagesList.addEventListener('click', changeImage);
