'use strict';

const thumb = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !gallery.contains(item)) {
    return;
  }

  thumb.src = item.href;
});
