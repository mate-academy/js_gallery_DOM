'use strict';

const mainImg = document.querySelector('#largeImg');
const pickImg = document.querySelector('.gallery');

pickImg.addEventListener('click', (imgChange) => {
  imgChange.preventDefault();

  const link = imgChange.target.closest('a');

  if (!link) {
    return;
  }

  mainImg.src = link.href;
});
