'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();
  largeImg.src = link.href;
  largeImg.alt = link.title;
});
