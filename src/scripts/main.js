'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const srcImg = link.getAttribute('href');

  e.preventDefault();
  largeImg.src = srcImg;
});
