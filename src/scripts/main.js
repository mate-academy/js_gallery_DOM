'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'IMG' && e.target.tagName !== 'A') {
    return;
  }

  const closestLink = e.target.closest('a');
  const currentImg = closestLink.href;

  mainImage.src = currentImg;
});
