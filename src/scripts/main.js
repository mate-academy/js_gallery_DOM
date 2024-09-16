'use strict';

const galleryList = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  largeImage.src = item.href;
});
