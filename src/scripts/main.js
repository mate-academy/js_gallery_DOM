'use strict';

const smallImages = document.querySelectorAll('.gallery__thumb');
const largeImage = document.querySelector('#largeImg');

smallImages.addEventListener('click', (event1) => {
  event1.preventDefault();

  let target = event1.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    largeImage.src = target.href;
  }
});
