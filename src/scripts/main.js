'use strict';

const largeImage = document.getElementById('largeImg');
const thumbImages = document.querySelectorAll('.gallery__thumb');

thumbImages.forEach(thumbImage => {
  thumbImage.addEventListener('click', currEvent => {
    currEvent.preventDefault();

    const newImageSrc = thumbImage.parentNode.href;

    largeImage.src = newImageSrc;
  });
});
