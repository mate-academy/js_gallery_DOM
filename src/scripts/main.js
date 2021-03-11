/* eslint-disable no-useless-return */
/* eslint-disable no-shadow */
'use strict';

const largeImage = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (!link || !galleryList.contains(link)) {
    return;
  }

  largeImage.src = link.href;
});
