'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (ev) => {
  const thumbnailLink = ev.target.closest('a');

  if (!thumbnailLink || !thumbs.contains(thumbnailLink)) {
    return;
  }

  ev.preventDefault();

  const newSrc = thumbnailLink.href;
  const newAlt = thumbnailLink.getAttribute('title');

  largeImg.src = newSrc;
  largeImg.setAttribute('alt', newAlt);
});
