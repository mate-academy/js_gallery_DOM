'use strict';

const mainImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'A') {
    mainImage.src = e.target.href;
  }

  if (e.target.tagName === 'IMG') {
    mainImage.src = e.target.parentElement.href;
  }
});
