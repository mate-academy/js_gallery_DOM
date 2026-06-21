'use strict';

const largeImg = document.getElementById('largeImg');
const thumbsList = document.getElementById('thumbs');

thumbsList.addEventListener('click', function (e) {
  const thumbnailLink = e.target.closest('a');

  if (!thumbnailLink) {
    return;
  }

  if (!thumbsList.contains(thumbnailLink)) {
    return;
  }

  e.preventDefault();

  largeImg.src = thumbnailLink.href;

  largeImg.alt = thumbnailLink.title;
});
