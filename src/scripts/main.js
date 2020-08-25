'use strict';

const largeImage = document.getElementById('largeImg');

const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  largeImage.src = event.target.closest('.list-item__link').href;
});
