'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (ev) => {
  const thumbnailLink = ev.target.closest('a');

  if (!thumbnailLink || !thumbs.contains(thumbnailLink)) {
    return;
  }

  ev.preventDefault();

  largeImg.src = thumbnailLink.href;
  largeImg.alt = thumbnailLink.title;
});
