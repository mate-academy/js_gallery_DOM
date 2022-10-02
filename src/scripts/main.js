'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', e => {
  e.preventDefault();

  const thumbnail = e.target.closest('a');

  if (!thumbnail) {
    return;
  }

  showThumbnail(thumbnail.href, thumbnail.title);
});

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
