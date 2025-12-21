'use strict';

const imageList = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

imageList.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link) {
    mainImage.src = link.href;
  }
});
