'use strict';

const largeImage = document.querySelector('#largeImg');
const smalImages = document.querySelector('#thumbs');

smalImages.addEventListener('click', (eventFunc) => {
  eventFunc.preventDefault();
  largeImage.src = eventFunc.target.closest('a').href;
});
