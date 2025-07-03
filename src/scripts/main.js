'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const newSrc = link.getAttribute('href');

  e.preventDefault();

  const largeImg = document.getElementById('largeImg');

  largeImg.src = newSrc;
});
