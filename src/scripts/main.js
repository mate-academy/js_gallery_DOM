'use strict';

const largeImage = document.getElementById('largeImg');
const thumbnails = document.getElementById('thumbs');

thumbnails.addEventListener('click', function(e) {
  const thumbnail = e.target.closest('.list-item__link');

  if (!thumbnail || !thumbnails.contains(thumbnail)) {
    return;
  }

  largeImage.src = thumbnail.href;
  largeImage.alt = thumbnail.title;

  e.preventDefault();
});
