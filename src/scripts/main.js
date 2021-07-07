'use strict';

const gallery = document.getElementsByClassName('gallery')[0];

gallery.addEventListener('click', (galleryEvent) => {
  galleryEvent.preventDefault();

  const item = galleryEvent.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  document.getElementById('largeImg').setAttribute('src', item['href']);
});
