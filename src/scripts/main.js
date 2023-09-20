/* eslint-disable no-shadow */
'use strict';

const imageList = document.querySelector('.gallery__list');
const mainPicture = document.querySelector('#largeImg');

imageList.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
    const selectedImage = event.target.tagName === 'A'
      ? event.target.href
      : event.target.parentNode.href;

    mainPicture.src = selectedImage;
  };
});
