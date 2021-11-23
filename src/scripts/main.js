'use strict';

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (clickEvent) => {
  const item = clickEvent.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  event.preventDefault();

  largeImage.src = item.href;
});
