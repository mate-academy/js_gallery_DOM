'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

const handler = function(e) {
  e.preventDefault();

  if (e.target.tagName === 'A') {
    largeImg.src = e.target.href;
  } else if (e.target.tagName === 'IMG') {
    largeImg.src = e.path[1].href;
  }
};

galleryList.addEventListener('click', handler);
