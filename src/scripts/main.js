'use strict';

const galleryList = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    largeImage.src = e.target.parentNode.href;
  } else if (e.target.tagName === 'A') {
    largeImage.src = e.target.href;
  }
});
