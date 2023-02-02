'use strict';

const list = document.body.querySelector('#thumbs');

list.addEventListener('click', myEvent => {
  if (myEvent.target === list) {
    return;
  }

  myEvent.preventDefault();

  let currentImage = myEvent.target.querySelector('img');

  if (!currentImage) {
    currentImage = myEvent.target;
  }

  const largeImage = document.body.querySelector('#largeImg');
  const currentImageSrcBeforeChanges = currentImage.src;

  currentImage.src = largeImage.src;
  largeImage.src = currentImageSrcBeforeChanges;
});
