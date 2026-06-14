'use strict';

const image = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

image.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const alt = link.querySelector('img');

  e.preventDefault();
  largeImage.src = link.href;
  largeImage.alt = alt.alt;
});
