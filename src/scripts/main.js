'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (ev) => {
  const item = ev.target.closest('.list-item');

  ev.preventDefault();

  if (!item) {
    return;
  }
  largeImg.src = item.children[0].getAttribute('href');
});
