'use strict';

const thumbsList = document.querySelector('#thumbs');
const bigImage = document.querySelector('#largeImg');

thumbsList.addEventListener('click', (events) => {
  events.preventDefault();

  const clickedThumb = events.target.closest('.gallery__thumb');

  if (!clickedThumb) {
    return;
  }

  const link = clickedThumb.closest('a');

  if (link) {
    bigImage.src = link.href;
  }
});
