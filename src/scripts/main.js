'use strict';

const mainPhoto = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (eventObj) => {
  eventObj.preventDefault();

  if (eventObj.target.tagName === 'A') {
    mainPhoto.src = eventObj.target.href;
  } else {
    mainPhoto.src = eventObj.target.parentElement.href;
  }
});
