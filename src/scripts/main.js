'use strict';

const mainImg = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const imgLink = e.target.closest('.list-item__link');

  if (!imgLink) {
    return;
  }

  mainImg.src = imgLink.href;
});
