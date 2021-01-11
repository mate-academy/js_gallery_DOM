'use strict';

const list = document.querySelector('#thumbs');
const currentImage = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target) {
    currentImage.src = e.target.parentElement.href;
  }
});
