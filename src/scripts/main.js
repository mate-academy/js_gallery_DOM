'use strict';

const thumbnails = document.getElementById('thumbs');

const mainPicture = document.getElementById('largeImg');

thumbnails.addEventListener('click', (event) => {
  event.preventDefault();

  const pictureElement = event.target.closest('.list-item__link');

  mainPicture.src = pictureElement.href;
});
