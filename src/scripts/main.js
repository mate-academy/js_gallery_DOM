'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbnails = document.querySelector('#thumbs');

const onThumbnailsClick = (e) => {
  const thumb = e.target.closest('a');

  if (!thumb) {
    return;
  }

  e.preventDefault();
  mainImage.src = thumb.href;
};

(() => {
  if (!mainImage || !thumbnails) {
    return;
  }

  thumbnails.addEventListener('click', (e) => {
    onThumbnailsClick(e);
  });
})();
