'use strict';

const thumbs = document.getElementById('thumbs');

thumbs.onclick = function() {
  const thumbnail = event.target.closest('a');

  if (!thumbnail) {
    return;
  }
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
};

const largeImg = document.getElementById('largeImg');

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
