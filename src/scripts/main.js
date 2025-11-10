'use strict';

const thumbs = document.getElementById('thumbs');
const largeFoto = document.getElementById('largeImg');

thumbs.addEventListener('click', () => {
  const link = event.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }
  event.preventDefault();

  const newSrc = link.href;

  largeFoto.src = newSrc;
  largeFoto.alt = link.title || 'image';
});
