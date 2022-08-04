'use strict';

const thumbs = document.querySelector('ul');
const img = document.querySelector('#largeImg');

thumbs.onclick = function(events) {
  const thumbnail = events.target.closest('a');

  if (!thumbnail) {
    return;
  }

  showThumbnail(thumbnail.href, thumbnail.title);
  events.preventDefault();
};

function showThumbnail(href, title) {
  img.src = href;
  img.alt = title;
}
