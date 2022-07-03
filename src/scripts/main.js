'use strict';

const thumbs = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const thumb = e.target.closest('[href]');

  mainImg.src = thumb.href;
});
