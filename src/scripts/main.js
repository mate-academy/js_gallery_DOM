'use strict';

const mainImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', handler);

function handler(e) {
  e.preventDefault();

  const thumb = e.target.closest('a');

  if (!thumb) {
    return;
  }

  const src = thumb.href;
  const alt = thumb.title;

  mainImg.src = src;
  mainImg.alt = alt;
}
