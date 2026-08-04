'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (info) => {
  info.preventDefault();

  const link = info.target.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
