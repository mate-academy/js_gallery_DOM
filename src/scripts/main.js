'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const anchor = e.target.closest('a');

  if (!anchor) {
    return;
  }

  mainImage.src = anchor.href;
});
