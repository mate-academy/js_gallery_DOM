'use strict';

const largeImg = document.getElementById('largeImg');
const thumbnails = document.getElementById('thumbs');

thumbnails.addEventListener('click', (ev) => {
  const thumbnail = ev.target.closest('a');

  if (!thumbnail) {
    return;
  }

  showImage(thumbnail.href, thumbnail.title);
  ev.preventDefault();
});

function showImage(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
