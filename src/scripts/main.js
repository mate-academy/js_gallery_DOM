'use strict';

const largeImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (event) => {
  event.preventDefault();
  largeImage.src = event.target.parentElement.href;
});
