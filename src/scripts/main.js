'use strict';

const list = document.querySelector('#thumbs');
const currentImage = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();
  currentImage.src = e.target.parentElement.href;
});
