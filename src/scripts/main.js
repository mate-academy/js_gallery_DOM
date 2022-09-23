'use strict';

const thumbnails = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

function showThumbnail(e) {
  const thumbnail = e.target.closest('.list-item__link');

  if (!thumbnail || !thumbnails.contains(thumbnail)) {
    return;
  }

  largeImage.src = thumbnail.href;
  largeImage.alt = thumbnail.title;
  e.preventDefault();
}

thumbnails.addEventListener('click', showThumbnail);
