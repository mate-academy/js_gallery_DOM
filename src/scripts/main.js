'use strict';

const largeImg = document.getElementById('largeImg');
const listGallery = document.querySelector('.gallery__list');

listGallery.addEventListener('click', (evt) => {
  evt.preventDefault();

  let target = evt.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    const newSrc = target.getAttribute('href');

    largeImg.setAttribute('src', newSrc);
  }
});
