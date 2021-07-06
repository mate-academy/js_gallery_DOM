'use strict';

const galleryList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  largeImg.src = item.href;
});
