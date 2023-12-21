'use strict';

const thumbs = document.querySelector('#thumbs');
const picture = document.querySelector('#largeImg');

thumbs.addEventListener('click', function(e) {
  e.preventDefault();

  const target = e.target;

  if (target.tagName !== 'IMG' && target.tagName !== 'A') {
    return;
  }

  selectThumbnail(target);
});

function selectThumbnail(tag) {
  if (tag.tagName === 'A') {
    const path = tag.href;

    picture.src = path;
  } else {
    const path = tag.closest('a');

    picture.src = path;
  }
}
