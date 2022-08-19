'use strict';

const mainPhoto = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'A') {
    mainPhoto.src = e.target.href;
  } else {
    mainPhoto.src = e.target.parentElement.href;
  }
});
