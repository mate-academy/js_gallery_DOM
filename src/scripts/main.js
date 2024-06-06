'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const thumbNail = e.target.closest('.list-item');

  if (!thumbNail) {
    return;
  }

  const img = document.querySelector('.gallery__large-img');

  return (img.src = thumbNail.querySelector('.list-item__link').href);
});
