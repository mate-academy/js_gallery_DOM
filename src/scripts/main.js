'use strict';

const listImg = document.querySelector('.gallery__list');
const bigImg = document.querySelector('.gallery__large-img');
const defaultSrc = bigImg.src;

listImg.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link) {
    bigImg.src = link.href;
  } else {
    bigImg.src = defaultSrc;
  }
});
