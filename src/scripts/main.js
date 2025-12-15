'use strict';

const thumbsEl = document.getElementById('thumbs');
const largeImgEl = document.getElementById('largeImg');

thumbsEl.addEventListener('click', (e) => {
  e.preventDefault();

  const linkEl = e.target.closest('a');

  if (!linkEl || !thumbsEl.contains(linkEl)) {
    return;
  }

  largeImgEl.src = linkEl.href;
});
