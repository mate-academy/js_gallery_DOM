'use strict';

const largeImage = document.querySelector('#largeImg');
const smalImages = document.querySelector('#thumbs');

smalImages.addEventListener('click', (myEvent) => {
  myEvent.preventDefault();
  largeImage.src = myEvent.target.closest('a').href;
});
