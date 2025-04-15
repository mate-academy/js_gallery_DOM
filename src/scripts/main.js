'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

document.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  const newSrc = link.href;
  const newAlt = link.title;

  largeImg.src = newSrc;
  largeImg.alt = newAlt;
});
