'use strict';

const imageMain = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  imageMain.src = e.target.closest('.list-item__link');
});
