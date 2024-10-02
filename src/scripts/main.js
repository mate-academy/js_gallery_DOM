'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.onclick = function (evnt) {
  const thumbnail = evnt.target.closest('a');

  if (!thumbnail) {
    return;
  }

  showThumbnail(thumbnail.href, thumbnail.title);
  evnt.preventDefault();
};

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
