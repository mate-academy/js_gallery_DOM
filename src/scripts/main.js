'use strict';

const showImg = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName === 'IMG') {
    const imgURL = e.target.parentElement.href;

    showImg.src = imgURL;
  }
});
