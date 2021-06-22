'use strict';

const listImg = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__large-img');
const defaultSrc = bigImg.src;

listImg.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.closest('.gallery__img')) {
    bigImg.src = e.target.src;
  } else {
    bigImg.src = defaultSrc;
  }
});
