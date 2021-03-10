/* eslint-disable no-useless-return */
/* eslint-disable no-shadow */
'use strict';

const largeImage = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  largeImage.src = link.href;
});
