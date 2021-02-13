'use strict';

const bigImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (localEvent) => {
  localEvent.preventDefault();

  const liItem = localEvent.target.closest('li');

  if (liItem) {
    bigImg.src = liItem.querySelector('a').href;
  }
});
