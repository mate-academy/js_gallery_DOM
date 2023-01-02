'use strict';

const largeImage = document.querySelector('.gallery__large-img');

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (event1) => {
  event1.preventDefault();

  const item = event1.target.closest('.list-item__link');

  if (!item || !gallery.contains(item)) {
    return;
  }

  largeImage.src = item.href;
});
