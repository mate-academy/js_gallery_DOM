'use strict';

const gallery = document.querySelector('.gallery');
const bigPicture = document.querySelector('#largeImg');

gallery.addEventListener('click', (events) => {
  events.preventDefault();

  const item = events.target.closest('.list-item__link');

  if (!item || !gallery.contains(item)) {
    return;
  }

  bigPicture.src = events.target.parentElement.href;
});
