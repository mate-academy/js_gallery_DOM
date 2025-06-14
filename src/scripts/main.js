'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  const newImgSrc = link.getAttribute('href');

  largeImg.src = new URL(newImgSrc, window.location.href).href;
  largeImg.alt = link.title || 'main image';
});
