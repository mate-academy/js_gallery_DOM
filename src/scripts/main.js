'use strict';

const openedImage = document.querySelector('#largeImg');

function openImage() {
  event.preventDefault();

  const img = event.target.closest('A');

  if (img.tagName === 'A') {
    openedImage.src = img.href;
  }
}

document.body.addEventListener('click', openImage, true);
