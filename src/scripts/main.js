'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  const largeImg = document.getElementById('largeImg');

  largeImg.setAttribute('src', link.href);
});
