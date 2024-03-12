'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const img = e.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  largeImg.src = img.href;
});
