'use strict';

const largeImg = document.getElementById('largeImg');
const thumbnails = document.getElementById('thumbs');

thumbnails.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();
  largeImg.src = link.href;
});
